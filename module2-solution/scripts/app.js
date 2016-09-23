(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    //controller for item to buy
    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController (ShoppingListCheckOffService) {
      var toBuy = this;
          toBuy.items = ShoppingListCheckOffService.getBuyItems();
          toBuy.removeItem = function(itemIndex){
            ShoppingListCheckOffService.removeItem(itemIndex);
          };
      }

    //controller for item already bought
    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
      var bought = this;
      bought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService(){
      var service = this;
      //List of shopping items
          var items = [
              {name: "cookies", quantity: 10},
              {name: "coke", quantity: 3},
              {name: "pizza", quantity: 4},
              {name: "candy", quantity: 5},
              {name: "chip", quantity: 8}
          ];
      var boughtItems = [];

      service.removeItem = function(itemIndex){
        var item = items[itemIndex];
        items.splice(itemIndex, 1);
        boughtItems.push(item);
      };

      service.getBuyItems = function(){
        return items;
      };

      service.getBoughtItems = function(){
        return boughtItems;
      };
    }
})();
