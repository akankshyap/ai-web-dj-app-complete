leftwristX=0;
leftwristY=0;
rightwristY=0;
rightwristX=0;




song = "";
function preload(){
song = loadSound("music.mp3");
}

function setup(){
canvas = createCanvas(600,500);
canvas.position(500,300);
video= createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on ("pose",gotPoses);
}

function modelLoaded(){
  console.log("poseNet initialized"); 
}


function draw(){
  image(video,0,0,600,500);

  fill("#FF0000");
  stroke("#FF0000");
if(scoreLeftwrist>0.2){
  circle(leftwristX,leftwristY,20);
  InNumberleftwristY = Number(leftwristY);
  remove_decimals = floor(InNumberleftwristY);
  volume = remove_decimals/500;
  document.getElementById("volume").innerHTML="volume = " + volume;
  song.setVolume(volume);
}
}

function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    
    scoreLeftwrist = results[0].pose.keypoints[9].score;
    console.log("scoreLeftwrist= "+scoreLeftwrist);

    leftwristX=results[0].pose.leftWrist.x;
    leftwristY=results[0].pose.leftWrist.y;
    rightwristY=results[0].pose.rightWrist.y;
    rightwristX=results[0].pose.rightWrist.x;
    console.log("leftwristx=" + leftwristX);
    console.log("leftweristy= "+ leftwristY);
    console.log("rightwrist" + rightwristX);
    console.log("rightwristy=" + rightwristY);
  }
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);

}
