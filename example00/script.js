/*jslint white: true, browser: true, undef: true, nomen: true, eqeqeq: true, plusplus: false, bitwise: true, regexp: true, strict: true, newcap: true, immed: true, maxerr: 14 */
/*global window: false, REDIPS: true */

/* enable strict mode */
"use strict";

// create redips container
var redips = {};


// REDIPS.table initialization
redips.init = function () {
	// define reference to the REDIPS.table object
	var rt = REDIPS.table;
	// activate onmousedown event listener on cells within table with id="mainTable"
	rt.onmousedown('mainTable', true);
	// show cellIndex (it is nice for debugging)
	rt.cell_index(true);
	// define background color for marked cell
	rt.color.cell = '#9BB3DA';
};


// function merges table cells
redips.merge = function () {
	// first merge cells horizontally and leave cells marked
	REDIPS.table.merge('h', false);
	// and then merge cells vertically and clear cells (second parameter is true by default)
	REDIPS.table.merge('v');
};


// function splits table cells if colspan/rowspan is greater then 1
// mode is 'h' or 'v' (cells should be marked before)
redips.split = function (mode) {
	REDIPS.table.split(mode);
};


// insert/delete table row
redips.row = function (type) {
	REDIPS.table.row('mainTable', type);
};


// insert/delete table column
redips.column = function (type) {
	REDIPS.table.column('mainTable', type);
};


// add onload event listener
if (window.addEventListener) {
	window.addEventListener('load', redips.init, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', redips.init);
}