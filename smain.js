SongFiles_Status = "";

SongFiles_StatusRight = "";
music_file1 = "";

music_file2 = "";

Left_WristX = 0;
Left_WristY = 0;
LeftWrist_Score = 0;

Right_WristX = 0;

Right_WristY = 0;

RightWrist_Score = 0;

function setup(){
    
    canvas = createCanvas(393, 393);

    canvas.center();

    video = createCapture(VIDEO);

    video.hide();

     posenet = ml5.poseNet(video, moddelloaded);

    posenet.on('pose', gotPoses); //Turns on the cool posenet variable model power! //
}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);

        scoreLeftWrist = results[0].pose.keypoints[9].score;
         console.log(scoreLeftWrist);

       RightWrist_Score = results[0].pose.keypoints[9].score;
       console.log(RightWrist_Score);
         
         leftWrist_x = results[0].pose.leftWrist.x;
         leftWrist_y = results[0].pose.leftWrist.y;

           console.log("The Left Wrist X = " + Left_WristX + "And Next up.. The Left Wrist Y = " + Left_WristY + "!");

          console.log("The Right Wrist X = " + Right_WristX + "Next up.. THE RIGHT WRIST Y IS " + Right_WristY + "!");

          Right_WristX = results[0].pose.RightWrist.x;
          Right_WristX = results[0].pose.RightWrist.x;
        
          console.log("The Right Wrist X = " +Right_WristX + "AND THE RIGHT WRIST X is"+ Right_WristX + "!");
          console.log("The Right Wrist Y = "+ Right_WristY + "And THE RIGHT WIRST Y IS" + Right_WristY + "!")

    }
}

function moddelloaded(){

    console.log("The PoseNet Model is Ready and Working/Initialized!")
}

function draw(){
    image(video, 0, 0, 393, 393);

  stroke("#ff0000");

  fill("#ff0000");

  music_file1 = music_file1.isPlaying();

  console.log(music_file1);


  if (scoreLeftWrist > 0.2) {

    circle(Left_WristX, Left_WristY, 20); //The size of the circle is 20!//

   music_file2.stop();

   if(music_file1 == false){

    music_file1.play();

   }

  else{

           document.getElementById("The Song Id").innerHTML = "The Song Name is Peter Pan!";
         }
      }


      music_file2 = music_file2.isPlaying();

      console.log(music_file2);

      if( RightWrist_Score > 0.2 ) {

            circle(Right_WristX, Right_WristY,  20);

            music_file1.stop();

            if(music_file2 == false){

            music_file2.play();

        }

        else{

            document.getElementById("The Song ID").innerHTML = "The Song Name is Harry Potter's Song!";
        }

      }

 }

function preload(){

    music_file1 = loadSound("music.mp3");

   music_file2 = loadSound("music2.mp3");
}