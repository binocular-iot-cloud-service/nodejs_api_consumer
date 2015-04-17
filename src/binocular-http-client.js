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
	baseUrl = config.host;


/*
 *
 *	HTTP Options
 */
 var options = {
 	headers: {
 		"Content-type": "application/json"
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
exports.get = function(endpoint, successcb, errorcb) {
	doRequest('GET', endpoint, successcb, errorcb);
}

exports.post = function(endpoint, successcb, errorcb, body) {
	doRequest('POST', endpoint, successcb, errorcb, body);
}


/*
 *
 *	Functions
 */
var doRequest = function(method, endpoint, successcb, errorcb, body) {
	options.url = baseUrl+endpoint;
	options.method = method;
	if(body) {
		options.body = JSON.Parse(body);
	}
	request(options, function(error, response, body) {
		if(error) {
			errorcb(error);
		} else {
			successcb(body);
		}
	})
}