const technicolorVideo = document.querySelector("#technicolor__video");

technicolorVideo.addEventListener("click", () => {
    if (technicolorVideo.paused) {
        technicolorVideo.play();
    } else {
        technicolorVideo.pause();
    }
});

technicolorVideo.play();

