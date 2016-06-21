angular.module('irtApp')
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .dark();
    })
    .component('irtLogistic', {
        templateUrl: 'components/logistic/logistic.html',
        controller: function ($timeout,$scope) {
            var $ctrl = this;

            var parameters = {
              a : 1,
              b : 0,
              c : .25
            }

            $scope.parameters = parameters;

            $ctrl.thetas = linspace(-4,4,25);
            $ctrl.labels = $ctrl.thetas.map(function(theta){
              return theta % 1 === 0 ? theta : ''
            });
            $ctrl.data = [createLogisticModel(parameters.a,parameters.b,parameters.c,$ctrl.thetas)];
            console.log($ctrl.data)
            $ctrl.options = {
              scaleOverride : true,
              scaleSteps : 10,
              scaleStepWidth : .1,
              scaleStartValue : 0,
            }

            $scope.$watch(() => parameters.a, function (newVal) {
              console.log('parameters.a: ' + newVal);
              $ctrl.data = [createLogisticModel(parameters.a,parameters.b,parameters.c,$ctrl.thetas)];
            });

            $scope.$watch(() => parameters.b, function (newVal) {
              console.log('parameters.b: ' + newVal);
              $ctrl.data = [createLogisticModel(parameters.a,parameters.b,parameters.c,$ctrl.thetas)];
            });

            $scope.$watch(() => parameters.c, function (newVal) {
              console.log('parameters.c: ' + newVal);
              $ctrl.data = [createLogisticModel(parameters.a,parameters.b,parameters.c,$ctrl.thetas)];
            });


            function createLogisticModel(a,b,c,thetas){
              var params = thetas.map(function(theta){
                return c + ((1-c) / (1 + Math.exp(-a*(theta-b))))
              });
              return params
            };

            // borrowed function from numeric.js
            function linspace(a,b,n) {
              if(typeof n === "undefined") n = Math.max(Math.round(b-a)+1,1);
              if(n<2) { return n===1?[a]:[]; }
              var i,ret = Array(n);
              n--;
              for(i=n;i>=0;i--) { ret[i] = (i*b+(n-i)*a)/n; }
              return ret;
            };

    }
  });
