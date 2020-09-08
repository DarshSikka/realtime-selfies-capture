var noseX=0;
var noseY=0;
var specsX=0;
var specsY=0;
var crownX=0;
var crownY=0;
var specs_visible="";
var crown_visible="";
var c_width=0;
function preload(){
    nose=loadImage('nose.png');
    googles=loadImage('gog.png');
    crown=loadImage('https://i.postimg.cc/1zKPX6xB/crown.png');
    horns=loadImage('horns.png')
}
var video;
function setup(){
    canvas=createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function st(){
    if(specs_visible=="yes"){
        specs_visible="";
    }
    else{
        specs_visible="yes";
    }
}
function draw(){
    console.log(specs_visible);
    image(video, 0, 0, 400, 400);
    if(nose_visible=="yes"){
        image(nose, noseX, noseY, 20, 20);
    }
    if(specs_visible=="yes"){
        image(googles, specsX, specsY,100, 50); 
    }
    if(crown_visible=="yes"){
        image(crown, crownX, crownY, c_width, 100);
    }
    if(horn_visible=="yes"){
        image(horns, crownX, crownY, c_width, 100);
    }
}
var nose_visible="";
function nt(){
    if(nose_visible=="yes"){
        nose_visible="";
    }
    else{
        nose_visible="yes";
    }
}
function myFunc(){
    save(window.prompt('name of your funny clown'));
}
function ct(){
    if(crown_visible=="yes"){
        crown_visible="";
    }
    else{
        crown_visible="yes";
    }
}
window.addEventListener('contextmenu', openmenu);
function openmenu(e){
e.preventDefault();
document.getElementById('xandy').style.display='inline';
document.getElementById('xandy').style.top=String(e.clientY)+'px';
document.getElementById('xandy').style.left=String(e.clientX)+"px";
posenet=ml5.poseNet(video,function(){console.log(ml5.version)});
posenet.on('pose', getVal);
}
function getVal(results){
    console.log(results);
    noseX=results[0].pose.nose.x-160;
    console.log(noseX);
    noseY=results[0].pose.nose.y-40;
    specsX=results[0].pose.rightEye.x-160;
    specsY=results[0].pose.rightEye.y-70;
    crownX=results[0].pose.nose.x-40;
    crownY=results[0].pose.nose.y-220;
    earL=results[0].pose.leftEar.x;
    earR=results[0].pose.rightEar.x;
    c_width=earR-earL;
}
var horn_visible="";
function ht(){
    if(horn_visible=="yes"){
        horn_visible="";
    }
    else{
        horn_visible="yes";
    }
}