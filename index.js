let request = require("request");
const yargs = require("yargs");

const argv = require('yargs').argv;

// let city = argv.c || 'portland';

let city = process.argv.slice(2).join(" ");

//  const city = yargs
//     .options({
//         c: {
//          demand: true,
//          alias: "coord",
//          describe: "temp",
//          string: true
//     }
// })
// .help()
// .alias("help", "h")
// .argv;

let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=7602a2e8aac0c505880bbdac3714ce84&units=metric";

request(url, function (err, response, body) {
    if (err) {
        console.log("error", error);
    } else {
        let x = JSON.parse(body);
            console.log("la température de la ville de" + " " + city + " " + "est:" + " " + x.main.temp);
     
    }
});