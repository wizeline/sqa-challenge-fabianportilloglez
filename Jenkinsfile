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
                sh 'npm run lint'
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
                sh 'npm run backendTests'
            }
        }
        stage('Frontend') {
            steps {
                echo 'running frontend tests...'
                //sh 'npm run frontendTests' 
            }
        }
    }
    post {
        success {
            echo 'success!'
            slackSend color: "#11cd4b", channel: "#sqa-challenge-fabianpg-notif", message: "*Build Passed*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"
        }
        failure {
            echo 'marked as failure'
            slackSend color: "#F50407", channel: "#sqa-challenge-fabianpg-notif", message: "*Build Failed*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"
        }
        unstable {
            echo 'marked as unstable'
            slackSend color: "#df6805", channel: "#sqa-challenge-fabianpg-notif", message: "*Build Unstable*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"
        }
        aborted {
            echo 'aborted'
            slackSend color: "#f3f024", channel: "#sqa-challenge-fabianpg-notif", message: "*Build Aborted*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"        
        }
    }
} 
