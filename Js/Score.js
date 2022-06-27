function drawScore(){
    ctx.font = "20px Arial"
    ctx.fillStyle = "blue"
    ctx.fillText("Score: "+score, 5, 20)
}

let str2 =""
let score = 0
function displayScore(score){
    arr.push(score)
    arr.sort((a,b)=>b-a)
    for (let i=0;i<arr.length;i++){
        str2 += "top "+ (i+1)+": "+ arr[i]+" score" +"<br>"
    }
    return str2
}

let arr = [20,3,1]
let str1 =""
for (let i=0;i<arr.length;i++){
    str1 += "top "+ (i+1)+": "+ arr[i]+" score" +"<br>"
}
console.log(arr)
document.getElementById("showScore").innerHTML = str1