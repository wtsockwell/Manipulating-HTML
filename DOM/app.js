document.addEventListener("DOMContentLoaded", function(){
    //create a button using DOM with an alert
    let button = document.createElement("button")
    button.textContent = "Click me"
    document.body.appendChild(button)

    button.addEventListener("click", function(){
        alert("Warning, the button has been clicked!")
    })

    //reffence a button in the HTML and display an alert from the user
    let userBtn = document.getElementById("submitBtn")
    let userText = document.getElementById("submitText").value

    userBtn.addEventListener("click", function(event){
        event.preventDefault()
        alert(userText)
    })

    //div styling without using CSS
    let div = document.getElementById("hover")

    div.addEventListener("mouseover", function(){
        div.style.backgroundColor = "green"
    })
    div.addEventListener("mouseleave", function(){
        div.style.backgroundColor = "transparent"
    })

    //Paragraph color change
    let p = document.getElementsByTagName("p")

    p[0].addEventListener("click", function(){
        p[0].style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    })

    //Div and span creation and manipulation
    let nameDiv = document.createElement("div")
    let nameBtn = document.createElement("button")
    let nameSpan = document.createElement("span")
    nameBtn.textContent = "Who made this?"
    document.body.appendChild(nameBtn)
    document.body.appendChild(nameDiv)

    nameBtn.addEventListener("click", function(){
        nameSpan.textContent = "Taylor Sockwell"
        nameDiv.appendChild(nameSpan)
    })


    //Friend button list
    let friendBtn = document.getElementById("friendBtn")
    let friendList = document.getElementsByTagName("ul")
    let friendArray = ["Kent", "Josh", "Brendon", "Garret", "Jake", "Wesker", "Jill", "Leon", "Ada", "Chris"]
    let i = 0

    friendBtn.addEventListener("click", function(){
        let li = document.createElement("li")
        let friends = document.createTextNode(friendArray[i])
        li.appendChild(friends)
        i++

        friendList[0].appendChild(li)
        if (i == 10){
            i = 0
        }
    })
})