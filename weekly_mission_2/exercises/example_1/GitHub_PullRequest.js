const PullRequest = {
    title: "Reparando error 231",
    branchName: "master",
    dateCreated: 15/06/22,
    status : "success",
    repositoryNameAssociated: "NodeJs",
    getStatus: function(){
        return this.status
    },
    getTitleAndAuthor: function(){
        return `this pull requerst ${this.title} was created by ${this.author}`
    }
}
console.log("status of this pull request is " +PullRequest.getStatus())
console.log(PullRequest.getTitleAndAuthor())