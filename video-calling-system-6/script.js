let video = document.getElementById("video");

let mediaRecorder;

let recordedChunks = [];

// Start video call
async function startCall(){

    let stream = await navigator.mediaDevices
        .getUserMedia({
            video: true,
            audio: true
        });

    video.srcObject = stream;
}

// Share screen
async function shareScreen(){

    let screenStream = await navigator.mediaDevices
        .getDisplayMedia({
            video: true
        });

    video.srcObject = screenStream;

    alert("YouTube screen sharing started");
}

// Start recording
function startRecording(){

    let stream = video.srcObject;

    mediaRecorder = new MediaRecorder(stream);

    recordedChunks = [];

    mediaRecorder.ondataavailable = event => {

        if(event.data.size > 0){

            recordedChunks.push(event.data);
        }
    };

    mediaRecorder.onstop = saveRecording;

    mediaRecorder.start();

    alert("Recording Started");
}

// Stop recording
function stopRecording(){

    mediaRecorder.stop();

    alert("Recording Stopped");
}

// Save recording locally
function saveRecording(){

    let blob = new Blob(recordedChunks, {
        type: "video/webm"
    });

    let url = URL.createObjectURL(blob);

    let downloadLink =
        document.getElementById("downloadLink");

    downloadLink.href = url;

    downloadLink.download = "video-call-recording.webm";

    downloadLink.style.display = "block";

    downloadLink.innerHTML = "Download Recording";
}