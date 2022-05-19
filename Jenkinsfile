// Declarative //
pipeline {
    agent any
    tools { nodejs 'nodeJS-SQA' }
    stages {
        stage('Dependencies') {
            steps {
                echo 'installing dependencies..'
                // npm install -g newman-reporter-htmlextra /
                sh ''' 
                    rm -rf node_modules package-lock.json && npm install
                '''
            }
        }
        stage('Linting tools') {
            steps {
                echo 'running Eslint..'
            }
        }
        stage('Static Analysis Sonarqube') {
            environment {
                SCANNER_HOME = tool 'SonarQubeScanner'
                 PROJECT_NAME = 'SQA-Challenge'
             } 
            steps {
                echo 'running Sonarqube..'
                echo "${SCANNER_HOME}"
                withSonarQubeEnv('SonarQube') {
                    sh 'pwd'
                    sh '''
                        ${SCANNER_HOME}/bin/sonar-scanner \
                        -Dsonar.projectKey="${PROJECT_NAME} \
                        -Dproject.settings=sonar-project.properties
                    '''
                }
            }
        }
        stage('Quality Gate') {
            steps {
                echo 'running Sonarqube..'
                waitForQualityGate abortPipeline: true
            }
        }
        stage('Backend') {
            steps {
                echo 'running backend tests...'
                sh 'npm run backendTests'
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
}