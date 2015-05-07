## Binocular API Wrapper

###Get started

1. Install binocular-api module

    $ npm install binocular-api --save

2. Require module and instaciate with credentials

    var BinocularApi = require('binocular-api'); 

    var apikey = "55285bd1018d767753bf0045",
        clientsecret = "asdfasdf";

    var binocular = new BinocularApi(apikey, clientsecret); 

3. Make api request

binocular.getDevices(function(err, devices) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(devices); 
    }
});
Example

var BinocularApi = require('binocular-api'); 

var apikey = "55285bd1018d767753bf0045",
    clientsecret = "asdfasdf";

var binocular = new BinocularApi(apikey, clientsecret); 

binocular.getDevices(function(err, devices) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(devices); 
    }
});