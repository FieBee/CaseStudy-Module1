function Impact(){
    if (ball1.x - ball1.radius <= 3 || ball1.radius + ball1.x >= canvas.offsetWidth-3){
        dx = -dx
    }
    else if (ball1.y - ball1.radius <= 3){
        dy = -dy
        score ++
        if (score === 2){
            dx = -1.5
            dy = -1
            ball1.color = ball1.color = "#ffdf31"
        }
        else if (score === 4){
            paddle1.width -= 100
        }
        else if (score === 6){
            dx = -2.5
            dy = -1.5
            ball1.color = ball1.color = "#ff7a24"
        }
        else if (score === 8){
            paddle1.width -= 100
        }
        else if (score === 10){
            dx = -4
            dy = -2
            ball1.color =  "#ff3030"
        }
    }
    else if(ball1.y + ball1.radius >= canvas.offsetHeight-5){
        if(ball1.x  > paddle1.x && ball1.x < paddle1.x + paddle1.width){
            dy = -dy
        }
        else {
            stopRepeating = true
            alert("Your score: "+score)
            stop()
            displayScore(score)
            document.getElementById("start").style.display = "none"
            document.getElementById("showScore").innerHTML = str2
            str1 =""
        }
    }
}