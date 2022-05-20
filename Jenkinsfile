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
                echo "Quality Gate - Sonarqube"
                    waitForQualityGate abortPipeline: true
                } 
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
    }
    post {
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
