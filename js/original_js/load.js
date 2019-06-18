$(document).ready(function(){  
          
            $('#btn1,#btn2').click(function(){  
                $.ajax({  
                    url: "playlist.html",  
                    cache: false,  
                    success: function(html){  
                        $("#content").html(html);  
                    }  
                });  
            }); 
            $('#btn3,#btn4').click(function(){  
                $.ajax({  
                    url: "news.html",  
                    cache: false,  
                    success: function(html){  
                        $("#content").html(html);  
                    }  
                });  
            });
          
        });  
 
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
}*/
          
