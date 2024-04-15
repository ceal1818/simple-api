pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'simple-api'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your version control system (e.g., Git)
                git 'git@github.com:ceal1818/simple-api.git'
            }
        }

        stage('Build') {
            steps {
                // Build your Node.js API
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                // Build Docker image for the Node.js API
                script {
                    docker.build(env.DOCKER_IMAGE)
                }
            }
        }

        stage('Deploy') {
            steps {
                // Deploy Docker container
                script {
                    docker.withRegistry('', '') {
                        // Stop and remove existing container
                        sh 'docker stop sa1 || true'
                        sh 'docker rm sa1 || true'
                        
                        // Run Docker container
                        sh 'docker run -d -p 3000:3000 --name sa1 simple-api'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}