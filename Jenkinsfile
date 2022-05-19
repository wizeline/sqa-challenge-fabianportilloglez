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
                scannerHome = tool 'SonarQubeScanner'
             } 
            steps {
                echo 'running Sonarqube..'
                echo "${scannerHome}"
                withSonarQubeEnv('SonarQube') {
                    sh 'pwd'
                    sh "${scannerHome}/bin/sonar-scanner"
                    //-Dproject.settings=sonar-project.properties"  or -Dsonar.projectKey=NAME"
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