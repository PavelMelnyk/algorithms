'use strict';

let bubbleSort = require('./sorting/bubble-sort');
let fillWithTiles = require('./entry-test/fillWithTiles');
let UnionFind = require('./unionFind');

let algolib = {
    bubbleSort,
    fillWithTiles,
    UnionFind
}

module.exports = algolib;