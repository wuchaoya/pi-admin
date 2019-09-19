const fs = require('fs')

const cpuTempPath = '/sys/class/thermal/thermal_zone0/temp';

function getCputemp () {
	return fs.readFileSync(cpuTempPath).toString();
}

module.exports = getCputemp

