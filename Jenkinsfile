pipeline {
        agent {
            label 'kaniko'
        }
        environment {
            imageName = 'hifra/todoapp-backend-kaniko'

        }
        stages {
            stage('Build and push image') {
                steps {
                    container('kaniko') {
                        script {
                            props = readJSON file:'package.json'

                            withCredentials([file(credentialsId: 'docker-credential', variable: 'dockerConfig')]) {
                                // sh 'cp $dockerConfig /kaniko/.docker/config.json'
                                sh "export DOCKER_CONFIG=$dockerConfig"
                                sh """#!/busybox/sh -xe
                                /kaniko/executor \
                                --context=`pwd` \
                                --destination=$imageName:${props.version} \
                                --destination=$imageName:latest
                                """
                            }
                        }
                    }
                }
            }
        }
    }