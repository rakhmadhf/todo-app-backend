pipeline {
        agent {
            kubernetes {
                label "kaniko"
                defaultContainer 'jnlp'
                yaml """
apiVersion: v1
kind: Pod
metadata:
  name: kaniko
spec:
  containers:
  - name: kaniko
    image: gcr.io/kaniko-project/executor:latest
    imagePullPolicy: IfNotPresent
    command:
    - /busybox/cat
    tty: true
    volumeMounts:
      - name: kaniko-secret
        mountPath: /kaniko/.docker
  restartPolicy: Never
  volumes:
    - name: kaniko-secret
      secret:
        secretName: registry-cred
        items:
          - key: .dockerconfigjson
            path: config.json
                """
            }
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