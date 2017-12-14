var input = process.argv

var user = input[2];

var request = require("request");

var holder = require("./keys.js");

var Twitter = require("twitter");
var client = new Twitter(holder.twitterKeys);

var Spotify = require("node-spotify-api");
var spotify = new Spotify(holder.spotifyKeys);
//the loop that takes the information after the command
var userInput = [];
	for(var i = 3; i < input.length; i++) {
		userInput.push(input[i]);
		//console.log(song);
	}
	var name = userInput.slice(0, userInput.length - 1).join(" ") + " " + userInput.slice(-1);

if (user === "my-tweets") {
  var parameters = {screen_name: "nodejs"};
  client.get("statuses/home_timeline", parameters, function (error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }else {
    console.log(error);
    }
  });
} else if (user === "spotify-this-song") {
	spotify.search({ type: 'track',
					 query: name,
					 limit: 1}, function(err, data) {
							  if (err) {
							    return console.log('Error occurred: ' + err);
							  }
							var dataElm = JSON.stringify(data.tracks.items, null, 2);
							console.log(dataElm); 
							});
}else if (user === "movie-this") {
	var queryUrl = "http://www.omdbapi.com/?t=" + name + "&y=&plot=short&apikey=trilogy";

	request(queryUrl, function(error, response, body) {

	  // If the request is successful
	  if (!error && response.statusCode === 200) {
	  	//console.log(JSON.parse(body))
	  	console.log("Movie Name: " + name);
	    console.log("Release Year: " + JSON.parse(body).Year);
	    console.log("IMBD Rating: " + JSON.parse(body).imdbRating);
	    console.log("Language: " + JSON.parse(body).Language);
	    console.log("Plot: " + JSON.parse(body).Plot);
	    console.log("Actors: " + JSON.parse(body).Actors);
	  }
	});
}
else {
	console.log("This didnt work!");
}
