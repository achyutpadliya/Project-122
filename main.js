x = 0;
y = 0;
screen_width=0;
screen_height=0;
apple="apple.png"
speak_data=""
to_number=""


draw_apple = "set";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

to_number = Number(content);

if(Number.isInteger(to_number))

document.getElementById("set").innerHTML="Started Drawing Apples"

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(900,700);
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i=0;i<Number;i++){
    screen_width = Math.floor(Math.random()*700);
      screen_height = Math.floor(Math.random()*400);
    }
    Image(apple.png,x,y,width,height)
    
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload(){
  loadImage(apple.png)
}