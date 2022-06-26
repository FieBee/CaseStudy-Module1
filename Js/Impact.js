function Impact(){
    if (circle1.x - circle1.radius <=0 || circle1.radius + circle1.x >= canvas.offsetWidth){
        dx = -dx
    }
    else if (circle1.y - circle1.radius <= 0){
        dy = -dy-0.5
        score ++
        if (score === 1){
            dx = -1.5
            dy = -1
            circle1.color = circle1.color = "#ffdf31"
        }
        else if (score === 3){
            paddle1.width -= 100
        }
        else if (score === 5){
            dx = -2.5
            dy = -1.5
            circle1.color = circle1.color = "#ff7a24"
        }
        else if (score === 7){
            paddle1.width -= 100
        }
        else if (score === 10){
            dx = -4
            dy = -2.5
            circle1.color = circle1.color = "#ff3030"
        }
    }
    else if(circle1.y + circle1.radius >= canvas.offsetHeight){
        if(circle1.x  > paddle1.x && circle1.x < paddle1.x + paddle1.width){
            dy = -dy
        }
        else {
            alert("Your score: "+score)
            stop()
            displayScore(score)
            document.getElementById("showScore").innerHTML = str2
            str1 =""
        }
    }
}