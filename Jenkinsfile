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
		
            }
        }
	stage('PROD') {
	    steps{
		echo 'Prodding...'
	    }
	}
    }
}
