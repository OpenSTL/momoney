/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.7 - Loading external data
*/


d3.csv("data/budget.csv").then(function(data){
    data.forEach(function(d){
        d.POPULATION = +d.POPULATION
        d.BUDGETYEAR = +d.BUDGETYEAR
        d.TOTALREVENUE = +d.TOTALREVENUE
        d.TOTALEXPENDITURES = +d.TOTALEXPENDITURES
        d.POLICE = +d.POLICE;
    });
    
    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 1400)
        .attr("height", 1400);
    
    var circles = svg.selectAll("circle")
        .data(data);

    circles.enter()
        .append("circle")
            .attr("cx", function(d, i){
                console.log(d);
                return (i * 50) + 25;
            })
            .attr("cy", 25)
            .attr("r", function(d){
                return d.BUDGETYEAR * 2;
            })
    
}).catch(function(error){
    console.log(error);
})
