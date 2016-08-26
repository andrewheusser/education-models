angular.module('irtApp')
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .dark();
})
.component('bkt', {
  templateUrl: 'components/BKT/BKT.html',
  controller: function ($timeout,$scope) {
    var $ctrl = this;

    var parameters = {
      pL0 : .4,
      pT : .2,
      pG : .14,
      pS : .05
    }

    $scope.parameters = parameters;

    var responses = [0,1,0,1,0,1,null,1,1,1];
    $scope.responses = responses;

    $ctrl.data = [runBKT(responses,$scope.parameters)];
    $ctrl.labels = [1,2,3,4,5,6,7,8,9,10];
    $ctrl.options = {
      scaleOverride : true,
      scaleSteps : 10,
      scaleStepWidth : .1,
      scaleStartValue : 0,
    }

    $scope.$watchCollection(() => [parameters.pL0,parameters.pT,parameters.pG,parameters.pS], function (newVal) {
      console.log('parameters: ' + newVal);
      parameters.pL0 = newVal[0];
      parameters.pT = newVal[1];
      parameters.pG = newVal[2];
      parameters.pS = newVal[3];
      $ctrl.data = [runBKT(responses,parameters)];
    });

    $scope.toggleResponse = function(index){
      console.log($scope.responses[index])
      if($scope.responses[index]===1){
        $scope.responses[index] = null;
      } else if ($scope.responses[index]===null) {
        $scope.responses[index] = 0;
      } else if ($scope.responses[index]===0) {
        $scope.responses[index] = 1;
      }
      $ctrl.data = [runBKT(responses,parameters)];
    };

    function runBKT(responses,parameters){
      var pK = [];
      var pL0 = parameters.pL0;
      var pT = parameters.pT;
      var pG = parameters.pG;
      var pS = parameters.pS;

      for(var itrial = 0; itrial<responses.length; itrial++){
        if(itrial===0){
          if(responses[itrial]===0){
            pK.push((pL0*pS) / ((pL0*pS) + (1-pL0)*(1-pG)));
          } else if (responses[itrial]===1) {
            pK.push((pL0*(1-pS)) / ((pL0*(1-pS)) + ((1-pL0)*pG)));
          } else {
            pK.push(pL0)
          };
        } else {
          pL_updated = pK[itrial-1] + (1-pK[itrial-1])*pT;
          if(responses[itrial]===0){
            pK.push((pL_updated*(pS)) / ((pL_updated*(pS)) + ((1-pL_updated)*(1-pG))));
          } else if (responses[itrial]===1){
            pK.push((pL_updated*(1-pS)) / ((pL_updated*(1-pS)) + ((1-pL_updated)*pG)));
          } else {
            pK.push(pL_updated)
          }
        }
      }
      return pK
    };
  }
});
