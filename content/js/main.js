/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.7 - Loading external data
*/

function largest(rows, field){
    var highest = 0;
    rows.forEach(function(row){
        if (row[field] > highest){
                highest = row[field];
        }
    });
    return highest;
};


function filterOutInvalidRows(rows) {
    var filtered_rows = rows.filter(function(row){
        if (isNaN(row["BUDGET YEAR"])){ return false; }
        if (isNaN(row["TOTAL REVENUE"])){ return false; }
        if (isNaN(row["TOTAL EXPENDITURES"])){ return false; }
        return true;
    });
    return filtered_rows;
}

function averageRevenue(rows){
    var totalRevenueSum = 0;
    rows.forEach(function(row){
      totalRevenueSum += row["TOTAL REVENUE"];
    });
    var totalRevenueAverage = totalRevenueSum / rows.length;
    return totalRevenueAverage;
}

var barWidth = 25;
var barSpacing = 25;


// Pull in D3 CSV data
d3.csv("../data/full.csv").then(function(rows){
    rows.forEach(function(row){
        // Convert strings to integers
        row["POPULATION"] = parseInt(row["POPULATION"]);
        row["TOTAL REVENUE"] = parseInt(row["TOTAL REVENUE"]);
        row["TOTAL EXPENDITURES"] = parseInt(row["TOTAL EXPENDITURES"]);
        row["POLICE"] = parseInt(row["POLICE"]);
        row["BUDGET YEAR"] = parseInt(row["BUDGET YEAR"]);
    });

    var filtered_rows = filterOutInvalidRows(rows);

    var totalRevenueAverage = averageRevenue(filtered_rows);

    var areaHeight = rows.length * (barWidth + barSpacing);
    var areaWidth = 1400;
    
        
    // scaling the data to the svg area
    var y = d3.scaleLinear()
    .domain([0,largest(rows,"POPULATION")]) // largest population
    .range([0,areaWidth]);

    // set SVG height an width
    var svg = d3.select("#chart-area").append("svg")
        .attr("width", areaWidth)
        .attr("height", areaHeight);
    
    // brings in municipality name and displays it on the screen
    var text = svg.selectAll("text")
        .data(rows);
    text.enter()
        .append("text")
            .attr("x", 10)
            .attr("y",function(d,i){
                return (i * (barWidth + barSpacing)) + 30;
            })
            .text(function(d){
                return d.MUNICIPALITY;
            })
            .attr("font-size",21)
            .attr("fill","orange")
            .attr("class","text");
    
    console.log("this works");
    
    // brings in population data and displays it as horizontal bars
    var rect = svg.selectAll("rect")
        .data(rows);
    rect.enter()
        .append("rect")
            .attr("x", 10)
            .attr("y",function(d,i){
                return (i * (barWidth + barSpacing)) + 35;
            })
            .attr("width",function(d){
                return y(d.POPULATION);
            })
            .attr("height",barWidth)
            .attr("fill","grey");

}).catch(function(error){
    console.log(error);
})
