document.getElementById("backgroundApplyBtn").addEventListener("click", setBackground);

function backgroundSwitchDropdown() {
	var photoList = ["Clifton Suspension Bridge.jpg", "Collapsing Bridge (Bevere).jpg", "Flooded Field (Slingpool Walk).jpg", 
		"Great Charles Street Queensway.jpg", "Innsbruck Ski Jump.jpg", "Nordkette.jpg", "Oxford Castle Mound.jpg", 
		"Perranporth.jpg", "Sunny Bridge.jpg"];

	var select = document.getElementById("backgroundDropdown");
	
	var i = 0;
	for (photo in photoList) {
		photo = photoList[i];
		photoName = photo.substring(0, photo.lastIndexOf(".")) || photo;

		var opt = document.createElement("option");
			opt.innerHTML = photoName;
			opt.value = photo;
			select.appendChild(opt);

		i += 1;
	}
}

function setBackground () {
	var select = document.getElementById("backgroundDropdown");

	//Gets selected option from optionbox, then escapes it using encode URI component for using as file name
	var selection = encodeURIComponent(select.options[select.selectedIndex].value); 
	
	document.documentElement.style.setProperty("background-image", `url("/assets/images/backgrounds/${selection}")`);
}

backgroundSwitchDropdown();