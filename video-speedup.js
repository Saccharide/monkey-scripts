// ==UserScript==
// @name         video playback
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       saccharide
// @match        https://domainA.com*                                          // this is the the main frame
// @match        https://domainB.com/*                                         // this can be the inner iframe
//

if (window.top === window.self) {
    //--- Script is on domain_B.com when/if it is the MAIN PAGE.
    console.log("Inside main page");
}
else {
    //--- Script is on domain_B.com when/if it is IN AN IFRAME.
    var checkExist = setInterval(function() {
		if (document.querySelector('div.videoDisplay video').src.substring(0, 4) == "blob"){
		   if (document.querySelector("div.videoDisplay video").playbackRate == 1) {
			   document.querySelector("div.videoDisplay video").playbackRate = 1.5;
		   }
		   //document.querySelector("div.videoDisplay video").play();
		   //clearInterval(checkExist);
		}
		else{
		console.log("not found");
		}
	}, 1000);
}
