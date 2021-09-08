node{
  stage('checkout scm'){
    git branch:'master', url:'https://github.com/sreejuss/Angular-Jenkins.git'
  }
  stage('install node modules'){
    sh "npm install"
}
   stage('build'){
    sh "npm run build"
}
  
}
