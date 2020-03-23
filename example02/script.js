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


// merge cells in first table in second row
redips.merge1 = function () {
	// mark cells for merging (cells should be marked in a sequence)
	REDIPS.table.mark(true, 'table1', 1, 1);
	REDIPS.table.mark(true, 'table1', 1, 2);
	REDIPS.table.mark(true, 'table1', 1, 3);
	// merge cells:
	// 'h' - horizontally
	// true - clear mark after merging
	// 'table1' - table id
	REDIPS.table.merge('h', true, 'table1');
};


// function splits cell with defined id
redips.split1 = function () {
	// first mark cell with id="c1"
	REDIPS.table.mark(true, 'c1');
	// and then split marked cell in table2
	REDIPS.table.split('v', 'table2');
};
