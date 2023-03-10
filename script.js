let player1 = document.getElementById("player-1");
let player2 = document.getElementById("player-2");
let game_area =document.getElementById("game-area");
let soccer_area = document.getElementById("soccer");
let ball = document.getElementById("ball");

var x1 = 90;
var y1 = 0;

var x2 = 90;
var y2 = 0;

let ball_x=game_area.offsetWidth/2-ball.offsetWidth;

ball.style.top="0px";
let ball_top=0;

let timer_interval;

timer_interval = setInterval(()=>{
    let timer = document.getElementById("time");
    timer.innerHTML = timer.innerHTML-1;
},1000);

 setInterval(()=>{
    let h =game_area.offsetHeight-soccer_area.offsetHeight-100;
    if(ball_top<=h){
        ball_top+=5;
        ball.style.top=ball_top+"px";
    }
    if(y1>=0){
        y1-=3;
    }
    if(y2>=0){
        y2-=3;
    }
    movePlayer1(x1, y1);
    movePlayer2(x2, y2);
},40);


document.addEventListener('keydown', function(event) {

  var keyCode =  event.code;

  if (keyCode === 'ArrowLeft' && x2+player2.clientWidth<=game_area.offsetWidth ) {
    x2+= 12;
  } 
  else if ( keyCode === 'ArrowUp') {
    y2 += 80;
  }
  else if(keyCode==="ArrowRight" && x2>=0){
      x2 -= 12;
  }
  else if(keyCode==="KeyW"){
    y1+=80;
  }
  else if(keyCode==="KeyA" && x1>0){
    x1-=12;
  }
  else if(keyCode==="KeyD" && x1+player1.clientWidth<=game_area.offsetWidth){
    x1+=12;
  }




  // Oyuncuyu hareket ettirin
  movePlayer1(x1, y1);
  movePlayer2(x2, y2);
});

// Oyuncuyu hareket ettirmek için fonksiyon
function movePlayer1(x, y) {
  player1.style.left = x + 'px';
  player1.style.bottom = y + 'px';
}
function movePlayer2(x, y) {
    player2.style.right = x + 'px';
    player2.style.bottom = y + 'px';
  }