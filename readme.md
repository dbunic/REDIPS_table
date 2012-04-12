REDIPS.table 1.0.0
============

## What's REDIPS.table?

REDIPS.table is a JavaScript library which enables dynamically merging and splitting table cells. It is possible to activate onmousedown event listeners on TD element to interactively mark cell with mouse button.

## Features

* merge / split table cells
* add / remove table row
* add / remove table column

## Public methods

* REDIPS.table.onmousedown() - activate onmousedown event listener on table cells
* REDIPS.table.mark() - select / deselect table cell
* REDIPS.table.merge() - merge horizontally / vertically marked table cells in a sequence
* REDIPS.table.split() - split horizontally / vertically marked table cells (only cells with colspan / rowspan greater then 1)
* REDIPS.table.row() - add / remove table row
* REDIPS.table.column() - add / remove table column
* REDIPS.table.cell_index() - display cell index (useful for demo / debugging)

## Documentation

A reference documentation with a list of public properties and methods contained in REDIPS.drag library.

* [http://www.redips.net/javascript/in_progress/](in progress)

## Demo

Live demo shows REDIPS.table library in action: 

* [http://www.redips.net/javascript/in_progress/](in_progress)

