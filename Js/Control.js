
let interval
function start() {
    interval = setInterval(draw, 0)
    document.getElementById("start").style.display = "none"


}
function stop() {
    clearInterval(interval)
    document.getElementById("start").style.display = ""
}
function reset(){
    document.location.reload()
}



function moveRight(){
    if (paddle1.x<canvas.offsetWidth-paddle1.width){
        paddle1.x+=60
    }
}
function moveLeft(){
    if (paddle1.x>0){
        paddle1.x-=60
    }
}

function keydownHandler(){
    if(event.key === "ArrowRight" && paddle1.x<canvas.offsetWidth - paddle1.width){
        paddle1.x+=60
    }
    if (event.key === "ArrowLeft" && paddle1.x > 0){
        paddle1.x-=60
    }
}