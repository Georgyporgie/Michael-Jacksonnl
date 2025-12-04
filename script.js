

function signUp() {
var username= document.getElementById("usernameInput").value;

var phone= document.getElementById("phoneInput").value;

document.getElementById("message").innerHTML= username + " , I've sent a message to your phone.<br><br><em>Michael Jackson.</em>";


console.log("Sending text to "+ phone);

}



var username = "Jackson";
username= "I love You! <br><em><u>Michael Jackson</u></em>";

function share() {


var postText = 
document.getElementById("postText").value;


var posts = document.getElementById("posts");

posts.innerHTML = posts.innerHTML +  
"<br>";


posts.innerHTML = posts.innerHTML + postText +"<br>"+"<br>"+username +"<br>" ;

}









let currentAudio = null;

function playAudio(src) {
  if (currentAudio) {
    stopAudio();
  }
  currentAudio = new Audio(src);
  currentAudio.volume = 1;
  currentAudio.play();
}

function stopAudio() {
  if (!currentAudio) return;
  currentAudio.pause();
  currentAudio.currentTime = 0;
  currentAudio = null;
}
   




function addStyleSheet() {
 var el = document.querySelector(
  "link");
 el.href = "style2.css";
}

function addClasses()  {
var el = document.querySelector("p");
el.classList.add("italic", "bold", "underline");
}






 








function toggleDarkMode() {
var el = document.querySelector(
  "body");
el.classList.toggle("darkMode")
}

function galleryOn() {
var el = document.querySelector(
  "div");
el.classList.add("border",
  "bg-white");
}


