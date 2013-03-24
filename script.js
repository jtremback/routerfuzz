var targets = [
	{single: "192.168.0.1"},
	{single: "pony"},
	{single: "172.30.3.242"}
]

try {
	scanner(targets);
// }

// catch(e) {
// 	console.log(e);
// }

function scanner(targets) {
	for (var i = targets.length - 1; i >= 0; i--) {
		console.log(targets[i].single)
		document.getElementById("holder").innerHTML = "<img src='";
	};
}

function httpGet(theUrl) {
	var req = null;

	req = new XMLHttpRequest();
	req.open( "GET", "http://" + theUrl );
	req.send( null );
	return req.response;
	req.onerror = function() { console.log("error"); }
}
