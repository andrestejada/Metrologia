 // Load the Visualization API and the corechart package.
 google.charts.load('current', {'packages':['corechart']});

 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(drawChart);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function drawChart() {

   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows([
     ['Mushrooms', 3],
     ['Onions', 1],
     ['Olives', 1],
     ['Zucchini', 1],
     ['Pepperoni', 2]
   ]);

   // Set chart options
   var options = {'title':'How Much Pizza I Ate Last Night',
                  'width':400,
                  'height':300};

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
   chart.draw(data, options);
 }


 //INTERVALS


 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart2);

 function drawChart2() {
   var data = new google.visualization.DataTable();
   data.addColumn('number', 'x');
   data.addColumn('number', 'values');
   data.addColumn({id:'i0', type:'number', role:'interval'});
   data.addColumn({id:'i1', type:'number', role:'interval'});
   data.addColumn({id:'i2', type:'number', role:'interval'});
   data.addColumn({id:'i2', type:'number', role:'interval'});
   data.addColumn({id:'i2', type:'number', role:'interval'});
   data.addColumn({id:'i2', type:'number', role:'interval'});

   data.addRows([
       [1, 100, 90, 110, 85, 96, 104, 120],
       [2, 120, 95, 130, 90, 113, 124, 140],
       [3, 130, 105, 140, 100, 117, 133, 139],
       [4, 90, 85, 95, 85, 88, 92, 95],
       [5, 70, 74, 63, 67, 69, 70, 72],
       [6, 30, 39, 22, 21, 28, 34, 40],
       [7, 80, 77, 83, 70, 77, 85, 90],
       [8, 100, 90, 110, 85, 95, 102, 110]]);

   // The intervals data as narrow lines (useful for showing raw source data)
   var options_bars = {
    title: 'Bars, default',
    curveType: 'function',
    series: [{'color': '#D9544C'}],
    intervals: { style: 'bars' },
    legend: 'none',
};

   var chart_lines = new google.visualization.LineChart(document.getElementById('chart_lines'));
   chart_lines.draw(data, options_bars);
 }