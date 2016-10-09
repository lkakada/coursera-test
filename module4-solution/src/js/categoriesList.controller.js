(function() {
  'use strict';

  angular.module('Data')
  .controller('CategoriesListController', CategoriesListController);

  CategoriesListController.$inject = ['items'];
  function CategoriesListController(items) {
    var catCtrl = this;
    catCtrl.items = items.data;
  };

})();
