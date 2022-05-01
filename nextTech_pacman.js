var pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
    ["./images/PacMan1.png", "./images/PacMan2.png"],
    ["./images/PacMan3.png", "./images/PacMan4.png"],
];
var direction = 0;
var focus = 0;

function Run() {
    let img = document.getElementById("PacMan");
    let imgWidth = img.width;
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + "px";
    } else {
        pos += 20;
        img.style.left = pos + "px";
    }
}
//setTimeout to call run every 200 milliseconds
setTimeout(Run, 2000);


//complete this with if statements to reverse directions on hitting bounds
// function checkPageBounds(direction, imgWidth, pos, pageWidth) {
//     if (direction === 0 && pos + imgWidth > pageWidth) direction = 1;
//     if (direction === 1 && pos < 0) direction = 0;
//
//     return direction;
// }

function checkPageBounds(direction, imgWidth, pos, pageWidth) {

    if (direction === 0 && pos + imgWidth > pageWidth) {
        direction = (direction + 1) % 2;
        focus = 1;
    } else if (direction === 1 && pos < 0) {
        direction = (direction + 1) % 2;
        focus = 0;
    }
}
// module.exports = checkPageBounds;