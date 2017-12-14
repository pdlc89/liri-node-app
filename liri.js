var input = process.argv

var user = input[2];

var holder = require("./keys.js");

var Twitter = require("twitter");
var client = new Twitter(holder.twitterKeys);

var Spotify = require("node-spotify-api");
var spotify = new Spotify(holder.spotifyKeys);

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
	var song = [];
	for(var i = 3; i < input.length; i++) {
		song.push(input[i]);
		//console.log(song);
	}
	var name = song.slice(0, song.length - 1).join(" ") + " " + song.slice(-1);
	//console.log("Your song name is: " + name);
	spotify.search({ type: 'track',
					 query: name,
					 limit: 1}, function(err, data) {
							  if (err) {
							    return console.log('Error occurred: ' + err);
							  }
							var dataElm = JSON.stringify(data.tracks, null, 2);
							console.log(dataElm); 
							});
}else {
	console.log("This didnt work!");
}
