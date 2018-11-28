let input = document.createElement("input")
input.setAttribute("id", "message")
document.body.appendChild(input)

//mirroring keystrokes in article sections
document.getElementById("message").addEventListener("keyup", function(event) {
    let article1 = document.getElementById("left")
    let article2 = document.getElementById("right")
    article1.textContent = event.target.value;
    article2.textContent = event.target.value;
});