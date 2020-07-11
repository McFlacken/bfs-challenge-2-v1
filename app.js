var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
	   res.redirect("/home");
});

app.get("/home", function(req, res){

	request('https://api.thecatapi.com/v1/images/search', function(error, response, body){
	if(!error && response.statusCode == 200){
		var parsedData = JSON.parse(body);
		res.render("home", {data: parsedData})
		console.log(parsedData[0]["url"]);
	}
});
	
});

app.listen(process.env.PORT || 3000, function(){
	console.log('In a galaxy far far away... CAT app has now started...');
});