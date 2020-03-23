REDIPS.table 1.2.0
============

## What's REDIPS.table?

REDIPS.table is a JavaScript library which enables dynamic merging and splitting table cells.
It is possible to activate onMouseDown event listeners on TD element to interactively mark cells with mouse button.

## Features

* merge / split table cells
* add / remove table row
* add / remove table column
* enable / disable marking not empty table cells

## Public methods

* REDIPS.table.onMouseDown() - activate onMouseDown event listener on table cells
* REDIPS.table.mark() - select / deselect table cell
* REDIPS.table.merge() - merge horizontally / vertically marked table cells in a sequence
* REDIPS.table.split() - split horizontally / vertically marked table cells (only cells with colspan / rowspan greater than 1)
* REDIPS.table.row() - add / remove table row
* REDIPS.table.column() - add / remove table column
* REDIPS.table.cellIndex() - display cell index (useful for demo / debugging)
* REDIPS.table.cellIgnore() - remove onMouseDown even listener from table cell in case of active REDIPS.table.onMouseDown mode 

## Documentation

Reference documentation with list of public properties and methods contained in REDIPS.table library.

* [http://www.redips.net/javascript/redips-table-documentation/](http://www.redips.net/javascript/redips-table-documentation/)

## Demo

Live demo shows REDIPS.table library in action: 

* [http://www.redips.net/javascript/table-td-merge-split/](http://www.redips.net/javascript/table-td-merge-split/)

