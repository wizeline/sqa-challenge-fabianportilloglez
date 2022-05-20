pipeline {
    agent any
    tools { nodejs 'nodeJS-SQA' }
    stages {
        stage('Dependencies') {
            steps {
                echo 'installing dependencies..'
                sh ''' 
                    pwd \
                    rm -rf node_modules package-lock.json && npm install
                    rm -rf reports
                '''
            }
        }
        stage('Linting tools - Eslint') {
            steps {
                echo 'running Eslint..'
            }
        }
        stage('Static Analysis - Sonarqube') {
            environment {
                SCANNER_HOME = tool 'SonarQubeScanner'
                PROJECT_NAME = 'SQA-Challenge'
             } 
            steps {
                echo 'running Sonarqube..'
                    echo "${SCANNER_HOME}"
                    withSonarQubeEnv('SonarQube') {
                    sh '''
                        ${SCANNER_HOME}/bin/sonar-scanner \
                        -Dsonar.projectKey="${PROJECT_NAME}" 
                        '''
                } 
            } 
        }
        stage('Quality Gate - Sonarqube') {
            steps {
                echo 'waiting for QualityGate Sonarqube..'
                    waitForQualityGate abortPipeline: true
            } 
        } 
        stage('Backend') {
            steps {
                echo 'running backend tests...'
                //sh 'npm run backendTests'
            }
        }
        stage('Performance') {
            steps {
                echo 'running performance tests...'
            }
        }
        stage('Frontend') {
            steps {
                echo 'running frontend tests...'
            }
        }
        stage('Send build results Slack'){
            echo 'sending build results to slack channel'
            post {
                success {
                    echo 'success!'
                    slackSend color: "#11cd4b", message: "*Build Passed*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"
                }
                failure {
                    echo 'marked as failure'
                    slackSend color: "#F50407", message: "*Build Failed*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"
                }
                unstable {
                    echo 'marked as unstable'
                    slackSend color: "#df6805", message: "*Build Unstable*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"
                }
                aborted {
                    echo 'aborted'
                    slackSend color: "#f3f024", message: "*Build Aborted*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"        
                }
            }
        }
    }
}
