(function(){
  'use strict';

  angular.module('Data')
    .component('menuItems', {
      templateUrl: 'src/templates/menuItems.template.html',
      bindings: {
        items: '<'
      }
    });
})();
