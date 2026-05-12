let downloadCount = 0;

let isPremium = false;

function downloadVideo() {

    if (!isPremium && downloadCount >= 1) {

        alert("Free users can download only 1 video per day");

        return;
    }

    downloadCount++;

    let li = document.createElement("li");

    li.textContent = "Sample Video Downloaded";

    document.getElementById("downloadList")
        .appendChild(li);

    alert("Video Downloaded Successfully");
}

function upgradePremium() {

    alert("Redirecting to Razorpay Test Payment");

    isPremium = true;

    alert("Payment Successful! Premium Activated");

}