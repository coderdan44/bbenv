
pipeline {    
    agent any

    stages {
        stage('DEV') {
            steps {
                echo 'DEV'
		sh 'ssh -i ~/BBKeypair.pem ubuntu@54.175.173.193 pwd'
            }
        }
        stage('TEST') {
            steps {
                echo 'Testing...'
		sh 'ls'
		sh 'ssh -i ~/BBKeypair.pem ubuntu@172.31.90.151 pwd'
            }
        }
	stage('PROD') {
	    steps{
		echo 'Prodding...'
	    }
	}
    }
}
