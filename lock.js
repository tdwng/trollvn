// Check password here 
const correctPassword = [10, 12, 10, 11, 11];

function checkPassword() {
    const dials = document.querySelectorAll('.dial');
    const enteredPassword = Array.from(dials).map(dial => Number(dial.value));
    
    const decodedPassword = [
        enteredPassword[0] + enteredPassword[1] + enteredPassword[2],
        enteredPassword[1] + enteredPassword[2] + enteredPassword[3],
        enteredPassword[2] + enteredPassword[3] + enteredPassword[4],
        enteredPassword[3] + enteredPassword[4] + enteredPassword[0],
        enteredPassword[4] + enteredPassword[0] + enteredPassword[1],
    ];
    
    if (JSON.stringify(decodedPassword) === JSON.stringify(correctPassword)) {
        const videoURL = "https://raw.githubusercontent.com/tdwng/bksec/main/jslock_chill/Lock_chill/sieucapdeptrai.mp4"; 
        const videoContainer = document.getElementById("video-container");
        videoContainer.innerHTML = `
            <video controls autoplay width="640">
                <source src="${videoURL}" type="video/mp4">
                Trình duyệt bro lỏ quá nên không hiển thị dc flag
            </video>
        `;
        const videoElement = videoContainer.querySelector("video");
        videoElement.requestFullscreen?.();
    } else {
        alert("Password không chính xác. Vui lòng thử lại.");
    }
}
