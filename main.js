
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 414);
    canvas.position(560, 112);

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded(){
    console.log('PoseNet Is Initialized!');
}

function draw(){
    background('#808080');

    textSize(difference);
    fill('#FFE787');
    text('M.C.P', 50, 400);
    
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX)
    }
}

