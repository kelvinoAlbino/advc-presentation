var bigBangLearning = document.getElementById('bigBangLearning');

let lineChart = new Chart( bigBangLearning, {
	type: "line",
    responsive:true,
    maintainAspectRatio: false,
	options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                gridLines: { display: false },
                ticks: {
                    display: false //this will remove only the label
                }
            }],
            xAxes: [{
                gridLines: { display: false },
                ticks: {
                    display: false //this will remove only the label
                }
            }],
        }
    },
	data: {
       	labels: ['', '', '', '', '', ''],
        datasets: [{
            //label: '# of Votes',
            data: [0, 6, 1, 3.25, 3.25, 2.75],
            borderWidth: 2,
            fill: false,
            borderColor:"#9ecd7d"
        }]
    },
});

var kaizen = document.getElementById('kaizen');

let kaizenGraph = new Chart( kaizen, {
	type: "line",
	options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                	stacked: true,
                	min: 0,
                	max: 6,
                    display: false //this will remove only the label
                }
            }],
            xAxes: [{
                gridLines: { display: false },
                ticks: {
                    display: false //this will remove only the label
                }
            }],
        }
    },
	data: {
       	labels: ['', '', '', '', '', '', '', '', '', '', ],
        datasets: [{
        	lineTension: 0,
            label: '# of Votes',
            data: [ , 1, 2, 2, 3, 3, 4, 4, 5, ],
            borderWidth: 2,
            fill: false,
            borderColor:"#9ecd7d"
        }]
    },
});

var traditional = document.getElementById('traditional');

let traditionalGraph = new Chart( traditional, {
	type: "line",
	options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                gridLines: { display: false },
                ticks: {
                	stacked: true,
                	min: 0,
                	max: 6,
                    display: false //this will remove only the label
                }
            }],
            xAxes: [{
                gridLines: { display: false },
                ticks: {
                    display: false //this will remove only the label
                }
            }],
        }
    },
	data: {
       	labels: ['', '', '', '', '', '', '', '', '' ],
        datasets: [{
        	lineTension: 0,
            label: '# of Votes',
            data: [ , 1, 1, 1, 3, 3, 3, 5],
            borderWidth: 2,
            fill: false,
            borderColor:"#9ecd7d"
        }]
    },
});