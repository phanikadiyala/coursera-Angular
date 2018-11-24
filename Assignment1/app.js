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

      //  $scope.i="";
        $scope.stack = function() {
          $scope.count=0;
            // already can access $scope.input
            // dont need to pass to stack()
            var array = $scope.input.split(',');

            // set $scope.message
            // instead of returning String
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
