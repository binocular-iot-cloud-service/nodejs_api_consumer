[//]: # (title: Get started with node.js) 
[//]: # (description: Get started with node.js)
[//]: # (env: nodejs) 
### Get started

###### 1. Install binocular-api module
	
```
$ npm install binocular-api --save
```

###### 2. Require module and instaciate with credentials
	
```javascript
var BinocularApi = require('binocular-api'); 

var apikey = "YOUR API KEY",
    clientsecret = "YOUR CLIENT SECRET";

var binocular = new BinocularApi(apikey, clientsecret);
```

###### 3. Make api request

```javascript
binocular.getDevices(function(err, devices) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(devices); 
    }
});
```

###### Example

```javascript
var BinocularApi = require('binocular-api'); 

var apikey = "YOUR API KEY",
    clientsecret = "YOUR CLIENT SECRET";

var binocular = new BinocularApi(apikey, clientsecret); 

binocular.getDevices(function(err, devices) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(devices); 
    }
});