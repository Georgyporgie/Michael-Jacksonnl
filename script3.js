

function signUp() {
var username= document.getElementById("usernameInput").value;

var phone= document.getElementById("phoneInput").value;

document.getElementById("message").innerHTML= username + " , I've sent a message to your phone.<br><br><em>Michael Jackson</em>";


console.log("Sending text to "+ phone);

}



var username = "Jackson";
username= "thank you! Michael Jackson";

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
  

 


document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;

function startplayer() 
{
 player = document.getElementById('music_player');
 player.controls = false;
}

function play_aud() 
{
 player.play();
} 
function pause_aud() 
{
 player.pause();
}
function stop_aud() 
{
 player.pause();
 player.currentTime = 0;
}
function change_vol()
{
 player.volume=document.getElementById("change_vol").value;
}

// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
 
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
 
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
 
// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;
 
// Create the audio element for the player
let curr_track = document.createElement('audio');
 
// Define the list of tracks that have to be played
let track_list = [
  
 



{
    name: "Let me show you",
    artist: "The Jacksons",
    image: "https://i.ibb.co/vJPfps0/jackson5.png",
    path: "muziek/songs02/Jacksons - Let me show you (Ruud Remix).mp3",
  },
 
{
    name: "Shake your body",
    artist: "The Jacksons",
    image: "https://i.ibb.co/ZMBRyS7/shake-your-body.png",
    path: "muziek/songs02/Jacksons Shake your body02.mp3",
  },

{
    name: "One day in your life",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/RC07DPS/forever-michael.png",
    path: "muziek/songs02/Michael Jackson - One day in your life.mp3",
  },



{
    name: "In the closet",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/rQrpCr2/she-s-out-of-my-life.png",
    path: "muziek/songs02/Michael Jackson - In the closet.mp3",
  },


{
    name: "She's out of my life",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/rQrpCr2/she-s-out-of-my-life.png",
    path: "muziek/songs02/Michael Jackson- She's out of my life.mp3",
  },


{
    name: " Rock with you",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/rQrpCr2/she-s-out-of-my-life.png",
    path: "muziek/songs02/Michael Jackson Rock with you.mp3",
  },



{
    name: " Don't stop till you get enough",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/rQrpCr2/she-s-out-of-my-life.png",
    path: "muziek/songs02/Michaerl Jackson - Don't stop till you get enough (Disco Purrfection).mp3",
  },







];


function loadTrack(track_index) {
  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();
 
  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();
 
  // Update details of the track
  track_art.style.backgroundImage =
     "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
     "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);
 
  // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener("ended", nextTrack);
 
  // Apply a random background color
  random_bg_color();
}
 
function random_bg_color() {
  // Get a random number between 64 to 256
  // (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
 
  // Construct a color withe the given values
  let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 
  // Set the background to the new color
  document.body.style.background = bgColor;
}
 
// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}



function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack();
}
 
function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;
 
  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
 
function pauseTrack() {
  // Pause the loaded track
  curr_track.pause();
  isPlaying = false;
 
  // Replace icon with the play icon
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}
 
function nextTrack() {
  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
 
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}
 
function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
   
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}


function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  seekto = curr_track.duration * (seek_slider.value / 100);
 
  // Set the current track position to the calculated seek position
  curr_track.currentTime = seekto;
}
 
function setVolume() {
  // Set the volume according to the
  // percentage of the volume slider set
  curr_track.volume = volume_slider.value / 100;
}
 
function seekUpdate() {
  let seekPosition = 0;
 
  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;
 
    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
 
    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
 
    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}




// Load the first track in the tracklist
loadTrack(track_index);



function addClasses()  {
var el = document.querySelector("p");
el.classList.add("italic", "bold", "underline");
}

//function publish() {
// var el = document.querySelector(
//  ".prompt");
// el.innerHTML ="The eighth child of the Jackson family, Michael made his professional debut in 1964 with his elder brothers Jackie, Tito, Jermaine and Marlon as a member of the Jackson 5.<br>Later in 1964, Michael began sharing lead vocals with Jermaine. <br><br>In august 1967 while touring the East Coast, they won a weekly amateur night concert at the Apollo Theather in Harlem.<br><br>In 1969 Motown executives decided Diana Ross should introduce the Jackson 5 tot the public.<br>The Jackson 5 made their first television debut in 1969 in the Miss Black America pageant, performing a cover of 'it's your thing'.<br><br>In January 1970 'I want you back' became the first Jackson 5 song to reach number one on the US Billboard Hot 100 it stayed there for four weeks.<br><br>Jackson began his solo career in 1971 while at Motown Records and became a solo star with his 1979 album Off the Wall.<br>";
//}

function changeProfile() { 
var el = document.querySelector("img");
el.setAttribute("src","images/Michael Jackson youth.gif");
}

function next() {
document.getElementById("feit").innerHTML = "There are some hidden chambers over here, can you spot them?<br>Love Michael.";

}

function previous() { 
document.getElementById("feit").innerHTML = "Michael welcomes you at his newfound home.";
}

function changeAttribute() { 
var el = document.querySelector("img");
el.src= "images/jackson55.png";
}
//var five = document.getElementById("five");
// right.removeChild(five);




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

