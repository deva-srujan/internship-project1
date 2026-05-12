let video = document.getElementById("videoPlayer");

let left = document.getElementById("left");
let center = document.getElementById("center");
let right = document.getElementById("right");

let leftTap = 0;
let centerTap = 0;
let rightTap = 0;

// Double tap LEFT = backward
left.addEventListener("dblclick", () => {

    video.currentTime -= 10;
});

// Double tap RIGHT = forward
right.addEventListener("dblclick", () => {

    video.currentTime += 10;
});

// Single tap CENTER = pause/play
center.addEventListener("click", () => {

    centerTap++;

    setTimeout(() => {

        if(centerTap == 1){

            if(video.paused){

                video.play();

            }else{

                video.pause();
            }
        }

        // Triple tap center = next video
        if(centerTap == 3){

            alert("Next Video Playing");
        }

        centerTap = 0;

    }, 400);
});

// Triple tap LEFT = open comments
left.addEventListener("click", () => {

    leftTap++;

    setTimeout(() => {

        if(leftTap == 3){

            document.getElementById("comments")
                .style.display = "block";
        }

        leftTap = 0;

    }, 500);
});

// Triple tap RIGHT = close website
right.addEventListener("click", () => {

    rightTap++;

    setTimeout(() => {

        if(rightTap == 3){

            alert("Closing Website");

            window.close();
        }

        rightTap = 0;

    }, 500);
});