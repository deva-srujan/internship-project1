function loginUser() {

    let state = document.getElementById("state").value;

    let email = document.getElementById("email").value;

    let mobile = document.getElementById("mobile").value;

    let southStates = [
        "Tamil Nadu",
        "Kerala",
        "Karnataka",
        "Andhra Pradesh",
        "Telangana"
    ];

    let now = new Date();

    let hours = now.getHours();

    // Theme Logic
    if (hours >= 10 && hours < 12 &&
        southStates.includes(state)) {

        document.body.className = "light-theme";

    } else {

        document.body.className = "dark-theme";
    }

    // OTP Logic
    if (southStates.includes(state)) {

        document.getElementById("message").innerHTML =
            "OTP sent to Email: " + email;

    } else {

        document.getElementById("message").innerHTML =
            "OTP sent to Mobile: " + mobile;
    }
}