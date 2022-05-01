const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
];
var picIndex = 2;
var posX = 0;
var posY = 0;
var direction ='left';
var speedX = 0;
var speedY = 0;
var focus = 0;
var runStatus = false;

//Global Variables: Container
var container = document.getElementById('container');
var containerSize = document.getElementById
('container').getBoundingClientRect();
var limitX = containerSize.width;
var limitY = containerSize.height;
const welcomeMessage = document.getElementById('welcomeMessage');

//Global Variables: Ball
var ball = document.getElementById('ball');
var score = 0;
var velocityX = 5;
var velocityY = 5;
var speed = 50;
var positionX = getRandom(containerSize.width);
var positionY = getRandom(containerSize.height);
var limitX1 = 10;
var limitX2 = containerSize.width - 20;
var limitY2 = containerSize.height - 20;

//Global Variables: Keybind
const buttonReload = document.getElementById
('butttonReload');
const buttonLeft = document.getElementById
('buttonLeft');
const buttonRight = document.getElementById
('buttonRight');
const buttonUp = document.getElementById
('buttonUp');
const buttonDown = document.getElementById
('buttonDown');


//Utility fxn: Random number generator
function getRandom(scale){
  return Math.floor(Math.random() * scale);
}
// Utility fxn: Window reload
function windowReload(){
  window.location.reload();
}
//Utility fxn: force window reload upon screen orientation change
// window.onorientationchange = function(event) {
//   windowReload();
// }


/// var pos = 0;
// let pageWidth = window.innerWidth;
// var direction = 0;

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
////we're dividing by '2' and taking the remainder. even focus = '0'. odd 'focus'= 1
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
//// The image source //The images in the array are chosen based on dependent on direction and focus
  img.src = pacArray[direction][focus];
//// Condition for direction. If direction is true, then the position is incremented by '-20' (going left?)
// //if direction is 1, it is true. And it will be going from right to left. N
// // 0=not true, so addition causes the direction to go from left to right
  if (direction) {
    pos -= 20;
    img.style.left = pos + "px";
  } else {
    pos += 20;
    img.style.left = pos + "px";
  }
}
//setTimeout to call run every 200 milliseconds
setTimeout(Run, 200);
//
//
// //complete this with if statements to reverse directions on hitting bounds
// check where the image is and whether the left-hand side is less than 0 or the right-hand side is
// bigger than your page width.
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (direction === 0 && pos + imgWidth > pageWidth) direction = 1;
  if (direction === 1 && pos < 0) direction = 0;

  return direction;
}


const movingBall = () => {

  if(positionX < limitX1 || positionX > limitX2){

    velocityX *= -1;
  }

  if(positionY < limitY1 || positionY > limitY2){

    velocityY *= -1;
  }


module.exports = checkPageBounds;}
