# health-risk-factor-analysis
Health Risk Factor Analysis using D3

## Background

This project is about creating visualizations based on information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System. The data set used in this project is based on 2014 ACS 1-year estimates: [https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml](https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml)
The data set includes data on rates of income, obesity, poverty, etc. by state. MOE stands for "margin of error."

The visualiztions, created using D3, will help with analyzing the current trends shaping people's lives, as well as creating charts, graphs, and interactive elements.

## Key Features of the visualizations

* A scatter plot between two of the data variables `Healthcare vs. Poverty` is plotted.

* Using the D3 techniques, a scatter plot that represents each state with circle elements is created. This graphic is coded in the `app.js` file. 

* The data is pulled in from `data.csv` by using the `d3.csv` function. 

* Included state abbreviations in the circles.

* Created and situated axes and labels to the left and bottom of the chart.

* Added tooltips to circles and displayed each tooltip with the data that the user has selected. Thanks to the `d3-tip.js` plugin developed by [Justin Palmer](https://github.com/Caged).

* Note: You'll need to use `python -m http.server` to run the visualization. This will host the page at `localhost:8000` in your web browser.

