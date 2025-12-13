

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








function playAudio(audioFile) {
  // Hide the "Play" word
  const playWord = document.getElementById('play');
  if (playWord) {
    playWord.style.display = 'none';
  }

  // Remove highlight from all songs
  document.querySelectorAll('tag').forEach(tag => tag.classList.remove('active'));

  // Highlight the clicked song
  event.target.classList.add('active');

  // Play audio
  const audioPlayer = document.getElementById('audio');
  audioPlayer.src = audioFile;
  audioPlayer.play();

  // When the track ends...
  audioPlayer.onended = function () {
    // Show the "Play" word again
    if (playWord) {
      playWord.style.display = 'inline'; // or 'block', depending on your layout
    }

    // Remove highlight from the active song
    event.target.classList.remove('active');
  };
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



