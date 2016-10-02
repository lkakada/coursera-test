(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService){
      var menu = this;
      menu.searchTerm = '';

      menu.arrowIt = function(searchTerm){
        MenuSearchService.getMatchedMenuItems(searchTerm)
          .then(function(response){
            menu.found = response;
            menu.title = (menu.found.length+ " item(s) found");
            menu.filter = searchTerm;
            console.log(menu.found);
          })
          .catch(function(error){
            console.log("Connection Error")
          });
      };
      menu.removeItem = function(itemIndex) {
        menu.found.splice(itemIndex, 1);
        console.log("Item has been removed");
        menu.title = (menu.found.length + " item(s) found");
        console.log(menu.title);
      };
  }

  function FoundItems() {
  var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&',
        search: '<'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
  };
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var list = this;
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath']
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      return $http(
          {
            method: "GET",
            url: (ApiBasePath+"/menu_items.json")
          })
          .then(function (response) {
          //process the result and only keep items that match
          var items = response.data.menu_items;
          var foundItems = [];

          if(searchTerm.length == 0){
            items = [];
          } else {
            for(var i = 0; i < items.length; i++){
              var str = items[i].description;
              if(str.toLowerCase().indexOf(searchTerm) >= 0){
                foundItems.push(items[i]);
              }
            }
          }
          return foundItems;
        })
        .catch(function(error){
          console.log("Connection Error");
        })
    };
  }
})();
