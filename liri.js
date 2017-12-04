var input = process.argv

var Twitter = require("twitter");
var holder = require("./keys.js");
var client = new Twitter(
  holder.twitterKeys
);

// var client = new Twitter({
//   consumer_key: 'CCaYJW2gWNx38LQ10YbT4YRI2',
//   consumer_secret: 'gshx9MtCEHrVcgdJcO21tOEENm1YXZPG5MBlTY3v55xEZYdrm5',
//   access_token_key: '937476818768076800-Imf2Svv2ZJjdKysPUJCT0ztWhTURjur',
//   access_token_secret: 'WJLgBkoP9UqOSrIk37vBUMKRy7zhvSyzF0p3fdIMF6KNJ',
//   });

var parameters = {screen_name: "nodejs"};
client.get("statuses/user_timeline", parameters, function (error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }else {
  console.log(error);
  }
});

console.log("it worked");