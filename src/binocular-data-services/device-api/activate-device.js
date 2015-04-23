/*
 *	Important!
 *	
 *	This endpoint should only be called once 
 *	and only if this is for a device producing data.
 */
exports.activateDevice = function(devicetypeId, callback) {
	var endpoint = ["/devicetypes", devicetypeId, "activate_device"].join('/');
	http.post(endpoint, {}, callback);
}