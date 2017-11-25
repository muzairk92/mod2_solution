(function () {
'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyControllerFunction)
  .controller('AlreadyBoughtController', AlreadyBoughtControllerFunction)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  ToBuyControllerFunction.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtControllerFunction.$inject = ['ShoppingListCheckOffService'];

  function ShoppingListCheckOffService () {
    var service = this;
    service.toBuyItems = [
      { name: "cookies", quantity: 10 } ,
      { name: "chips", quantity: 20 } ,
      { name: "Drinks", quantity: 15 } ,
      { name: "Fries", quantity: 18 } ,
      { name: "coffee beans", quantity: 20 }
    ];
    service.boughtItems = [];

    service.boughtItem = function (itemIdex) {
        var item = {
        name: service.toBuyItems[itemIdex].name,
        quantity: service.toBuyItems[itemIdex].quantity
      };
      service.boughtItems.push(item);
      service.toBuyItems.splice(itemIdex, 1);
    };
  };

  function ToBuyControllerFunction (ShoppingListCheckOffService) {
    var buyController = this;
    buyController.items = ShoppingListCheckOffService.toBuyItems;

    buyController.addToBoughtList = function (index) {
      ShoppingListCheckOffService.boughtItem(index);
    };
  };
  function AlreadyBoughtControllerFunction (ShoppingListCheckOffService) {
    var boughtController = this;
    boughtController.items = ShoppingListCheckOffService.boughtItems;
  };


})();
