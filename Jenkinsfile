
pipeline {    
    agent any

    stages {
        stage('DEV') {
            steps {
                echo 'DEV'
		ssh -i /var/lib/jenkins/BBKeypair.pem ubuntu@172.31.86.74 pwd
            }
        }
        stage('TEST') {
            steps {
                echo 'Testing...'
		sh 'ls'
		ssh -i /var/lib/jenkins/BBKeypair.pem ubuntu@172.31.90.151 pwd
            }
        }
	stage('PROD') {
	    steps{
		echo 'Prodding...'
	    }
	}
    }
}
