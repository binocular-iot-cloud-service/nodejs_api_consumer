[//]: # (title: Activate a device)
[//]: # (description: Quick guide to active a device and push some data using the Binocular API through the nodejs SDK)
[//]: # (env: nodejs)

# Active device and push data
In this guide we will show you, in a few steps, how to active a device and push some data using the Binocular Node.js API wrapper.

**Prerequisites**  
* A Binocular account created. If not, visit the registration page(https://developers.binocular.se/#/register) and create a new account.
* A device type created.

### 1. Instanciate binocular client
```javascript
var BinocularApi = require('binocular-api'); 

var apikey = "YOUR API KEY",
    clientsecret = "YOUR CLIENT SECRET";

var binocular = new BinocularApi(apikey, clientsecret);
```

### 2. Activate the device
You can active the device by simply running the code below. The activations is only required to be ran once.
```javascript
binocular.activateDevice("DEVICE TYPE ID", function(err, activatedDevice) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(activatedDevice); 
    }
});
```

### 3. Push a data entry
Now, when the device is actived, it is able to push data to the cloud.
```javascript
var data = {
    temperature: 21
};
binocular.sendData("DEVICE ID", data, function(err, dataEntry) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(dataEntry); 
    }
});
```

### Full example
```javascript
var BinocularApi = require('binocular-api'); 

var apikey = "YOUR API KEY",
    clientsecret = "YOUR CLIENT SECRET",
    devicetypeId = "YOUR DEVICE TYPE ID",
    deviceId;

var binocular = new BinocularApi(apikey, clientsecret);

activeDevice(devicetypeId)
    .then(function(device) {
        var deviceId = device._id;
        var data = {
            temperature: 21
        };
        
        return pushData(deviceId, data);
    })
    .then(function(){
        console.log("Success fully activated device and pushed a data entry.");
    })
    .catch(function(err) {
        console.log("Got some error on the way", err);
    })

function activateDevice(devicetypeId) {
    return new Promise(function(resolve, reject) {
        binocular.activateDevice(devicetypeId, function(err, activatedDevice) { 
            if(err) {
                return reject(err);
            }
            resolve(activatedDevice);
        });
    })
}

function pushData(deviceId, data) {
    return new Promise(function(resolve, reject){
        binocular.sendData(deviceId, data, function(err, dataEntry) { 
            if(err) {
                 return reject(err);
            }
            resolve(dataEntry);
        });
    });
}
``` 
