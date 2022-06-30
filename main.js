let timer = document.getElementById("timer");

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let timerID;

let milliseconds = 0;  //10分の1秒 ミリ秒
let seconds = 0;  
let minutes= 0;  
let hours = 0;  

function stopWatch(){
  milliseconds++;
  //ミリ秒スタート
  if(milliseconds/10 == 1){
    seconds++;
    milliseconds = 0;
    if(seconds/60 == 1){
      minutes++;
      seconds = 0;
      if(minutes/60 == 1){
        hours++;
      }
    }
  }
  timer.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds
}

//対象の要素.addEventListener(種類, function() {
// 処理を記述
//}, false);

//disabled ボタン活性・非活性

  start.addEventListener("click", () => {
  timerID = setInterval(stopWatch, 100);
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
});

stop.addEventListener("click", () =>{
  clearInterval(timerID);
  stop.disabled = true;
  start.disabled = false;
  reset.disabled = false;
});

reset.addEventListener("click", function(){
  clearInterval(timerID);
  timer.innerHTML = "0:0:0:0";
  reset.disabled = true;
  stop.disabled = true;
  start.disabled = false;
  
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
})