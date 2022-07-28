pipeline{
  agent {
    label 'docker'
  }

  stages {    
    stage('Build') { 
        agent {
          docker {
              label 'docker'
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
