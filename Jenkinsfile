pipeline {    
    agent any

    stages {
        stage('DEV') {
            steps {
                echo 'DEV'
		ls
            }
        }
        stage('TEST') {
            steps {
                echo 'Testing...'
		sh 'ls'
		sh 'ssh -i /var/lib/jenkins/BBKeypair.pem ubuntu@172.31.90.151 pwd'
            }
        }
	stage('PROD') {
	    steps{
		echo 'Prodding...'
	    }
	}
    }
}
