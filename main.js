//create input field, append to body of document
let input = document.createElement("input")
input.setAttribute("id", "message")
document.body.appendChild(input)

//create articleContainer, append to document body
let articleContainer = document.createElement("article-container")
articleContainer.setAttribute("id", "article-container")
document.body.appendChild(articleContainer)

//create two articles, with unique ids. append to articleContainer
let article1 = document.createElement("article")
article1.setAttribute("id", "article1")
article1.textContent = "One"

let article2 = document.createElement("article")
article2.setAttribute("id", "article2")
article2.textContent = "Two"

articleContainer.appendChild(article1)
articleContainer.appendChild(article2)

//add EventListener that listens for keyup in input field and mirrors those strokes in the two articles 
document.getElementById("message").addEventListener("keyup", function(event) {
    let article1 = document.getElementById("article1")
    let article2 = document.getElementById("article2")
    article1.textContent = event.target.value;
    article2.textContent = event.target.value;
});