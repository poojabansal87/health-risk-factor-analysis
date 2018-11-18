
// Define SVG area dimensions
var svgWidth = 825;
var svgHeight = 500;

// Define the chart's margins as an object
var margin = {
top: 60,
right: 60,
bottom: 60,
left: 60
};

// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Select chart area, append SVG area to it, and set its dimensions
var svg = d3.select("#scatter")
.append("svg")
.attr("width", svgWidth)
.attr("height", svgHeight);

// Append a group area, then set its margins
var chartGroup = svg.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

// @TODO: YOUR CODE HERE!
// Load data from data.csv
d3.csv("./data/data.csv", function(error, healthRiskData) {
    if (error) return console.warn(error);
    
    // Format the data
    healthRiskData.forEach(function(data) {
        data.poverty = +data.poverty;
        data.povertyMoe = +data.povertyMoe;
        data.healthcare = +data.healthcare;
        data.healthcareLow = +data.healthcareLow;
        data.healthcareHigh = +data.healthcareHigh;
    });
    console.log(data.poverty);


  });
  