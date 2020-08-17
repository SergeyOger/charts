var ctx = document.getElementById('readiness-template').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March'],
        datasets: [{
            label: 'Readiness, % \n\r' +  getLableValue(),
            fill: false,
            backgroundColor: 'rgb(83, 85, 84)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: true,
            align: 'center',
            labels: {
                fontColor: 'rgb(246, 244, 246)',
                boxWidth: 0,
                fontSize: 20
            }
        },

        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            }
        },
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }]
        }
    }
});

function  getLableValue() {
    return 50
};