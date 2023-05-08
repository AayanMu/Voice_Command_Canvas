rstat='';
cstat='';
x='';
y='';

function preload(){
}

function setup(){
    canvas=createCanvas(900,600);
}

function draw(){
    if(cstat=='set'){
        r=Math.floor(Math.random()*100);
        circle(x,y, r);
        document.getElementById('status').innerHTML="Circle drawn";
        cstat='';
    }

    if(rstat=='set'){
        w=Math.floor(Math.random()*200);
        h=Math.floor(Math.random()*100);
        rect(x,y, w,h);
        document.getElementById('status').innerHTML="Rectangle drawn";
        rstat='';
    }
}

var SpeechRecognition= window.webkitSpeechRecognition;
recog= new SpeechRecognition();

function start(){
    recog.start();
    document.getElementById('status').innerHTML= "System is listening, Please speak";

    recog.onresult= function run(event){
        console.log(event);
        data=event.results[0][0].transcript;

        if(data== "Rectangle."){
            x= Math.floor(Math.random()*900);
            y= Math.floor(Math.random()*600);
            document.getElementById('status').innerHTML="Started drawing Rectangle";
            rstat='set';
            
        }

        if(data== "Circle."){
            x= Math.floor(Math.random()*900);
            y= Math.floor(Math.random()*600);
            document.getElementById('status').innerHTML="Started drawing Circle";
            cstat='set';
        }
    }
}