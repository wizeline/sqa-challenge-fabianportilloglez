// Declarative //
pipeline {
    agent any
    tools { nodejs 'nodeJS-SQA' }
    stages {
        stage('Dependencies') {
            steps {
                echo 'installing dependencies..'
            }
        }
        stage('Linting tools') {
            steps {
                echo 'running Eslint..'
            }
        }
        stage('Static Analysis') {
            steps {
                echo 'running Sonarqube..'
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
