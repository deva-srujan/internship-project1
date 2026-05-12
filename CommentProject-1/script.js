function addComment(){
    let username = document.getElementById("username").value;

    let city = document.getElementById("city").value;

    let comment = document.getElementById("commentInput").value;

    // Block special characters
    let valid = /^[a-zA-Z0-9 ]+$/.test(comment);

    if (!valid) {
        alert("Special characters are not allowed!");
        return;
    }

    let commentBox = document.createElement("div");

    commentBox.className = "comment-box";

    let dislikes = 0;

    commentBox.innerHTML = `
        <h3>${username} - ${city}</h3>

        <p>${comment}</p>

        <button class="likeBtn">👍 Like</button>

        <button class="dislikeBtn">👎 Dislike</button>

        <button onclick="translateComment()">🌐 Translate</button>
    `;

    let dislikeBtn = commentBox.querySelector(".dislikeBtn");

    dislikeBtn.onclick = function () {

        dislikes++;

        if (dislikes >= 2) {

            commentBox.remove();

            alert("Comment removed after 2 dislikes");
        }
    };

    document.getElementById("commentsContainer")
        .appendChild(commentBox);

    // Clear fields
    document.getElementById("commentInput").value = "";
}

function translateComment() {

    alert("Translation feature enabled");
}