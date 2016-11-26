var request = require('request');
var fs = require('fs');

request('https://private-b0e6e-foodieapi1.apiary-mock.com/api/entry?ean=3228881004611' , function (error, response, body) {
fs.writeFile('./log2.json', body, function (err) {

});
});
