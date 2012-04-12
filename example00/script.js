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
	// define reference to the REDIPS.drag and REDIPS.table object
	rt = REDIPS.table;
	// show cellIndex
	//rt.show_index = true;
	// initialize REDIPS.table object (mainTable is id of table)
	rt.onmousedown('black', true, 'classname');
	// selected cell background color
	rt.color.cell = 'lime';
	// rt.color.cell = false;
//	rt.mark(true, "mainTable", 1, 1);
//	rt.mark(true, "mainTable", 1, 2);
	rt.mark(true, document.getElementById('tst1'));
	rt.mark(true, document.getElementById('tst2'));
//rt.cell_index(true);
};


// function merges table cells
merge = function (mode) {
	rt.merge(mode);
}

// function splits table cells if colspan/rowspan is greater then 1
split = function (mode) {
	rt.split(mode);
}

// insert/delete table row
row = function (type) {
	REDIPS.table.row('mainTable', type);
	rt.cell_index(true);
};


// insert/delete table column
column = function (type) {
	REDIPS.table.column('mainTable', type);
	rt.cell_index(false);
};


// add onload event listener
if (window.addEventListener) {
	window.addEventListener('load', redips_init, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', redips_init);
}