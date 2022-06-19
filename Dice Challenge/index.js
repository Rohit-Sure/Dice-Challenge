var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;

var imagesource = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imagesource);






var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

var imagesource = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imagesource);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML='<i class="fa-solid fa-flag-checkered cs"></i>PLAYER 1 WINS';

}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML='<i class="fa-solid fa-flag-checkered cs"></i>PLAYER 2 WINS';

}
else{
  document.querySelector("h1").innerHTML="DRAW!";

}
