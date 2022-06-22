window.onload = appear()

var start;
var clicked;

function disapper() {
  document.getElementById('box').style.display='none';
  clicked=Date.now()
  var reactionTime = (clicked-start)/1000;
  document.getElementById('result').innerHTML=' '+reactionTime +' seconds';
  var randomDelay = ((Math.random()* 3)+2) *1000;
 setTimeout(appear, randomDelay);
}

function appear() {
  var randomTop = Math.random()*200;
  var randomLeft = Math.random()*400;
  var randomHeight = Math.random()*200+50;
  var randomWidth = Math.random()*200+50;

  var randomCurve = Math.random();
  if (randomCurve < 0.5) {
    document.getElementById('box').style.borderRadius=25 +'px';
  }else {
    document.getElementById('box').style.borderRadius=0 +'px';
  }

  var randomColor = Math.floor(Math.random()*16777215).toString(16);

  document.getElementById('box').style.backgroundColor= '#'+randomColor;
  document.getElementById('box').style.top=randomTop+'px';
  document.getElementById('box').style.left=randomLeft+'px';
  document.getElementById('box').style.height=randomHeight+'px';
  document.getElementById('box').style.width=randomWidth+'px';
  document.getElementById('box').style.display='block';
  start = Date.now();
}