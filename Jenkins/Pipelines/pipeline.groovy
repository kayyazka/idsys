import groovy.json.JsonSlurper
def project_env = "DEVELOPMENT"

def environment = "development"
def git_repo = "https://github.com/"
def service = "application-name"
def make_build = "api"
def awsid = "xxxxx"

pipelineJob("${project_env}/application-name") {
    parameters {
        choiceParam('REQUESTED_ACTION', ['Release', 'Restart'], '')
        listGitBranches {
            name('BRANCH')
            branchFilter('.*')
            remoteURL(git_repo)
            tagFilter('*')
            defaultValue('main')
            description('')
            quickFilterEnabled(true)
            selectedValue('DEFAULT')
            sortMode('ASCENDING_SMART')
            type('PT_BRANCH')
            listSize('5')
            credentialsId('github')
        }
        
    }
    
    logRotator {
        numToKeep(10)
    }

    definition {
        cps {
            sandbox()
            script('''





node('master') {
    podTemplate(containers: [
        containerTemplate(
            name: 'golang',
            image: 'golang:1.22.5',
            command: 'sleep',
            args: '99d'
        ),
        containerTemplate(
            name: 'kaniko',
            image: 'gcr.io/kaniko-project/executor:v1.23.0-debug',
            ttyEnabled: true,
            command: 'sleep 1000000',
            args: '',
        ),
        containerTemplate(
            name: 'argocd',
            image: 'argoproj/argocd:v2.4.2',
            ttyEnabled: true,
            runAsUser: "0",
            command: 'cat',
            envVars:[
                envVar(key: 'ARGOCD_OPTS', value: '--insecure --plaintext --loglevel debug'),
                envVar(key: 'ARGOCD_SERVER', value: 'argocd-server.argocd.svc.cluster.local'),
                secretEnvVar(key: 'ARGOCD_AUTH_TOKEN', secretName: 'jenkins-secret', secretKey: 'TOKEN_ARGOCD')
            ]
        ),
    ],
    volumes: [
        secretVolume(mountPath: '/root/.aws/', secretName: 'aws-cred-secret'),
        configMapVolume(mountPath: '/kaniko/.docker', configMapName: 'docker-config'),
    ]) {
        node(POD_LABEL) {
            try {
                stage('GitSCM') {
                        def scmVars = checkout([$class: 'GitSCM',
                            branches: [[name: "${params.BRANCH}"]],
                            doGenerateSubmoduleConfigurations: false,
                            extensions: [],
                            gitTool: 'Default',
                            submoduleCfg: [],
                            userRemoteConfigs: [[credentialsId: 'github', url: ' ''' + git_repo +'''.git']]
                        ])
                        echo "${scmVars.GIT_COMMIT}"
                        reposcm = scmVars
                        app_version = reposcm.GIT_COMMIT
                        env.GIT_COMMIT_DESCRIPTION = reposcm.GIT_COMMIT
                }

                container('golang') {
                    stage('Prepare') {
                            echo "${WORKSPACE}"
                            withCredentials([gitUsernamePassword(credentialsId: 'github', gitToolName: 'git')]) {
                                sh 'export GOOS=linux'
                                sh 'export GOARCH=amd64'
                                sh 'git config --global url.https://github.com/.insteadOf git@github.com:'
                                sh 'make build-'''+ make_build +''' GOOS=$GOOS GOARCH=$GOARCH'
                        }
                    }
                }

                container('kaniko') {
                    stage('Build image') {
                            sh ' /kaniko/executor -c `pwd` --build-arg APP_NAME='''+ make_build +'''  --destination='''+ awsid +'''.dkr.ecr.ap-southeast-1.amazonaws.com/'''+ environment +''':''' + service + '''-' + app_version
                    }
                }

                container('argocd') {
                    stage('App set image') {
                            sh 'argocd app set ''' + service + ''' --kustomize-image app='''+ awsid +'''.dkr.ecr.ap-southeast-1.amazonaws.com/'''+ environment +''':''' + service + '''-' + app_version
                        }
                    
                    stage('Check env') {
                            sh 'argocd app get ''' + service + ''' --hard-refresh'
                        }
                    
                    stage('Deploy to k8s') {
                            sh 'argocd app sync ''' + service + ''' --prune'
                    }
                }
            } catch (e) {
                // If there was an exception thrown, the build failed
                currentBuild.result = "FAILED"
                throw e
            } finally {
                // Success or failure, no notifications
            }
        }
    }
}

'''.stripIndent())
        }
    }
}