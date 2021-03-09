$(document).ready(function () {

	var loc = window.location.href+'';
	if (loc.indexOf('http://')==0){
		window.location.href = loc.replace('http://','https://');	// https redirect
	}
	
	$('body').keypress(function(e) {
	
		if (stage == 1) {	//fent a kurzor
			if(e.which == 13) { //enter
				$('#formattingWrap').show();
				timedCount();
				stage = 2;
				$('#typing').removeClass('typing');
				
			} else if(e.which == 8) { //backspace
				//str = str.substring(0, str.length - 1);
				
				$('#typing').html($('#typing').html().substring(0, $('#typing').html().length - 1)); // cut off last character
				
				
			} else if(e.which == 32) { //space
				$('#typing').html($('#typing').html() + '_')
			} else {
				$('#typing').html($('#typing').html() + String.fromCharCode(e.which))
			}
		}
		
		if (stage == 3) {
			if(e.which == 13) { //enter
				$('#intro').hide();
				$('#formattingWrap').hide();
				window.location.replace("https://geekprank.com/just-prank/");
				//$('#prankBro').show();
			} else if(e.which == 8) { //backspace
				
				$('#typing2').html($('#typing2').html().substring(0, $('#typing2').html().length - 1)); // cut off last character
				
			} else if(e.which == 32) { //space
				
			} else {
				$('#typing2').html(String.fromCharCode(e.which))
			}			
		}

	});
});


var percent = 0;	//max 20
var i;
var stage = 1;
function timedCount(){
	percent++;
    if (percent <= 20) {
		var seg ="";
		for (i = 0; i <= 20; i++) {
			if (i <= percent) {
				seg = seg + '&#9608;';
			} else {
				seg = seg + '&#9617;';
			}
			$('#formatting').html(seg);
		}
		$('#percent').html(percent*5-(Math.floor(Math.random() * 5) + 1) );
		t = setTimeout("timedCount()",(300 + (Math.floor(Math.random() * 800) + 1)));
	} else {
		$('#percent').html('100');
		$('#formatComplete').show();
		stage = 3;
	}
}
