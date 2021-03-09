$(document).ready(function () {
	
	$('body').keydown(function(e) {
		console.log(e.which)
		if(e.which == 38) { //up

		}
		if(e.which == 40) { //down

		}
		if(e.which == 37) { //left

		}
		if(e.which == 39) { //right

		}
		if(e.which == 13) { //enter
			if (completed == 1) {
				$('#screen5').hide();

				//t = setTimeout('window.open("https://geekprank.com/fake-dos/","_self");',2000);
					
				 setTimeout(function () {
					document.getElementById("redirectIframe").style.display = "block";
					document.getElementById("redirectIframe").innerHTML = '<iframe id="fullScreenIframe" style="width: 100%; height: 100%; overflow: hidden;" src="https://geekprank.com/fake-dos/" width="100" height="100" scrolling="no"></iframe>';
					document.getElementById("fullScreenIframe").contentWindow.focus();
				 }, 2000);					
			}
		}
		if(e.which == 112) { //F1
			
		}
		if(e.which == 27) { //Esc
			
		}
		if(e.which == 113) { //F2
			
		}
		if(e.which == 120) { //F9
			
		}
	});	
	timedCount();
});

var seg;
var count=0;
var completed=0;
function timedCount(){
	count++;
    if (count <= 30) {
		if (count == 3) {
			$('#screen1').hide();
			$('#screen2').show();
		}		
		if (count == 9) {
			$('#screen2').hide();
			$('#screen1').show();
		}
		if (count == 10) {
			$('#screen2').hide();
			$('#screen3').show();
		}
		if (count > 10) {
			$('#loadingDots').html($('#loadingDots').html() + ".");			
		}
		if (count == 19) {
			$('#screen3').hide();
			$('#screen1').show();
		}
		if (count == 20) {
			$('#screen3').hide();
			$('#screen4').show();
		}
		if (count > 20) {
			$('#loadingDots2').html($('#loadingDots2').html() + ".");			
		}
		if (count == 29) {
			$('#screen4').hide();
			$('#screen1').show();
		}
		if (count == 30) {
			$('#screen4').hide();
			$('#screen5').show();
			completed = 1;
		}
		t = setTimeout("timedCount()",(10 + (Math.floor(Math.random() * 1000) + 1)));
	} else {
		
	}
}