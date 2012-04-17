/*jslint white: true, browser: true, undef: true, nomen: true, eqeqeq: true, plusplus: false, bitwise: true, regexp: true, strict: true, newcap: true, immed: true, maxerr: 14 */
/*global window: false, REDIPS: true */

/* enable strict mode */
"use strict";

// create redips container
var redips = {};

// initialization
redips.init = function () {
	// define reference to the REDIPS.table object
	var rt = REDIPS.table;
	// activate onmousedown event listener on cells for tables with class="blue"
	rt.onmousedown('blue', true, 'classname');
	// show cellIndex (it is nice for debugging)
	rt.cell_index(true);
	// define background color for marked cell
	rt.color.cell = '#32568E';
};

// function merges table cells
redips.merge = function (mode) {
	REDIPS.table.merge(mode);
};

// function splits table cells if colspan/rowspan is greater then 1
redips.split = function (mode) {
	REDIPS.table.split(mode);
};

// add onload event listener
if (window.addEventListener) {
	window.addEventListener('load', redips.init, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', redips.init);
}