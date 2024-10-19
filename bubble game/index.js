var score = 0;
var hitrn = 0;
var timer = 60;

function makebubble(){
    var clutter = "";

    for(var i = 1; i<=139 ; i ++){
    
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#bottom").innerHTML = clutter;

}
 makebubble()  ;


 function runTimer(){
    var timerInt = setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerInt);
            document.querySelector("#bottom").innerHTML = `<h1>gameover</h1>`;
        }
    },1000);
 }
 runTimer();

function getNewHit(){
   hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
getNewHit();

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
// increaseScore();
document.querySelector("#bottom").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent) ;
    if(clickednum === hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }
})
