pipeline {
        agent { label 'kaniko' }
        environment {
            imageName = 'hifra/todoapp-backend-kaniko'
        }
        stages {
            stage('Execute kaniko') {
                steps {
                    container('kaniko') {
                        script {
                            sh 'pwd'
                            props = readJSON file:'package.json'
                            sh """
                            /kaniko/executor \
                            --context=dir://workspace \
                            --destination=$imageName:${props.version}
                            """
                        }
                    }
                }
            }
        }
    }