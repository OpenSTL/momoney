Title: Total Revenue 2

Overview of revenue brought in by municipalities

<!-- Bootstrap grid setup -->
<div class="container">
  <div class="row">
    <div id="chart-area"></div>
  </div>
<div>
    
<link rel="stylesheet" href="../css/momoney.css" />

<!-- External JS libraries -->
<script src="../js/d3.min.js"></script>
<!-- Custom JS -->
<script src="../js/filters.js"></script>
<script src="../js/graph.js"></script>
<script type="text/javascript">

var barWidth = 25;
var barSpacing = 20;


// Pull in D3 CSV data
d3.csv("../data/full.csv").then(function(rows){
    rows.forEach(function(row){
        // Convert strings to integers
        row["TOTAL REVENUE"] = parseInt(row["TOTAL REVENUE"]);
    });                                        

    var filtered_rows = filters.invalidRows(rows, ["TOTAL REVENUE"]);

    var areaHeight = filtered_rows.length * (barWidth + barSpacing);
    var areaWidth = 500;


    var municipalities = []
    var revenue = []

    filtered_rows.forEach(function(row){
        municipalities.push(row["MUNICIPALITY"]);
        revenue.push(row["TOTAL REVENUE"]);
    });

    graph.basic_bars(municipalities, revenue, barWidth, barSpacing, areaHeight, areaWidth);
}).catch(function(error){
    console.log(error);
})
</script>
  

