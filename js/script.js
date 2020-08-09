const infoText = document.querySelector(".info__text");
const infoButton = document.querySelector(".info__button");

const playButton = document.querySelector(".media__button--play");
const technicolorAudio = document.querySelector("#technicolor__audio");


function changeClass(el, currentClass, newClass) {
    el.classList.remove(currentClass);
    el.classList.add(newClass);
}

function toggleVisibility(element, display) {
    const elementStyles = window.getComputedStyle(element);
    const currentDisplay = elementStyles.getPropertyValue("display");

    if (currentDisplay === "none") {
        element.style.display = display;
    } else {
        element.style.display = "none";
    }
}


infoButton.addEventListener("click", () => {
    console.log("Toggling info");
    toggleVisibility(infoText, "flex");
});

playButton.addEventListener("click", () => {
    console.log("play button");
    if (technicolorAudio.paused) {
        technicolorAudio.play();
        // changeClass(playButton, "fa-play", "fa-pause");
    } else {
        technicolorAudio.pause();
        // changeClass(playButton, "fa-pause", "fa-play");
    }
});

technicolorAudio.addEventListener("ended", () => {
    console.log("playback ended");
    changeClass(playButton, "fa-pause", "fa-play");
});



// const descButton = document.querySelector(".media__button--desc");

// descButton.addEventListener("click", () => {
//     toggleVisibility(itemInfo, "block");
//     descButton.classList.toggle("fa-plus");
//     descButton.classList.toggle("fa-minus");
// });