

function signUp() {
var username= document.getElementById("usernameInput").value;

var phone= document.getElementById("phoneInput").value;

document.getElementById("message").innerHTML= username + " , I've sent a message to your phone.<br><br><em>Michael Jackson.</em>";


console.log("Sending text to "+ phone);

}



var username = "Jackson";
username= "you betcha! <br><u>Michael Jackson</u>";

function share() {


var postText = 
document.getElementById("postText").value;


var posts = document.getElementById("posts");

posts.innerHTML = posts.innerHTML +  
"<br>";


posts.innerHTML = posts.innerHTML + postText +"<br>"+"<br>"+username +"<br>" ;

}




function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }
  

 




list.onclick = function(e) {
  e.preventDefault();

  var elm = e.target;
  var audio = document.getElementById('audio');

  var source = document.getElementById('audioSource');
  source.src = elm.getAttribute('data-value');

  audio.load(); //call this to just preload the audio without playing
  audio.play(); //call this to play the song right away
};

function playAudio (src) {
    if(window.audio) {
       audio.pause();
    }
    window.audio = new Audio (src);
    window.audio.play();
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
