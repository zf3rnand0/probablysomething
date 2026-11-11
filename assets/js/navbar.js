//start cycleCol(), then repeat each 8500 ms
cycleCol();
setInterval(cycleCol, 17000);

dateSet();
timeSet();
setInterval(timeSet, 1000);

function cycleCol () {
	document.querySelectorAll(".title span").forEach(function (el, i) {
		setTimeout(function (){
			if (getComputedStyle(el)["color"] == "rgb(255, 201, 0)") {
				el.style.color = "#316eff";
			} else {
				el.style.color = "#ffc900"
			}
		}, i * 1000);
	});
}

function dateSet () {
	var dayMonthObj = document.getElementById("dayMonth");
	var yearObj = document.getElementById("year");

	var dateObj = new Date();

	var day = String(dateObj.getUTCDate()).padStart(2, "0");
	var month = String(dateObj.getUTCMonth()).padStart(2, "0");
	var year = String(dateObj.getUTCFullYear()).substring(2);

	var date = day+"/"+month+"/"+year;
	dayMonthObj.innerHTML += date;
	//yearObj.innerHTML += year;
}

function timeSet () {
	var timeObj = document.getElementById("time");

	var dateObj = new Date();

	var minute = String(dateObj.getUTCMinutes()).padStart(2, "0");
	//Winter time:
	var hour = String(dateObj.getUTCHours()).padStart(2, "0");
	//Summer time:
	//var hour = String(dateObj.getUTCHours() + 1).padStart(2, "0");

	if (timeObj.innerHTML.includes(":")) {
		timeObj.innerHTML = hour + " " + minute;
	}	else {
		timeObj.innerHTML = hour + ":" + minute;
	}
}