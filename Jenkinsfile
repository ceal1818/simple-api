pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'simple-api'
    }

    stages {
        stage('Start building app') {
            when {
                not {
                    branch 'main'
                }
            }
            steps {
                // Build your Node.js API
                sh 'npm install'
            }
        }
        stage('Build Docker image') {
            steps {
                // Build Docker image for the Node.js API
                script {
                    docker.build(env.DOCKER_IMAGE)
                }
            }
        }
        stage('Deploy in DEV') {
            when {
                expression {
                    return env.BRANCH_NAME == 'develop' || env.BRANCH_NAME ==~ /^feature\/.*/
                }
            }
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
        stage('Deploy in QA') {
            when {
                expression {
                    return env.BRANCH_NAME ==~ /^release\/.*/
                }
            }
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
        stage('Deploy in QA') {
            when {
                branch 'main'
            }
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