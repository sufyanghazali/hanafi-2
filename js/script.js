const infoText = document.querySelector(".info__text");
const infoButton = document.querySelector(".info__button");

const playButton = document.querySelector(".media__button--play");
const technicolorAudio = document.querySelector("#technicolor__audio");

const descButton = document.querySelector(".media__button--desc");
// const itemInfo = document.querySelector(".item__info");

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

// function clickInfo() {
//     console.log("wtf");
//     toggleVisibility(infoText, "flex");
// }

// infoButton.addEventListener("click", clickInfo);

playButton.addEventListener("click", () => {
    console.log("play button");
    if (technicolorAudio.paused) {
        technicolorAudio.play();
        changeClass(playButton, "fa-play", "fa-pause");
    } else {
        technicolorAudio.pause();
        changeClass(playButton, "fa-pause", "fa-play");

    }
});

technicolorAudio.addEventListener("ended", () => {
    console.log("playback ended");
    changeClass(playButton, "fa-pause", "fa-play");
});

descButton.addEventListener("click", () => {
    toggleVisibility(itemInfo, "block");
    descButton.classList.toggle("fa-plus");
    descButton.classList.toggle("fa-minus");
});