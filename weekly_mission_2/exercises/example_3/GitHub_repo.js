class repo  {
    
    constructor(name,author,language,numberOfCommits,stars,forks,issues_open,issues_close){
    this.name = name,
    this.author = author,
    this.language = language,
    this.numberOfCommits = numberOfCommits,
    this.stars = stars,
    this.forks = forks,
    this.issues_open = issues_open,
    this.issues_close = issues_close
    }
    getTotalIssues(){
      return this.issues_open + this.issues_close
    }
    getGeneralInfo(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   const myRepo = new repo("LaunchX","Saul Larios","JavaScript", 100, 199,299,10,10);
   console.log(myRepo.getTotalIssues());
   console.log(myRepo.getGeneralInfo());