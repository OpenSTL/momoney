//Simple d3.js barchart example to illustrate d3 selections

//other good related tutorials
//http://www.recursion.org/d3-for-mere-mortals/
//http://mbostock.github.com/d3/tutorial/bar-1.html


var w = 850
var h = 400
var bars = function(data)
{

    max = d3.max(data, function(d) 
    {
        return d.value
    })

    //nice breakdown of d3 scales
    //http://www.jeromecukier.net/blog/2011/08/11/d3-scales-and-color/
    y = d3.scale.linear()
        .domain([0, max])
        .range([0, h])

    x = d3.scale.ordinal()
        .domain(d3.range(data.length))
        .rangeBands([0, w], .2)


    var vis = d3.select("#barchart")
    console.log("vis", vis)
    
    //a good written tutorial of d3 selections coming from protovis
    //http://www.jeromecukier.net/blog/2011/08/09/d3-adding-stuff-and-oh-understanding-selections/
    var bars = vis.selectAll("rect.bar")
        .data(data)

    //update
    bars
        .attr("fill", "#0a0")
        .attr("stroke", "#050")

    //enter
    bars.enter()
        .append("svg:rect")
        .attr("class", "bar")
        .attr("fill", "#800")
        .attr("stroke", "#800")


    //exit 
    bars.exit()
        .remove()


    //apply to everything (enter and update)
    bars
        .attr("stroke-width", 4)
        .attr("height", function(d,i) 
        {
            return y(d.value);
        })
        .attr("width", x.rangeBand())
        .attr("transform", function(d,i) {
            return "translate(" + [x(i), h - y(d.value)] + ")"
        })

}


function init()
{

    //setup the svg
    var svg = d3.select("#svg")
        .attr("width", w+100)
        .attr("height", h+100)
    console.log("svg", svg)
    svg.append("svg:rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("stroke", "#000")
        .attr("fill", "none")

    svg.append("svg:g")
        .attr("id", "barchart")
        .attr("transform", "translate(50,50)")
    
}