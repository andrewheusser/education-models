
angular.module('irtApp', ['chart.js','ngMaterial'])
    .config(function (ChartJsProvider) {
        ChartJsProvider.setOptions({
            animation: true,
            responsive: true,
            datasetStrokeWidth: 1,
            barShowStroke: true,
            barStrokeWidth: 1,
            strokeColor: 'rgba(116,150,161,1)'
        });
    });
