(function() {
    'use strict';

    angular.module('LunchCheck', [])
           .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
        $scope.input = "";
        $scope.message = "";
        $scope.msgClass = "";
        $scope.txtBxBorder = "";
        $scope.count="";
        $scope.check = function() {
          $scope.count=0;

            var array = $scope.input.split(',');
            for(var i=0; i<array.length; i++){
              if(array[i] !=''){
                $scope.count=$scope.count+1
              }
            }
                  console.log($scope.count);
            if(array[0] =="" || $scope.count <=0){
                $scope.message = "Please enter data first";
                $scope.msgClass="warn";
                 $scope.txtBxBorder = "txtBxBorderRed";
            }
            else if ($scope.count < 3) {
              $scope.message = "Enjoy";
             $scope.msgClass = "success";
             $scope.txtBxBorder = "txtBxBorderGreen";

           } else {
               $scope.message = "You gotta Stop boy!";
               $scope.msgClass = "success";
                $scope.txtBxBorder = "txtBxBorderGreen";
           }
       };
   }
})();
