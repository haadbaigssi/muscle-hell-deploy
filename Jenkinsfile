pipeline{
  agent any

  stages {    
    stage('Build') { 
        agent {
          docker {
              image 'node:lts-bullseye-slim' 
              args '-p 3000:3000' 
          }
        }
        
        steps {
            sh 'npm install' 
        }
    }
  }
}
