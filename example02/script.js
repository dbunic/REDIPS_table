/*jslint white: true, browser: true, undef: true, nomen: true, eqeqeq: true, plusplus: false, bitwise: true, regexp: true, strict: true, newcap: true, immed: true, maxerr: 14 */
/*global window: false, REDIPS: true */

/* enable strict mode */
"use strict";


// merge cells in first table in second row
function merge1() {
	// mark cells for merging (cells should be marked in a sequence)
	// background will not be set
	REDIPS.table.mark(true, 'table1', 1, 1);
	REDIPS.table.mark(true, 'table1', 1, 2);
	REDIPS.table.mark(true, 'table1', 1, 3);
	// merge cells:
	// 'h' - horizontally
	// true - clear mark after merging
	// 'table1' - table id
	REDIPS.table.merge('h', true, 'table1');
}


// function splits cell with defined id
function split1() {
	// first mark cell with id="c1"
	REDIPS.table.mark(true, 'c1');
	// and then split marked cell in table2
	REDIPS.table.split('v', 'table2');
}

