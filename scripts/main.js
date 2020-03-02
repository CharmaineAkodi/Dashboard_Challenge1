google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Used', 2],
    ['Remaining', 2],
  ]);

  var options = {
    title: 'Fuel',
    pieHole: 0.38,
    colors:['#DCEDF9','#005288']
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }