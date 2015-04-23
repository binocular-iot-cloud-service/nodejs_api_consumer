/*
 *
 *	Dependencies
 */
var request = require('request'),
	config = require('./../config');


/*
 *
 *	User credentials & local variables
 */
var	API_KEY = config.API_KEY,
	CLIENT_SECRET = config.CLIENT_SECRET,
	baseUrl = config.host,
	apiKeyQueryParam = "?api_key="+API_KEY;


/*
 *
 *	HTTP Options
 */
 var options = {
 	headers: {
 		'Content-Type': 'application/json'
 	},
 	'auth': {
	    'user': API_KEY,
	    'pass': CLIENT_SECRET,
	    'sendImmediately': true
  	}
 }


/*
 *
 * Interface
 */
exports.get = function(endpoint, callback) {
	doRequest('GET', endpoint, callback);
}

exports.post = function(endpoint, body, callback) {
	try {
		body = JSON.stringify(body);
	} catch(e) {
		console.log("invalid body");
	}
	
	doRequest('POST', endpoint, callback, body);
}


/*
 *
 *	Functions
 */
var doRequest = function(method, endpoint, callback, body) {
	options.url = baseUrl+endpoint+apiKeyQueryParam;
	options.method = method;

	if(body) {
		options.body = body;
	}
	request(options, function(error, response, body) {
		if(error) {
			try {
				callback(error, body);
			} catch (e) {
				console.log("Provide a valid callback");
			}
		} else {
			body = JSON.parse(body);
			try {
				callback(null, body);
			} catch (e) {
				console.log("Provide a valid callback");
			}
		}
	})
}