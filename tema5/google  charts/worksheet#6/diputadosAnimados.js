// Load the Visualization API and the corechart package.
google.charts.load("current", {packages:["corechart"]});

// Set a callback to run when the Google Visualization API is loaded.
/*google.charts.setOnLoadCallback(dibujaGrafico);*/

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function dibujaGrafico() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Partido');
  data.addColumn('number', 'Diputados');

  data.addRows([
    ['PSOE', Math.floor(Math.random() * (130 - 100)) + 100],
    ['PP', Math.floor(Math.random() * (100 - 50)) + 50],
    ['Vox', Math.floor(Math.random() * (80 - 30)) + 30],
    ['UP', Math.floor(Math.random() * (80 - 30)) + 30],
    ['ERC', Math.floor(Math.random() * (30 - 5)) + 5],
    ['Cs', Math.floor(Math.random() * (30 - 5)) + 5],
    ['OTROS', Math.floor(Math.random() * (50 - 10)) + 10],
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

function anima(){
    setTimeout(() =>
    {
        google.charts.setOnLoadCallback(dibujaGrafico);

        setTimeout(anima, 1);
    
    }, 10000);
}

window.onload = () =>
{
    google.charts.setOnLoadCallback(dibujaGrafico);
    anima();
}