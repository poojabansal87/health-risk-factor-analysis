
// @TODO: YOUR CODE HERE!

// When the browser window is resized, makeResponsive() is called.
d3.select(window).on("resize", makeResponsive);

// When the   browser loads, makeResponsive() is called.
makeResponsive();

// The code for the chart is wrapped inside a function that
// automatically resizes the chart
function makeResponsive() {
     
    // if the SVG area isn't empty when the browser loads,
    // remove it and replace it with a resized version of the chart
    var svgArea = d3.select("#scatter").select("svg");

    // clear svg is not empty
    if (!svgArea.empty()) {
        svgArea.remove();
    }
    // Define SVG area dimensions
    var svgWidth = 800;
    var svgHeight = 500;

    // Define the chart's margins as an object
    var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
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

    d3.csv("./assets/data/data.csv").then(function(healthRiskData) {
       
        // Format the data
        healthRiskData.forEach(function(data) {
            data.poverty = +data.poverty;
            data.povertyMoe = +data.povertyMoe;
            data.healthcare = +data.healthcare;
            data.healthcareLow = +data.healthcareLow;
            data.healthcareHigh = +data.healthcareHigh;
        });
        // console.log(healthRiskData);

        // create scales
        var xScale = d3.scaleLinear()
        .domain(d3.extent(healthRiskData, d => d.poverty))
        .range([5, chartWidth]);

        console.log()
        var yScale = d3.scaleLinear()
            .domain([0, d3.max(healthRiskData, d => d.healthcare)])
            .range([chartHeight, 0]);

        // create axes
        var xAxis = d3.axisBottom(xScale).ticks(10);
        var yAxis = d3.axisLeft(yScale).ticks(10);

        // append axes
        chartGroup.append("g")
            .attr("transform", `translate(0, ${chartHeight})`) //without this line the x-axis was forming on top
            .call(xAxis);

        chartGroup.append("g")
            .call(yAxis);

        // append circles to data points
        var circlesGroup = chartGroup.selectAll("circle")
        .data(healthRiskData)
        .enter()
        .append("circle")
        .attr("cx", (d, i) => xScale(d.poverty))
        .attr("cy", d => yScale(d.healthcare))
        .attr("r", "10")
        .attr("class","stateCircle");

        // chartGroup.append("text")
        // .data(healthRiskData)
        //                   .attr("x", (d, i) => xScale(d.poverty))
        //                   .attr("y", d => yScale(d.healthcare))
        //                   .attr("dx",10)
        //                   .text("A")
        //                   .style("color","white");
         
        //Append tooltip div
        var toolTip = d3.select("#scatter").append("div")
        .attr("class", "d3-tip");

        //Create "mouseover" event listener to display tooltip
        circlesGroup.on("mouseover", function(d, i) {
            toolTip.style("display", "block");
            toolTip.html(`${d.state}</br><strong>Healthcare: ${d.healthcare}%</strong></br>
            Poverty: <strong>${d.poverty}%</strong>`)
            .style("left", d3.event.pageX + "px")
            .style("top", d3.event.pageY + "px");
        })

        //Create "mouseout" event listener to hide tooltip
        .on("mouseout", function() {
        toolTip.style("display", "none");
        });
    });

}


