(function () {
'use strict';

angular.module("directiveApp",[])
.controller('CustomerController',CustomerController)
//.controller ('IgorController', IgorController)
.directive('myCustomer',myCustomer);
CustomerController.$inject = ['$scope'];
function CustomerController($scope){
  $scope.naomi ={
    name:'naomi',
    address:'6171 winterberry'
  };
  $scope.igor ={
    name:'Igor',
    address:'6171 winterberry'
  };
  $scope.foo = {name: "Umur"};
   $scope.bar = "qwe";
}

/*
function IgorController($scope){
  $scope.customer ={
    name:'Igor',
    address:'6171 winterberry'
  }
}
*/
function myCustomer(){

  return {
  template:'Name:{{customerInfo.name}} Address:{{customerInfo.address}}',
      // templateUrl:'my-customer.html'
      restrict:'AE',
      scope:{
        customerInfo:'=info'

      }
  };
}

})();
