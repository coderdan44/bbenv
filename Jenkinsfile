
pipeline {


    stages {
        stage('DEV') {
            steps {
                echo 'DEV'
                ssh ubuntu@172.31.86.74
            }
        }
        stage('TEST') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }
    }
}
