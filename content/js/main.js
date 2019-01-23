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


function filterOutInvalidRows(rows)
{
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

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", areaWidth)
        .attr("height", areaHeight);
    
    var y = d3.scaleLinear()
    .domain([0,largest(rows,"POPULATION")]) // largest population
    .range([0,areaWidth]);

    var rect = svg.selectAll("rect")
        .data(rows);
    rect.enter()
        .append("rect")
            .attr("x", 10)
            .attr("y",function(d,i){
                return (i * (barWidth + barSpacing)) + 30;
            })
            .attr("width",function(d){
                return y(d.POPULATION);
            })
            .attr("height",barWidth)
            .attr("fill","grey");
    
    /*var circles = svg.selectAll("circle")
        .data(filtered_rows);

    circles.enter()
        .append("circle")
            .attr("cx", function(d, i){
                console.log(d);
                return ((i * 50) + 25);
            })
            .attr("cy", function(d, i){
                return ((i * 50) + 25);
            })
            .attr("r", function(d){
                return d["TOTAL REVENUE"]/totalRevenueAverage * 25;
            })
            .attr("stroke","black")
	          .attr("fill", "white")

    var text = svg.selectAll('text')
        .data(filtered_rows)
        .enter()
        .append('text')
          .attr("x", function(d, i){
              return (i * 50) + 25;
          })
          .attr("y", function(d, i){
              return ((i * 50) + 25);
          })
          .text( function (d) {
                     return d.MUNICIPALITY;
                   })
                   .attr("font-family", "sans-serif")
                   .attr("font-size", "10px")
                   .attr("fill", "red")
                   .attr("text-anchor", "middle")*/

}).catch(function(error){
    console.log(error);
})
