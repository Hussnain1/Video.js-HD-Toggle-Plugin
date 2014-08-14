
        
        function HDtoggle (noHDsrc,HDsrc) {
         
		 var HD1 = false;
		 /* It is the variable which tells us that that HD video is getting played or not.
			HD1 = false ---> video is not HD
			HD1 = true ----> video is HD */
          
             videojs.HD = videojs.Button.extend({
          /* @constructor */
               init: function(player, options){
                 videojs.Button.call(this, player, options);
                 this.on('click', this.onClick);
               }
             });
            
			/* Changing sources by clicking on HD button */
			/* This function is called when HD button is clicked */
            videojs.HD.prototype.onClick = function() {
         	
         	
         	if (HD1) {  /* If video is not HD */
         var css = document.createElement("style");
         css.type = "text/css";
         css.innerHTML = ".vjs-control.vjs-HD-button { color: silver; font-weight:normal; text-shadow: 0 0 5em #fff;}";
		 /* Changing the HD button to initial styling when we play non HD video by clicking on HD button. */
		 document.body.appendChild(css);
         videojs("example_video_1").src([{type: "video/mp4", src: noHDsrc }]);
		 /* noHDsrc is the url provided in the function arguments */
         videojs("example_video_1").play(); 
		 /* This automatically plays the video when we click on HD button to change the source. */
         HD1 = false;
         }
         else { /* if video is HD */
         var css = document.createElement("style");
         css.type = "text/css";
         css.innerHTML = ".vjs-control.vjs-HD-button { color: #36D8DE; font-weight:bold; text-shadow: 0 0 1em #fff;}";
		 /* This css applies when HD video is played. You can easily change the blue color of HD button by changing the value of color above. If you would like to remove the shadow from HD button, remove text-shadow from above. */
         document.body.appendChild(css);
         videojs("example_video_1").src([{type: "video/mp4", src: HDsrc }]); 
		 /* HDsrc is the url provided in the function arguments. */
         videojs("example_video_1").play(); 
		 /* This automatically plays the video when we  click on HD button to change the source. */
         HD1 = true;
         }
         	
         };
         
		 /* Create HD button */
		 var createHDButton = function() {
               var props = {
                   className: 'vjs-HD-button vjs-control',
                   innerHTML: '<div class="vjs-control-content">' + ('HD') + '</div>', 
                   role: 'button',
                   'aria-live': 'polite', 
                   tabIndex: 0
                 };
               
               return videojs.Component.prototype.createEl(null, props);
             };
         
			/* Add HD button to the control bar */
		var HD;
             videojs.plugin('HD', function() {
               var options = { 'el' : createHDButton() };
               HD = new videojs.HD(this, options);
               this.controlBar.el().appendChild(HD.el());
             });
         
           /* Set Up Video.js Player */
		 var vid = videojs("example_video_1", {
              plugins : { HD : {} }
            });
             
}
