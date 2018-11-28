( function() {
  'use strict';

  angular.module('ShoppingListApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService) {

    var buyingList = this;

    buyingList.items = ShoppingListCheckOffService.getToBuyList();

    buyingList.removeItem = function (itemIndex, itemName, quantity) {
      ShoppingListCheckOffService.addToBoughtList(itemName, quantity);
      ShoppingListCheckOffService.removeFromToBuyList(itemIndex);
    };

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getAlreadyBoughtList();
  }

  function ShoppingListCheckOffService() {

    var service = this;

    var shoppingList = [
      {
        name: "Apples",
        quantity: "5"
      },
      {
        name: "bananas",
        quantity: "5"
      },
      {
        name: "oranges",
        quantity: "10"
      },
      {
        name: "icecream",
        quantity: "1"
      },
      {
        name: "juice",
        quantity: "10"
      }
    ];


    var alreadyBoughtList = [];

    service.getToBuyList = function () {
      return shoppingList;
    };

    service.removeFromToBuyList = function (itemIndex) {
      shoppingList.splice(itemIndex, 1);
    };

    service.getAlreadyBoughtList = function () {
      return alreadyBoughtList;
    };

    service.addToBoughtList = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      alreadyBoughtList.push(item);
    };

  }

})();
