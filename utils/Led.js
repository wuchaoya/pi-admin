const five = require("johnny-five");

function led () {
	new five.Led.RGB({
		pins: {
			red: 6,
			green: 5,
			blue: 3
		}
	});
}

module.exports = led
