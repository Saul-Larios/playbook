class Issue {

    constructor(title,repositoryNameAssociated,status,numberOfComments,labels,author,dateCreated,lastUpdate){
    this.title = title,
    this.repositoryNameAssociated = repositoryNameAssociated,
    this.status = status,
    this.numberOfComments = numberOfComments,
    this.labels = labels,
    this.author = author,
    this.dateCreated = dateCreated,
    this.lastUpdate = lastUpdate
    }

getTitleAndAuthor() {
    return `this Issue ${this.title} was created by ${this.author}`
}
getGeneralinfo() {
    return `This Issue ${this.title} was created on ${this.dateCreated} by ${this.author} in the repo ${this.repositoryNameAssociated}`
 }
}

const myIssue = new Issue ("Dudas semana 1","Node js", "main", 5, 2,"Saul Larios", "05/06/22","06/06/22");
console.log(myIssue.getTitleAndAuthor());
console.log(myIssue.getGeneralinfo());