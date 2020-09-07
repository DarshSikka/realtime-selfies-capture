function preload(){
}
var video;
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 300, 300);
}
function myFunc(){
    save(window.prompt('name of your funny clown'));
}
window.addEventListener('contextmenu', openmenu);
function openmenu(e){
e.preventDefault();
document.getElementById('xandy').style.display='inline';
document.getElementById('xandy').style.top=String(e.clientY)+'px';
document.getElementById('xandy').style.left=String(e.clientX)+"px";
}
document.getElementById('noseToggle').addEventListener('mouseover', function(){
    document.getElementById('noses').style.display="";
    
})