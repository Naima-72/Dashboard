Chart.defaults.global.defaultFontColor = '#ffffff'

var lineGraph = document.getElementById('linechart').getContext('2d');

var myLineChart = new Chart(lineGraph, {
    type: 'line',
    data: {
        labels: ['G force 20', 'FG force 40', 'G force 60', 'G force 80', 'G force 100', 'G force 120', 'G force 140'],
        datasets: [{
            label: 'G force',
            
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
     options: {


     }
});

var circle = document.getElementById('circlegraph').getContext('2d');
var pieChart = new Chart(circle, {
    type: 'pie',
    data: { 
        labels:['Food', 'Drinks', 'supplies'],     
        datasets: [{
            backgroundColor: ['rgb(255, 99, 132)','rgb(120, 99, 132)','rgb(200, 99, 132)'],
            data: [1,2,3]
        }]
    },
    options: {

    }

});

var barChart = document.getElementById('bar').getContext('2d');
var barChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['Hydroxe,', 'C02', 'Cardoxen'],
        datasets: [{
            label: 'Fuel',
            backgroundColor: [ '#dcedc1', '#5a324b', '#62b7e5'],
            data: [5,6,3,0]
        }]

    },
    options: {

    }
});


