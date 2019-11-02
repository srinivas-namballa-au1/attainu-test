var fs = require('fs');

var global_data = '';

// var readStream = fs.createReadStream('airports.json', 'utf8');

// var dat = readStream.on('data', function(chunk) {
//     data += chunk;
// }).on('end', function() {
//     return data;
// });

// fs.readFile("airports.json", "utf8", function(err, data) {
//     if (err) { throw err };
//     global_data = data;
// });

var global_data = fs.readFileSync("airports.json").toString();
global_data = JSON.parse(global_data);
// console.log(global_data.airports);

module.exports = global_data;