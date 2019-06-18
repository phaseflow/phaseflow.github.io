//button-functions

/*function play() {
console.log("Run");
document.getElementById("player").play();
document.getElementById("pausebutton").style.display="inline-block";
document.getElementById("stopbutton").style.display="inline-block";
document.getElementById("vol+button").style.display="inline-block";
document.getElementById("vol-button").style.display="inline-block";
document.getElementById("playbutton").style.display="none";
document.getElementById("canvas").style.display="inline-block";
}
function pause() {
console.log("Pause");
document.getElementById("player").pause();
document.getElementById("playbutton").style.display="inline-block";
document.getElementById("pausebutton").style.display="none";
}
function stop() {
console.log("Stop");
document.getElementById("playbutton").style.display="inline-block";
document.getElementById("pausebutton").style.display="none";
document.getElementById("vol+button").style.display="none";
document.getElementById("vol-button").style.display="none";
document.getElementById("stopbutton").style.display="none";
document.getElementById("canvas").style.display="none";
document.getElementById("player").pause();
document.getElementById("player").currentTime = 0;
}
function volup() {
console.log("Vol+");
document.getElementById("player").volume+=0.1;
}

function voldn() {
console.log("Vol-");
document.getElementById("player").volume-=0.1;
}

function fwd() {
try{
document.getElementById("player").currentTime -= 30.0;
}
catch (e) {
                     if(window.console && console.error("Error:" + e));
   }
}

function rew() {
document.getElementById("player").currentTime -= 10.0;
}

//display and update progress bar
function progressBar() { 
                var a = document.getElementById('player'); 
                //get current time in seconds
                var elapsedTime = Math.round(a.currentTime);
                //update the progress bar
                if (canvas.getContext) {
                    var ctx = canvas.getContext("2d");
                    //clear canvas before painting
                    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
                    ctx.fillStyle = "rgb(38,166,154)";
                    var fWidth = (elapsedTime / a.duration) * (canvas.clientWidth);
                    if (fWidth > 0) {
                        ctx.fillRect(0, 0, fWidth, canvas.clientHeight);
                    }
                }
}
                     
            //added events

function initEvents() {
                var canvas = document.getElementById('canvas');  
                var a = document.getElementById('player');
                                
                //set up event to update the progress bar
                a.addEventListener("timeupdate", progressBar, true); 
                //set up mouse click to control position of audio
                canvas.addEventListener("click", function(e) {
                    //this might seem redundant, but this these are needed later - make global to remove these
                    var a = document.getElementById('player'); 
                    var canvas = document.getElementById('canvas');            

                    if (!e) {
                        e = window.event;
                    } //get the latest windows event if it isn't set
                    try {
                        //calculate the current time based on position of mouse cursor in canvas box
                        a.currentTime = a.duration * (e.offsetX / canvas.clientWidth);
                    }
                    catch (err) {
                    // Fail silently but show in F12 developer tools console
                        if (window.console && console.error("Error:" + err));
                    }
                }, true);
}
//this event gets fired when a page has loaded
window.addEventListener("DOMContentLoaded", initEvents, false);


*/

//player-functions    

var currentTrack = "";  //global
function mini(elem)

{
  var btnicon = elem.getElementsByTagName('i')[0];
  var btnicons = document.getElementsByTagName('i');
  var tracks = btnicons.length;
  //alert(tracks);
  
  
  
  
  
  var trackURL = elem.id;
  
  var Launch = document.getElementById('player');      
        
  if  (trackURL !== currentTrack) 
    {
      Launch.src = trackURL;
      currentTrack = trackURL;                        
    }
        
  if  (btnicon.className == "mdi-av-play-arrow" && Launch.paused)
    {
      document.getElementById("playersection").style.display="inline-block";
      Launch.play();
      for (var c = 1; c < tracks; c++ ) {btnicons[c].className = "mdi-av-play-arrow"}
      btnicon.className = "mdi-av-pause";      
    } 
  
    else 
      {
        document.getElementById("playersection").style.display="none";
        Launch.pause();
        btnicon.className = "mdi-av-play-arrow";        
      }     
}
      
function forward() {
  try
  {
    document.getElementById("player").currentTime += 30.0;
    console.log("Time+30");
  }
  catch (e) 
  {
    if(window.console && console.error("Error:" + e));
  }
}

function rewind() {
  try
  {
    document.getElementById("player").currentTime -= 10.0;
    console.log("Time-10");
  }
  catch (e) 
  {
    if(window.console && console.error("Error:" + e));
  }
}
      
function volup() {
console.log("Vol+");
document.getElementById("player").volume+=0.2;
}

function voldn() {
console.log("Vol-");
document.getElementById("player").volume-=0.2;
}    

function stop() {
	  var btnicons = document.getElementsByTagName('i');
	  for (var c = 0; c < btnicons.length; c++ ) {btnicons[c].className = "mdi-av-play-arrow"}
console.log("Stop");
document.getElementById("playersection").style.display="none";
document.getElementById("player").pause();
document.getElementById("player").currentTime = 0;
}