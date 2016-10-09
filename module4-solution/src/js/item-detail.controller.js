(function() {
  'use strict';

  angular.module('Data')
  .controller('ItemControler', ItemControler);

  ItemControler.$inject = ['items']
  function ItemControler(items) {
    var catDetail = this;
    catDetail.menuItems = items.data.menu_items;
    catDetail.name = items.data.category.name;
    // console.log(catDetail.menuItems);
  };
})();
