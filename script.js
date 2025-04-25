let hillFrontLeft = document.getElementById("hillFrontLeft");
let hillFrontRight = document.getElementById("hillFrontRight");
let water = document.getElementById("water");
let hillBack = document.getElementById("hillBack");
let mountainLeft = document.getElementById("mountainLeft");
let mountainRight = document.getElementById("mountainRight");
let cloudLeft = document.getElementById("cloudLeft");
const clouds = [
    { element: document.getElementById("cloudLeft"), position: 0, speed: 1 },
    { element: document.getElementById("cloudRight"), position: 0, speed: 0.5 }
];

const resetPosition = 200; 
const endPosition = window.innerWidth; 

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    let maxScroll = 500;

    if (value <= maxScroll) {
        hillFrontLeft.style.top = value * 1.5 + "px";
        hillFrontLeft.style.left = value * -1.5 + "px";

        hillFrontRight.style.top = value * 1 + "px";
        hillFrontRight.style.left = value * 1 + "px";

        water.style.top = value * 1 + "px";
        hillBack.style.top = value * 1 + "px";

        mountainLeft.style.left = value * -1 + "px";
        mountainLeft.style.top = value * 1 + "px";

        mountainRight.style.left = value * 1 + "px";
        mountainRight.style.top = value * 1 + "px";
    }
});

function animateCloud() {
    cloudPosition += cloudSpeed;
    if (cloudPosition > endPosition) {
        cloudPosition = resetPosition;
    }
    cloudLeft.style.left = cloudPosition + "px";
}

function animateClouds() {
    clouds.forEach(cloud => {
        cloud.position += cloud.speed;
        if (cloud.position > endPosition) {
        cloud.position = resetPosition;
        }
        cloud.element.style.left = cloud.position + "px";
    });
}

  setInterval(animateClouds, 50); // Approximately 60 frames per second
