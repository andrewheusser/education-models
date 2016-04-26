// var createLogisticModel = function(a,b,c,thetas){
//   var params = thetas.map(function(theta){
//     return c + ((1-c) / (1 + Math.exp(-a*(theta-b))))
//   });
//   return params
// };
//
// var a = 1;
// var b = 0;
// var c = .25;
// var thetas = [-3,0,3];
//
// console.log(createLogisticModel(a,b,c,thetas))
var $ctrl = {};

$ctrl.a = 1;
$ctrl.b = 0;
$ctrl.c = .25;
$ctrl.thetas = linspace(-3,3,100);

$ctrl.data = createLogisticModel($ctrl.a,$ctrl.b,$ctrl.c,$ctrl.thetas)

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
