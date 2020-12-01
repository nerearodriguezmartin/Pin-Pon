// Load the Visualization API and the corechart package.
google.charts.load("current", {packages:["corechart"]});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(dibujaGrafico);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function dibujaGrafico() {

  // Create the data table.
 /* var data = google.visualization.arrayToDataTable([
    ["Partido", "Votos", { role: "style" } ],
    ["PSOE", 120, "#FF1D1D"],
    ['PP', 89, '#73B5C8'],
    ['Vox', 52, '#4CC04D'],
    ['UP', 35, '#752ADD'],
    ['ERC', 13, '#FFFD16'],
    ['Cs', 10, '#F87F02'],
    ['OTROS', 31, '#A4A4A4'],
    ['SIN ASIGNAR', 0, '#EFEFEF']

]);*/
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Partido');
  data.addColumn('number', 'Diputados');

  data.addRows([
    ['PSOE', 120],
    ['PP', 89],
    ['Vox', 52],
    ['UP', 35],
    ['ERC', 13],
    ['Cs', 10],
    ['OTROS', 31],
    ['SIN ASIGNAR', 0]


  ]);

  // Set chart options
  var options = {'title':'ELECCIONES GENERALES 2019 (Diputados)',
                 'width':800,
                 'height':800,
                 'is3D': true,
                 'slices': {
                  0: { color: "#FF1D1D" },
                  1: { color: '#73B5C8'},
                  2: { color: '#4CC04D'},
                  3: { color: '#752ADD'},
                  4: { color: '#FFFD16'},
                  5: { color: '#F87F02'},
                  6: { color: '#A4A4A4'},
                  7: { color: '#EFEFEF'}
                 }

                 };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('mi_grafico'));
  chart.draw(data, options);
}