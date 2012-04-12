/*jslint white: true, browser: true, undef: true, nomen: true, eqeqeq: true, plusplus: false, bitwise: true, regexp: true, strict: true, newcap: true, immed: true, maxerr: 14 */
/*global window: false, REDIPS: true */

/* enable strict mode */
"use strict";

// define functions
var redips_init,
	rt,
	merge,
	split,
	row,
	column;

// initialization
redips_init = function () {
	// define reference to the REDIPS.table object
	rt = REDIPS.table;
	// activate onmousedown event listener on cells within table with id="mainTable"
	rt.onmousedown('mainTable', true);
	// show cellIndex (it is nice for debugging)
	rt.cell_index(true);
	// define background color for marked cell
	rt.color.cell = '#9BB3DA';
};

// function merges table cells
merge = function (mode) {
	rt.merge(mode);
};

// function splits table cells if colspan/rowspan is greater then 1
split = function (mode) {
	rt.split(mode);
};

// insert/delete table row
row = function (type) {
	REDIPS.table.row('mainTable', type);
};

// insert/delete table column
column = function (type) {
	REDIPS.table.column('mainTable', type);
};

// add onload event listener
if (window.addEventListener) {
	window.addEventListener('load', redips_init, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', redips_init);
}