/* eslint-env browser */
/* eslint
   semi: ["error", "always"],
   indent: [2, "tab"],
   no-tabs: 0,
   no-multiple-empty-lines: ["error", {"max": 2, "maxEOF": 1}],
   one-var: ["error", "always"] */
/* global REDIPS */

/* enable strict mode */
'use strict';

// create redips container
let redips = {};


// initialization
redips.init = function () {
	// define reference to the REDIPS.table object
	var rt = REDIPS.table;
	// activate onmousedown event listener on cells for tables with class="blue"
	rt.onMouseDown('blue', true, 'classname');
	// show cellIndex (it is nice for debugging)
	rt.cellIndex(true);
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
