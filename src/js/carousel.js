const slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");

let counter = 0,
    widthImg = 50 / sliderSection.length;

setInterval(moveToRight, 5000);

function moveToRight() {
    counter++;
    if (counter >= sliderSection.length) {
        counter = 0;
        slider.style.transition = "none";
    } else {
        slider.style.transition = "all ease-in-out 1s";
    }
    let moveAmount = -widthImg * counter;
    slider.style.transform = `translateX(${moveAmount}%)`;
}