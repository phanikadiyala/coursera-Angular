/**
* Author: Ruben Leis
* https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment3/Assignment-3.md
*
*/

(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);



function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;

  //Returns true if list is empty
  list.checkFoundList = function () {
	return typeof list.items !== 'undefined' && list.items.length === 0
  };
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowItCtrl = this;

  //Search action
  narrowItCtrl.narrowItDown = function (searchTerm) {
	//Search only when searchTerm is not empty
	if (searchTerm) {
		var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
		promise.then(function (response) {
		  narrowItCtrl.found = response;
		})
		.catch(function (error) {
		  console.log(error);
		});
	} else {
		narrowItCtrl.found = [];
	}

  };

  //Remove action
  narrowItCtrl.removeItem = function (itemIndex) {
    narrowItCtrl.found.splice(itemIndex, 1);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  /**
  * Get list item that match to searchTerm
  */
  service.getMatchedMenuItems = function (searchTerm) {
	return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (response) {
	
		var foundItems = [];
		var menuItemsLength = response.data.menu_items.length;

		for (var i = 0; i < menuItemsLength; i++) {
			var item = response.data.menu_items[i];
			if (item.description.indexOf(searchTerm) !== -1) {

				foundItems.push(item);
			}
		};
		return foundItems;
    });
  };
}

})();
