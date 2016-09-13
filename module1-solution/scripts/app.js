(function(){
  'use strict';

  angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope) {
      $scope.wordCount = function(s){
        s = document.getElementById('lunch-menu').value;
        $scope.count = s.split(',').length;
        if($scope.count <= 3){
          $scope.message = "Enjoy!";
        }else {
          $scope.message = "Too much!";
        }
      }
    }
})();
