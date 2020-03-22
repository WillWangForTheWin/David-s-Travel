var unirest = require("unirest");

var req = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/%7Bsessionkey%7D");

req.query({
	"pageIndex": "0",
	"pageSize": "10"
});

req.headers({
	"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"x-rapidapi-key": "2c8eaade5emsh270114438991ba9p1f1397jsn6dd492af0fe3"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});