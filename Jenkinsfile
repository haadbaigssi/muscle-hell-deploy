pipeline{
  agent {
    docker {
        image 'node:lts-bullseye-slim' 
        args '-p 3000:3000' 
    }
  }
  
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }

  stages{
    stage('build'){
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Production') {
      steps {
        withAWS(region:'US East (N. Virginia) us-east-1',credentials:'haadssi') {
          s3Delete(bucket: 'muscle-hell-deploy', path:'**/*')
          s3Upload(bucket: 'muscle-hell-deploy', workingDir:'build', includePathPattern:'**/*');
        }
      }
    }
    stage("upload to S3"){
      steps{
        echo "deploying the app."
      }
    }
  }
}
