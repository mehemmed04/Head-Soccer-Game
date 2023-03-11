let player1 = document.getElementById("player-1");
let player2 = document.getElementById("player-2");
let game_area = document.getElementById("game-area");
let soccer_area = document.getElementById("soccer");
let ball = document.getElementById("ball");
let player1_jump_count = 0;
let player2_jump_count = 0;
let last_touch;

let game_area_length =game_area.offsetWidth;
let player_length = player1.offsetWidth;
let ball_length = ball.offsetWidth;

let player1_score=0;
let player2_score=0;

var x1 = 90;
var y1 = 0;

var x2 = 90;
var y2 = 0;

let ball_x = game_area.offsetWidth / 2 - ball.offsetWidth;

ball.style.top = "0px";
let ball_top = 0;

let timer_interval;

timer_interval = setInterval(() => {
    let timer = document.getElementById("time");
    timer.innerHTML = timer.innerHTML - 1;
}, 1000);

setInterval(() => {
    let h = game_area.offsetHeight - soccer_area.offsetHeight - 100;
    if (ball_top <= h) {
        ball_top += 5;
        ball.style.top = ball_top + "px";
    }
    if (y1 > 0) {
        y1 -= 4;
    }
    else if(y1<=0){
        player1_jump_count=0;
        y1=0;
    }
    if (y2 > 0) {
        y2 -= 4;
    }
    else if(y2<=0){
        y2=0;
        player2_jump_count=0;
    }
    movePlayer1(x1, y1);
    movePlayer2(x2, y2);
}, 40);


document.addEventListener('keydown', function (event) {

    var keyCode = event.code;

    if (keyCode === 'ArrowLeft' && x2 + player2.clientWidth <= game_area.offsetWidth) {
        x2 += 13;
        last_touch="p2-left";
    }
    else if (keyCode === 'ArrowUp' && player2_jump_count == 0) {
        y2 += 80;
        player2_jump_count += 1;
        last_touch="p2-up";
    }
    else if (keyCode === "ArrowRight" && x2 >= 0) {
        x2 -= 13;
        last_touch="p2-right";
    }
    else if (keyCode === "KeyW" && player1_jump_count == 0) {
        y1 += 80;
        player1_jump_count += 1;
        last_touch="p1-up";
    }
    else if (keyCode === "KeyA" && x1 > 0) {
        x1 -= 13;
        last_touch="p1-left";
    }
    else if (keyCode === "KeyD" && x1 + player1.clientWidth <= game_area.offsetWidth) {
        x1 += 13;
        last_touch="p1-right";
    }

   if(x2+player_length+ball_length/2+game_area_length/2>=game_area_length-3
   && x2+player_length+ball_length/2+game_area_length/2<=game_area_length+4){
    MoveBall();
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

function MoveBall(){
    let arr = last_touch.split('-');
    if(arr[0]=="p2"){
        if(arr[1]=="left"){
            ball_x-=100;
        }
    }
    ball.style.left=ball_x+"px";
}