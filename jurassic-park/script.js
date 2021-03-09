var trackpos = -216;
var tour = 1;
var x = 247;
var y = 74;
var ci = 0;
var cx = [352,350,348,346,344,342,340,339,338,337,336,334,332,330,330,330,330,331,330,329,328,327,326,325,324,323,321,319,317,315,312,310,308,306,303,301,299,297,295,292,290,288,285,283,281,279,277,275,273,272,271,270,268,268,268,268,270,272,274,276,278,280,282,283,285,287,289,290];
var cy = [171,169,167,165,163,161,159,157,155,153,151,149,147,145,143,141,139,137,135,134,132,130,128,126,124,122,121,120,118,117,116,115,114,113,112,111,110,110,110,110,110,110,110,110,110,110,109,108,106,104,102,100, 98, 96, 94, 92, 91, 92, 92, 92, 92, 92, 92, 92, 91, 90, 90, 90];
var a = 0;	// alarm cycle counter
var arrow = -300;

$(document).ready(function(){
	$( ".bordered" ).wrapInner( "<div class='borderInner'></div>" );
	
    $(".demo").click(function(){
        $(this).hide(200);
    });
    $("body").click(function(){
        if (tour != 0)	{ alarm();	} else {	console.log('Enter console');	}
    });
	
	shiftTrack();
	runTour();
	headlights();
});

function headlights() {
	$( "#thisVehicleInner" ).animate({
	  backgroundColor: "#FFFFFF"
	}, 3000, function(){
        if (tour != 0) {	headlightsOff();	}
    });	
}
function headlightsOff() {
	$( "#thisVehicleInner" ).animate({
	  backgroundColor: "#515151"
	}, 3000);

     setTimeout(function () {
		if (tour != 0) {	headlights();	}
     }, 4000);	
}

function runTour() {
	if (tour == 1) {
		ci++;
	}
	if (tour == -1) {
		ci--;
	}
	
	if (ci % 2 == 0) {
		arrow += 80;
		if (arrow > -20) { arrow = -300;	}
		if (arrow > -300) {
			$('#tourRunning > div').animate({
			  'background-position-x': arrow + 'px'
			}, 150, 'linear');
		} else {
			$('#tourRunning > div').css('background-position', arrow + 'px -531px');	// animate tour routing arrow
		}
	}
	
	$("#marker").css("left", cx[ci] + "px");
	$("#marker").css("top", cy[ci] + "px");
	setTimeout(function () {
		runTour();
	}, 800);
	if (ci == cx.length) {tour = -1;}
	if (ci == 0) {tour = 1;}
}

function alarm() {
	a++;
	tour = 0;
	if (a == 5) {			// kis keses utan indul az alarm
		$('#fences > div').removeClass('hidden');
		$('#alarm')[0].play();
		$('#tourRunning').hide(100);
		document.getElementById("paddockScreen").innerHTML = "Animal Paddocks";
		document.getElementById("carSpeed").innerHTML = "11";
		document.getElementById("glitchesList").innerHTML = '<ul><li class="failed">Quadrant: qp 81 Gallimimus Paddock</li><li>Quadrant: qp 82 Reserve Paddock</li><li>Quadrant: qp 83 Raptor Paddock</li><li>Quadrant: qp 84 Brachiosaurus Paddock</li><li>Quadrant: qp 85 Dilophosaurus Paddock</li><li>Quadrant: qp 86 T-Rex Paddock</li></ul>';
	}

	if (a == 10) {
		document.getElementById("carSpeed").innerHTML = "11";
	}
	if (a == 20) {
		document.getElementById("carSpeed").innerHTML = "6";
	}
	if (a == 30) {
		document.getElementById("carSpeed").innerHTML = "0";
		$('.vehicleTrack span').hide(200);
	}
	
	var sound = 8;	//allitja a fence sebesseget	
	if (a == sound) {
		$('#unarmed').show(0);
		$('#fence1').addClass('gif');
		document.getElementById("yellowTableMiddle").innerHTML = "<div>Gallimimus Paddock</div><div>Quadrant: constantb85</div>";
		$('#glitchesList ul li:nth-child(1)').addClass('failed');
	}
	if (a == sound * 2) {
		$('#fence1').addClass('hidden');
		$('#fence2').addClass('gif');
		$('#unarmed').css('left','390px');
		$('#unarmed').css('top','296px');
		document.getElementById("yellowTableMiddle").innerHTML = "<div>Reserve Paddock</div><div>Quadrant Dechant 09 power failure</div>";
		$('#glitchesList ul li:nth-child(2)').addClass('failed');
	}	
	if (a == sound * 3) {
		$('#fence2').addClass('hidden');
		$('#fence3').addClass('gif');
		$('#unarmed').css('left','273px');
		$('#unarmed').css('top','276px');
		document.getElementById("yellowTableMiddle").innerHTML = "<div>Raptor Paddock</div><div>Quadrant: modusbeke86</div>";
		$('#glitchesList ul li:nth-child(3)').addClass('failed');
	}	
	if (a == sound * 4) {
		$('#fence3').addClass('hidden');
		$('#fence4').addClass('gif');
		$('#unarmed').css('left','83px');
		$('#unarmed').css('top','212px');
		document.getElementById("yellowTableMiddle").innerHTML = "<div>Brachiosaurus Paddock</div><div>Quadrant fricikoma01</div>";
		$('#glitchesList ul li:nth-child(4)').addClass('failed');
	}	
	if (a == sound * 5) {
		$('#fence4').addClass('hidden');
		$('#fence5').addClass('gif');
		$('#unarmed').css('left','159px');
		$('#unarmed').css('top','130px');
		document.getElementById("yellowTableMiddle").innerHTML = "<div>Dilophosaurus Paddock</div><div>Quadrant geekprank power failure</div>";
		$('#glitchesList ul li:nth-child(5)').addClass('failed');
	}	
	if (a == sound * 6) {
		$('#fence5').addClass('hidden');
		$('#fence6').addClass('gif');
		$('#unarmed').css('left','294px');
		$('#unarmed').css('top','70px');
		document.getElementById("yellowTableMiddle").innerHTML = "<div>Triceratops Paddock</div><div>Quadrant: miercurea ciuc 1986</div>";
		$('#glitchesList ul li:nth-child(6)').addClass('failed');
	}	
	if (a == sound * 7) {
		$('#fence6').addClass('hidden');
		$('#fence7').addClass('gif');
		$('#unarmed').css('left','245px');
		$('#unarmed').css('top','208px');
		document.getElementById("yellowTableMiddle").innerHTML = "<div>T-Rex Paddock</div><div>Quadrant: ruwix wwweeebbb</div>";
	}	
	if (a == sound * 8) {
		$('#fence7').addClass('hidden');
		$('#fence0').addClass('gif');
		$('#unarmed').css('left','245px');
		$('#unarmed').css('top','290px');
		document.getElementById("yellowTable").innerHTML = "<div class='exclamationmark'><div>!</div></div><div id='yellowTableMiddle'><div>PERIMETER SHUTDOWN</div><div>Quadrant / Animal Perimeter</div></div><div class='exclamationmark'><div>!</div></div>";
	}	
	
	if (a == 72) {
		$('#fence0').addClass('hidden');
		$('#unarmed').hide();
		$('#notResponding').hide();
		$('#mapWarnings').show(0);
	}	
	if (a == 85) {
		$('#fence0').removeClass('hidden');
		$("#mapWarnings").hide(0);
	}
	if (a == 95) {
		$('#fence0').addClass('hidden');
		$("#mapWarnings").show(0);
	}
	if (a == 105) {
		$('#fence0').removeClass('hidden');
		$("#mapWarnings").hide(0);
	}
	if (a == 115) {
		$('#fence0').addClass('hidden');
		$("#mapWarnings").show(0);
	}
	if (a == 125) {
		a = -1;
		window.location.replace("https://geekprank.com/jurassic-park/console/");
	}
	
	
	if (a == 30) {
		$("#notResponding").show(100);
		$('#marker').css('background-position', '-425px -212px');
		$('#buttons > span').removeClass('active');
	}
	if (a == 50) {
		$('#marker').css('background-position', '-425px -212px');
		$("#notResponding").html('Power Failure !');

	}	
	
	setTimeout(function () {
		if (a != -1) {	alarm();	}
	}, 100);	
	
}

function shiftTrack() {
	$(".vehicleTrack > div").css("left", trackpos + "px");
	trackpos = trackpos + 1;
	if (trackpos > -25) {	trackpos = -216;	}
	setTimeout(function () {
		shiftTrack();
	}, 50);
}




