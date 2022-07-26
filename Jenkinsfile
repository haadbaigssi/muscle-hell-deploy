pipeline{

  agent any

  stages{
    stage("build"){
      steps{
        echo "building the app."
      }
    }

    stage("test"){
      steps{
        echo "testing the app."
      }
    }

    stage("upload to S3"){
      steps{
        echo "deploying the app."
      }
    }
  }
}
