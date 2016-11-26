var request = require('request');
var fs = require('fs');

fs.readFile('./log2.json', function (err, data) {
    if (err) throw err; 
    var obj = JSON.parse(data);
	console.log(obj.message.entry.price);

});
