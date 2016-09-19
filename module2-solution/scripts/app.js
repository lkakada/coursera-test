(function(){
  'use strict';

  angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope) {
      $scope.lunchMenu = "";
      $scope.message = "";

      $scope.wordCount = function(){
        if($scope.lunchMenu == ""){
          $scope.message = "Please enter data first";
        }else{
          var foods = $scope.lunchMenu.split(',');
          var dishCount = foods.length;
          for(var i in foods){
            if(foods[i].trim() == "")
              dishCount--;
          }
          if(dishCount <=3){
            $scope.message = "Enjoy!";
          }else{
            $scope.message = "Too much!";
          }
        };
      }
    }
})();
