@Library(['piper-lib-os']) _

pipeline {
  agent any
  stages {
    stage('Test'){
      steps {
        setupCommonPipelineEnvironment script: this
        karmaExecuteTests script: this
      }
    }
  }
}
