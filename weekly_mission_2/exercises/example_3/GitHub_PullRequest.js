class PullRequest  {
    constructor(title,branchName,dateCreated,status,repositoryNameAssociated){
    this.title = title,
    this.branchName = branchName,
    this.dateCreated = dateCreated,
    this.status = status,
    this.repositoryNameAssociated = repositoryNameAssociated
    }
    getStatus(){
        return this.status
    }
    getTitleAndAuthor(){
        return `this pull requerst ${this.title} was created by ${this.author}`
    }
}
const myPullRequest = new PullRequest("Reparando error 231","master",15/06/22,"success","NodeJs");
console.log("status of this pull request is " + myPullRequest.getStatus())
console.log(myPullRequest.getTitleAndAuthor())