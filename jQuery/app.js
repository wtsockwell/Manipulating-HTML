$(document).ready(function(){
    //creating a button using jQuery
    const $btn = $("<button>Click me</button>").appendTo("body")

    $btn.click(function(){
        alert("Warning, the button has been clicked")
    })

    //User input and alert functionality
    let $subText = $("#submitText")
    let $subBtn = $("#submitBtn")

    $subBtn.click(function(event){
        event.preventDefault()
        alert($($subText).val())
    })

    //div hovering capabilities
    let $div = $("#hover")
    $div.mouseover(function(){
        $div.css("background-color", "orange")
    })
    $div.mouseout(function(){
        $div.css("background-color", "transparent")
    })

    //paragraph color
    let $p = $("p")
    $p.click(function(){
        let randomColorGenerator = "#" + Math.floor(Math.random()*16777215).toString(16)
        $p.css("color", randomColorGenerator)
    })

    //Div and span manipulation
    let $nameBtn = $("<button>Who made this?</button>").appendTo("body")
    let $nameDiv = $("<div></div>").appendTo("body")

    $nameBtn.click(function(){
        let $nameSpan = $("<span>Taylor Sockwell</span>").appendTo($nameDiv)
    })

    //Friend button list
    let $friendBtn = $(".friendBtn")
    let $friendList = $(".friendList")
    let friendArray = ["Kent", "Josh", "Brendon", "Garret", "Jake", "Wesker", "Jill", "Leon", "Ada", "Chris"]
    let i = 0

    $friendBtn.click(function(){
        $(`<li>${friendArray[i]}</li>`).appendTo($friendList)
        i++
        if(i==10){
            i=0
        }
    })
})