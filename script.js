var targets = [
	{single: "pony", tryreq: "pony.jpeg"},
	{single: "192.168.0.1", tryreq: "pony.jpeg"},
	{single: "172.30.3.242", tryreq: "pony.jpeg"}
]

scanner(targets);

// try {
// 	scanner(targets);
// }

// catch(e) {
// 	console.log(e);
// }

// document.body.innerHTML = "<img src='http://pony/pony.jpg'>";


function scanner(targets) {
	for (var i = targets.length - 1; i >= 0; i--) {
		document.body.innerHTML = "<img id='img' onload='correct();' src='http://" + targets[i].single + "/pony.jpeg' />"
	};
}


function correct() {
	console.log("damn!")
}


function httpGet(theUrl) {
	var req = null;

	req = new XMLHttpRequest();
	req.open( "POST", "http://" + theUrl );
	req.send( null );
	return req.response;
	req.onerror = function() { console.log("error"); }
}
