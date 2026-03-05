var cartItems = [];

var isTotalHidden = true;



var bad = {

 name: "bad",

 price: 15

}



var thriller = {

 name: "thriller",

 price: 25

}

var wall = {

 name: "off the wall",

 price: 18

}



var jack = {

 name: "off the wall",

 price: 22

}

var ben = {

 name: "ben",

 price: 5

}

var alone = {

 name: "You are not alone Col.",

 price: 25

}



var forever = {

 name: "Forever Michael",

 price: 8

}

var danger = {

 name: "Dangerous",

 price: 20

}



var blood = {

 name: "Blood on the dance",

 price: 15

}



var vinc = {

 name: "Invincible",

 price: 10

}



var it = {

 name: "This is it",

 price: 15

}


function addToCart(item) {
 wall

 cartItems.push(item);

 document.getElementById(

   "itemCounter").innerHTML =

  cartItems.length;

 showTotal();

}

function clickCart() {

 isTotalHidden = !isTotalHidden;

 showTotal();

}

function showTotal() {

 var orderTotal = document

  .getElementById("orderTotal");

 var shippingTotal = document
  .getElementById("shippingTotal");

 orderTotal.innerHTML = "";

 shippingTotal.innerHTML = "";

 if (isTotalHidden === false) {

  var total = 0;

  for (var i = 0; i < cartItems

   .length; i++) {

   total += cartItems[i].price;

  }


  var shipping = calculateShipping(
   total);

  orderTotal.innerHTML +=

   "Total: $" + total;

  shippingTotal.innerHTML +=
   "Shipping: $" + shipping;

 }






}


function calculateShipping(total) {

 var shipping;

 if (total >= 50) {

  shipping = 0

 } else {

  shipping = 15

 }

 return shipping;

}







function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }





function addClasses()  {
var el = document.querySelector("p");
el.classList.add("italic", "bold", "underline");
}


function signUp() {
var username= document.getElementById("usernameInput").value;

var phone= document.getElementById("phoneInput").value;

document.getElementById("message").innerHTML= username + " , I've sent a message to your phone.<br><br><em>Michael Jackson.</em>";


console.log("Sending text to "+ phone);

}



var username = "Jackson";
username= "thanks! <br><br><em><u>love Michael</u></em>";

function share() {


var postText = 
document.getElementById("postText").value;


var posts = document.getElementById("posts");

posts.innerHTML = posts.innerHTML +  
"<br>";


posts.innerHTML = posts.innerHTML + postText +"<br>"+"<br>"+username +"<br>" ;

}


function playAudio(audioFile, element) {
  const specialsWord = document.getElementById('specials');
  if (specialsWord) specialsWord.style.display = 'none';

  // Remove highlight from all songs
  document.querySelectorAll('.song').forEach(tag => tag.classList.remove('active'));

  // Highlight clicked song
  element.classList.add('active');

  // Play audio
  const audioPlayer = document.getElementById('audio');
  audioPlayer.src = audioFile;
  audioPlayer.play();

  // When track ends
  audioPlayer.onended = function () {
    if (specialsWord) specialsWord.style.display = 'inline';
    element.classList.remove('active');
  };
}
