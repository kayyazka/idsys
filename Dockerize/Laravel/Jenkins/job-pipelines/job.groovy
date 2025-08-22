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

                        stage('Build  Docker Image') {
                            sh """                      
                            docker build -t kayyazka/laravel:latest -f \$WORKSPACE/Dockerize/Laravel/hello-world/Dockerfile  \$WORKSPACE/Dockerize/Laravel/hello-world/
                            """
                        }
                        
                       
                        stage('Unit Test') {
                                sh """
                                docker run --rm kayyazka/laravel:latest ./vendor/bin/phpunit
                                docker run --rm kayyazka/laravel:latest php artisan test
                                """
                            }
                        

                        
                        stage('Push Docker Image') {
                                sh """
                                docker push kayyazka/laravel:latest
                                """
                            }
                        

                        
                        stage('Run Docker Container') {
                                sh """
                                docker run -d --name laravel-app-test -p 8000:80 kayyazka/laravel:latest
                                """
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
