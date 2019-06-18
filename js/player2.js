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
