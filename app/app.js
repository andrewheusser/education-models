
angular.module('irtApp', ['chart.js','ngMaterial'])
    .config(function (ChartJsProvider) {
        ChartJsProvider.setOptions({
            animation: true,
            responsive: true,
            datasetStrokeWidth: 1,
            pointDot: false,
            pointDotRadius: 1,
            pointDotStrokeWidth: 0,
            barShowStroke: true,
            barStrokeWidth: 1,
            strokeColor: 'rgba(116,150,161,1)'
        });
    });
