const os = require('os');
function getLocalIP() {
	let map = [];
	let ifaces = os.networkInterfaces();
	console.log(ifaces);
	for (let dev in ifaces) {
		if (dev.indexOf('eth0') != -1) {
			let tokens = dev.split(':');
			let dev2 = null;
			if (tokens.length == 2) {
				dev2 = 'eth1:' + tokens[1];
			} else if (tokens.length == 1) {
				dev2 = 'eth1';
			}
			if (null == ifaces[dev2]) {
				continue;
			}
			// 找到eth0和eth1分别的ip
			let ip = null, ip2 = null;
			ifaces[dev].forEach(function(details) {
				if (details.family == 'IPv4') {
					ip = details.address;
				}
			});
			ifaces[dev2].forEach(function(details) {
				if (details.family == 'IPv4') {
					ip2 = details.address;
				}
			});
			if (null == ip || null == ip2) {
				continue;
			}
			// 将记录添加到map中去
			if (ip.indexOf('10.') == 0 ||
				ip.indexOf('172.') == 0 ||
				ip.indexOf('192.') == 0) {
				map.push({"intranet_ip" : ip, "internet_ip" : ip2});
			} else {
				map.push({"intranet_ip" : ip2, "internet_ip" : ip});
			}
		}
	}
	return map;
}

module.exports = getLocalIP
