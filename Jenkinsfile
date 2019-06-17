@Library(['piper-lib-os']) _

pipeline {
	agent any
	stages {
		stage('Init'){
			checkout scm
			setupCommonPipelineEnvironment script: this
		}
		stage('Test'){
			karmaExecuteTests script: this

			archiveArtifacts '**/*'
		}
	}
}
