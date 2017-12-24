// This is a simple module for Node.js made with the included Math functions of Node.js. Usage is simple and an example has been included
module.exports = (min, max, nums) => {
	max += 1;
	var arr1 = [];
	var loopfor = 0;
	if (nums === undefined) {
		loopfor = 1;
	} else {
		loopfor = nums;
	}
	for (var i = 0; i < loopfor; i++) {
		var randomnumtmp = Math.floor((Math.random() * (max - min)) + min);
		arr1.push(randomnumtmp);
	}
	return arr1;
};
