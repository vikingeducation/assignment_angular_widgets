var widgets = angular.module('widgets', []);

widgets.controller('RestaurantCtrl', ['$scope', function ($scope) {
	$scope.restaurants = [];

	$scope.sortItem = 'name';

	$scope.sequence = false;

	$scope.orderSign = "up";

	$scope.createRestaurant = function () {
		var newObject = {};
		newObject.name = $scope.name;
		newObject.foodType = $scope.type_of_food;
		newObject.imgUrl = $scope.img_url;
		$scope.restaurants.push(newObject);
		$scope.name = "";
		$scope.type_of_food = "";
		$scope.img_url = "";
	};

	$scope.removeRestaurant = function (restaurant) {
		for (var i = 0; i < $scope.restaurants.length; i++) {
			if ($scope.restaurants[i].name === restaurant.name && $scope.restaurants[i].foodType === restaurant.foodType) {
				$scope.restaurants.splice(i, 1);
				break;
			};
		};
	};

	$scope.sortByName = function () {
		$scope.sortItem = "name";
		reverseSortSequence();
	};

	$scope.sortByFoodType = function () {
		$scope.sortItem = "foodType";
		reverseSortSequence();
	};

	var reverseSortSequence = function () {
		$scope.sequence = !$scope.sequence;
		if ($scope.orderSign === "up") {
			$scope.orderSign = "down";
		} else {
			$scope.orderSign = "up";
		};
	};
}]);
