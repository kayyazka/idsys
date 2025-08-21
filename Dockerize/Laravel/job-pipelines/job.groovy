import groovy.json.JsonSlurper

def project_env = "DEVELOPMENT"
def git_repo = "https://github.com/your-org/laravel-app"
def service = "laravel-app"
def dockerhub_user = "yourdockerhubuser"

pipelineJob("${project_env}/${service }") {
    parameters {
        choiceParam('REQUESTED_ACTION', ['Release', 'Restart'], '')
        stringParam('BRANCH', 'main', 'Git branch to build')
    }

    logRotator { numToKeep(10) }

    definition {
        cps {
            sandbox()
            script('''
node {
    try {
        stage('Checkout') {
            checkout([$class: 'GitSCM',
                branches: [[name: "${params.BRANCH}"]],
                userRemoteConfigs: [[credentialsId: 'user-github', url: git_repo]]
            ])
        }

        if (false) {
            stage('Build Docker Image') {
                sh """
                docker buildx create --name mybuilder --use || true
                docker buildx inspect --bootstrap
                docker buildx build --platform linux/amd64,linux/arm64 -t ''' + dockerhub_user + '''/''' + service + ''':${params.BRANCH}-${GIT_COMMIT} .
                """
            }
        }

        if (false) {
            stage('Trivy Security Scan') {
                sh """
                if ! command -v trivy &> /dev/null; then
                    curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh
                fi
                trivy image --severity HIGH,CRITICAL --exit-code 1 ''' + dockerhub_user + '''/''' + service + ''':${params.BRANCH}-${GIT_COMMIT}
                """
            }
        }

        if (false) {
            stage('Push Docker Image') {
                sh """
                docker push ''' + dockerhub_user + '''/''' + service + ''':${params.BRANCH}-${GIT_COMMIT}
                """
            }
        }

        if (false) {
            stage('Test Docker Image') {
                sh """
                docker run --rm ''' + dockerhub_user + '''/''' + service + ''':${params.BRANCH}-${GIT_COMMIT} \
                    php artisan test
                """
            }
        }

        if (false) {
            stage('Run Docker Container') {
                sh """
                docker run -d --name ''' + service + '''-test -p 8081:80 ''' + dockerhub_user + '''/''' + service + ''':${params.BRANCH}-${GIT_COMMIT}
                """
            }
        }

    } catch (e) {
        currentBuild.result = "FAILED"
        throw e
    }
}
'''.stripIndent())
        }
    }
}
