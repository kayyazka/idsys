import groovy.json.JsonSlurper

def project_env = "DEVELOPMENT"
def service = "laravel-app"

pipelineJob("${project_env}/${service}") {

    logRotator { numToKeep(10) }

    definition {
        cps {
            sandbox()
            script('''

                node {
                    try {
                        stage('Checkout') {
                            checkout([$class: 'GitSCM',
                                branches: [[name: "main"]],
                                doGenerateSubmoduleConfigurations: false,
                                extensions: [],
                                userRemoteConfigs: [[
                                    url: 'https://github.com/kayyazka/idsys'
                                ]]
                            ])
                        }

                        stage('Build & Push Docker Image') {
                            sh """                      
                            docker build -t kayyazka/laravel:latest -f \$WORKSPACE/Dockerize/Laravel/hello-world/Dockerfile  \$WORKSPACE/Dockerize/Laravel/hello-world/
                            """
                        }
                        
                        if (false){
                            stage('Trivy Security Scan') {
                                sh """
                                if ! command -v trivy &> /dev/null; then
                                    curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh
                                fi
                                trivy image --severity HIGH,CRITICAL --exit-code 1 kayyazka/laravel-app:latest
                                """
                            }
                        }

                        if (false) {
                            stage('Push Docker Image') {
                                sh """
                                docker push kayyazka/laravel-app:${params.BRANCH}-${GIT_COMMIT}
                                """
                            }
                        }

                        if (false) {
                            stage('Test Docker Image') {
                                sh """
                                docker run --rm kayyazka/laravel-app:${params.BRANCH}-${GIT_COMMIT}                                     php artisan test
                                """
                            }
                        }

                        if (false) {
                            stage('Run Docker Container') {
                                sh """
                                docker run -d --name laravel-app-test -p 8081:80 kayyazka/laravel-app:${params.BRANCH}-${GIT_COMMIT}
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
