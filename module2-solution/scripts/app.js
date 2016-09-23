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
          toBuy.items = ShoppingListCheckOffService.itemTobuy;
          toBuy.addItems = function(){
            console.log("hello")
            toBuy.itemsbought = ShoppingListCheckOffService.getItemBought();
            console.log(toBuy.itemsbought);
          };
      }

    //controller for item already bought
    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService){

    }

    //service for sharing data
    function ShoppingListCheckOffService(){
      var service = this;
          service.itemTobuy = [
              {name: "cookies", quantity: 10},
              {name: "coke", quantity: 3},
              {name: "pizza", quantity: 4},
              {name: "candy", quantity: 5},
              {name: "chip", quantity: 8}
          ];
      var itemsBought = [];

      service.addItems = function(index){
        //var itemBought
        var itemBought = []
        itemBought.push(itemTobuy[index]);
        itemsBought.push(itemBought);
        //itemTobuy.splice(index, 1)
      };

      service.getItemBought = function(){
        return itemsBought;
      }
    }
})();
