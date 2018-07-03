//process data
var yearArray = [];
asthma_dataset.forEach(function (data) {
    yearArray.push(data.Date);
});

var stateArray = [];
asthma_dataset.forEach(function (data) {
    stateArray.push(data.State);
});

var no2MeanArray = [];
asthma_dataset.forEach(function (data) {
    no2Mean.push(data['NO2 Mean']);
});

var so2MeanArray = [];
asthma_dataset.forEach(function (data) {
    so2Mean.push(data['SO2 Mean']);
});

var coMeanArray = [];
asthma_dataset.forEach(function (data) {
    coMeanArray.push(data['CO Mean']);
});


// draw plot
var trace1 = {
    x: [1, 2, 3],
    y: [1, 2, 3],
    type: 'scatter'
};

var data = trace1;

Plotly.newPlot('asthmaPlot', data);


var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers'
};

var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines'
};

var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers'
};

var data = [trace1, trace2, trace3];

var layout = {
    title: 'Line and Scatter Plot'
};

Plotly.newPlot('myDiv', data, layout);
