var clutter = ""
var timer = 60;
var score = 0;
var hitNumber = 0;

function makeBubble(){
    for(var i = 1; i<= 160; i++){
        var randomNumber =  Math.floor(Math.random()*10)
         clutter += `<div class="bubble">${randomNumber}</div>`
         document.querySelector("#p-bottom").innerHTML = clutter
     }
}

function getNewHit(){
   hitNumber =  Math.floor(Math.random()*10)
  document.querySelector("#hitval").textContent = hitNumber

}

function runtimer(){
  var timerFunction = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerFunction)
            document.querySelector("#p-bottom").innerHTML = `<h2 style="color: crimson;">GAME OVER !<br> <br> <span style = "color: green">Your Score is ${score}</span></h2>`
             
        }
    },1000)
        
}

function increaseScore(){
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#p-bottom").addEventListener("click" , function(dets){
    var clickedNumber = Number(dets.target.textContent);
    if(clickedNumber === hitNumber){
        score += 10;
        increaseScore();
        getNewHit();
        makeBubble();
    }
})

makeBubble();
getNewHit();
runtimer();
increaseScore();
