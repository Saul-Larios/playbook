const Issue = {
    title: "Dudas semana 1",
    repositoryNameAssociated: "NodeJs",
    status: "main",
    numberOfComments: 5,
    labels: 1,
    author: "Saul Larios",
    dateCreated: "05/06/22",
    lastUpdate: "06/06/22",

getTitleAndAuthor: function(){
    return `this Issue ${this.title} was created by ${this.author}`
},
getGeneralinfo: function(){
    return `This Issue ${this.title} was created on ${this.dateCreated} by ${this.author} in the repo ${this.repositoryNameAssociated}`
 }
}

console.log(Issue.getTitleAndAuthor())
console.log(Issue.getGeneralinfo())