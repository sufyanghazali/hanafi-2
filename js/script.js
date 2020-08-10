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


// toggle contact info
infoButton.addEventListener("click", () => {
    console.log("Toggling info");
    toggleVisibility(infoText, "flex");
});


// pause audio
playButton.addEventListener("click", () => {
    console.log("play button");
    if (technicolorAudio.paused) {
        technicolorAudio.play();
    } else {
        technicolorAudio.pause();
    }
});


// Disable auto cycle for carousel
$('.carousel').carousel({interval: false});