$(document).ready(function(){
    $(".demo").click(function(){
        $(this).hide(200);
    });
    $("body").keydown(function(){
        if (k < 63) {	addKey();	}
    });	
	cycle();
	cursorBlink();
});

var cursor = 0;
var ci = 0;
var width = 0;
var k = 0;
var ahaha = 0;
var beepcount = 0;

function addKey() {
	var text = "access security#access security grid#access main security grid ";

	if (text[k++] != "#") {
		document.getElementById("type").innerHTML = document.getElementById("type").innerHTML + text[k-1];
	} else {
		document.getElementById("type").innerHTML = document.getElementById("type").innerHTML + "<br>access: PERMISSION DENIED.<br>&gt; ";
		$('#beep'+beepcount++)[0].play();
	}

	if (k == 62) {
		document.getElementById("type").innerHTML = document.getElementById("type").innerHTML + "<br>access: PERMISSION DENIED....and....<br>";
		$('#beep2')[0].play();
		beepcount = 0;
		ahahahLines();
	}
}

function ahahahLines() {
	ahaha++;
	
	if (ahaha % 6 == 0) {	$('#dramatic' + beepcount++)[0].play();	}
	
	document.getElementById("type").innerHTML = document.getElementById("type").innerHTML + "YOU DIDN'T SAY THE MAGIC WORD!<br>";
		
	if (ahaha == 20) {	$('h1').hide(0);	}
	if (ahaha == 21) {	$('#row1').hide(0);	}
	if (ahaha == 22) {	$('#row2').hide(0);	}
	if (ahaha == 23) {	document.getElementById("type").innerHTML = document.getElementById("type").innerHTML.substr(24, document.getElementById("type").innerHTML.length);		}
	if (ahaha == 24) {	document.getElementById("type").innerHTML = document.getElementById("type").innerHTML.substr(30, document.getElementById("type").innerHTML.length);		}
	if (ahaha == 25) {	document.getElementById("type").innerHTML = document.getElementById("type").innerHTML.substr(29, document.getElementById("type").innerHTML.length);		}
	if (ahaha == 26) {	document.getElementById("type").innerHTML = document.getElementById("type").innerHTML.substr(30, document.getElementById("type").innerHTML.length);		}
	if (ahaha == 27) {	document.getElementById("type").innerHTML = document.getElementById("type").innerHTML.substr(34, document.getElementById("type").innerHTML.length);		}
	if (ahaha == 28) {	document.getElementById("type").innerHTML = document.getElementById("type").innerHTML.substr(40, document.getElementById("type").innerHTML.length);		}
	
	if (ahaha == 40) {
		document.getElementById("ahahaContent").innerHTML = '<div id="wrapIframe"><iframe src="https://www.youtube.com/embed/g_vZasFzMN4?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>';
		$('.window#ahahah').fadeIn(200);
	}
		
	setTimeout(function () {
		if (ahaha < 50) {	ahahahLines();	}
	}, (100) );
}


function cycle() {
	ci++;
	
	$(".bar > div").each(function() {
		width = $(this).width() / $(this).parent().width() * 100
		width = width + getRandomInt(80) - 40;
		if (width < 5) {	width = 5;	}
		if (width > 100) {	width = 100;	}
		$(this).width(width + "%");
	});
	$(".bar > div > div").each(function() {
		width = $(this).width() / $(this).parent().width() * 100
		width = width + getRandomInt(20) - 10;
		if (width < 0) {	width = 0;	}
		if (width > 20) {	width = 20;	}
		$(this).width(width + "%");
	});
	$(".bar > div > div > div").each(function() {
		width = $(this).width() / $(this).parent().width() * 100
		width = width + getRandomInt(20) - 10;
		if (width < 0) {	width = 0;	}
		if (width > 20) {	width = 20;	}
		$(this).width(width + "%");
	});
	
	setTimeout(function () {
		cycle();
	}, (getRandomInt(600) + 200) );
}

function cursorBlink() {
	cursor++;
	
	if (cursor % 3 == 0) {
		$("#cursor").css("background-color","transparent");
	} else {
		$("#cursor").css("background-color","#0F0");
	}
		
	setTimeout(function () {
		cursorBlink();
	}, (350) );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


