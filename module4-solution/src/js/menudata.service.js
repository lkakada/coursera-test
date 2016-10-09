(function(){
  'use strict';

  angular.module('Data', [])
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")

    MenuDataService.$inject = ['$http', 'ApiBasePath']
    function MenuDataService($http, ApiBasePath){
      var service = this;

      service.getAllCategories = function(){
        return $http.get(ApiBasePath+"/categories.json");
      };

      service.getItemForCategory = function(categoryShortName){
        return $http.get(ApiBasePath + "/menu_items.json",
          {
            params: {category: categoryShortName}
          }
        );
      };
    }
})();
