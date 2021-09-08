pipeline {
    agent any

    stages {
        stage('npm install') {
            steps {
                bat 'npm install'
            }
        }
      stage('build') {
            steps {
                bat 'ng build'
            }
        }
    }
}
