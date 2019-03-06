
graph = {
    maxLength: function maxLength(labels){
        max = 0;
        labels.forEach(function(label){
            if(label.length > max){
                max = label.length;
            }
        });
        return max;
    },
    basic_bars: function(labels, series, barWidth, barSpacing, areaHeight, areaWidth){
        var largestValue = Math.max.apply(null, series)
        var maxLabelLength = graph.maxLength(labels);
        var pixelsPerChar = 11; // Found by testing
        var labelSpace = maxLabelLength * pixelsPerChar;

        // scaling the data to the svg area
        var y = d3.scaleLinear()
            .domain([0,largestValue])
            .range([0,areaWidth-labelSpace]);

        // set SVG height and width
        var svg = d3.select("#chart-area").append("svg")
        .attr("width", areaWidth)
        .attr("height", areaHeight);

        // brings in municipality name and displays it on the screen
        var text = svg.selectAll("text").data(labels);
        text.enter()
            .append("text")
                .attr("x", 10)
                .attr("y",function(d,i){
                    return (i * (barWidth + barSpacing)) + 30;
                })
                .text(function(d){
                    return d;
                })
                .attr("font-size",21)
                .attr("fill","black");

        // brings in revenue data and displays it as horizontal bars
        var rect = svg.selectAll("rect").data(series);
        rect.enter()
            .append("rect")
                .attr("class","bar")
                .attr("x", labelSpace)
                .attr("y",function(d,i){
                    return (i * (barWidth + barSpacing)) + 10;
                })
                .attr("width",function(d){
                    return y((d));
                })
                .attr("height",barWidth)
                .attr("fill","steelblue");
    }
};
