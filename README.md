## Binocular API Wrapper

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
```


### API Documentation
##### Set up module
###### Install module
```
$ npm install binocular-api --save
```
###### Instanciate module with credentials

```javascript
var BinocularApi = require('binocular-api'); 

var apikey = "YOUR API KEY",
    clientsecret = "YOUR CLIENT SECRET";

var binocular = new BinocularApi(apikey, clientsecret); 
```

##### API
###### Activate Device
```javascript
activateDevice(deviceTypeId, callback)

binocular.activateDevice("deviceTypeId", function(err, activatedDevice) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(activatedDevice); 
    }
});
```
###### Get device flags

```javascript
getFlags(deviceId, callback)

binocular.getFlags("deviceId", function(err, flags) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(flags); 
    }
});
```
###### Set device flags

```javascript
setFlags(deviceId, flags, callback)

binocular.setFlags("deviceId", flags, function(err, updatedFlags) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(updatedFlags); 
    }
});
```

###### Send heartbeat
```javascript
sendHeartbeat(deviceId, callback)

binocular.sendHeartbeat("deviceId", function(err, device) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(device); 
    }
});
```
###### Send data

```javascript
sendData(deviceId, data, callback)

binocular.sendData("deviceId", data, function(err, dataEntry) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(dataEntry); 
    }
});
```
###### Get device

```javascript

getDevice(deviceId, callback)

binocular.getDevice("deviceId", function(err, device) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(device); 
    }
});
```

###### Get devices by device type

```javascript
getDevicesByDevicetype(devicetypeId, callback)

binocular.getDevice("devicetypeId", function(err, devices) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(devices); 
    }
});
```
###### Get multiple devices

```javascript
getDevices(callback)

binocular.getDevice(function(err, devices) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(devices); 
    }
});
```

###### Get device types

```javascript
getDeviceTypes(callback)

binocular.getDeviceTypes(function(err, devicetypes) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(devicetypes); 
    }
});
```
###### Get device data entry

```javascript
getDeviceDataEntry(entryId, callback)

binocular.getDeviceTypes("entryId", function(err, entry) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(entry); 
    }
});
```
###### Get devices data

```javascript
getDeviceData( deviceId | [deviceIds] [,options],  callback)

binocular.getDeviceData("deviceId", function(err, entries) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(entries); 
    }
});
```
Or use an array of device ids.

```javascript
binocular.getDeviceData(["deviceId1", "deviceId2"], function(err, entries) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(entries); 
    }
});
```

Options for filtering the result is also available

```javascript
var options={
    limit:10,
    timestamp:1431086691805,
    next:'dataEntryId'
}

binocular.getDeviceData("deviceId", options, function(err, entries) { 
    if(err) {
         console.log(err); 
    } else {
         console.log(entries); 
    }
});
```
