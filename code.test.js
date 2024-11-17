
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');



var graph = []
var expected = false; 
assert(hasCycle(graph) === expected); // Empty graph

var graph = [[]];
var expected = false;
assert(hasCycle(graph) === expected);
// I wrote this one

var graph = [
    [1, 2],
    [],
    [3],
    [0]
];
var expected = true;
assert(hasCycle(graph) == expected);


var graph = [
    [1, 2],
    [],
    [3],
    [1]
];
var expected = false;
assert(hasCycle(graph) == expected);


var graph = [
    [1, 3],
    [2, 3],
    [3],
    [4],
    []
];
var expected = false;
assert(hasCycle(graph) == expected);


//This is the example from the class notes
var graph = [
  [1, 2, 3],       //node A
  [2, 4, 5],       //node B
  [0, 4],          //node C
  [2],             //node D
  [3, 6],          //node E
  [7],             //node F
  [4, 5],          //node G
  [6]              //node H
];
var expected = true;
assert(hasCycle(graph) == expected);


//This graph example is from https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_shortest_paths.htm
var graph = [
  [1, 2],
  [3, 4],
  [1, 6],
  [2, 4, 6],
  [5, 6, 7],
  [8, 4],
  [7, 2],
  [5, 3],
  []
];
var expected = true;
assert(hasCycle(graph) == expected);

console.log("All Tests Passed!"); 
