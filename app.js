// As per codecademy
var app = angular.module("widgets", []);

app.controller("RestaurantCtrl", ['$scope', function($scope){
	$scope.restaurants = [];
	$scope.orderKey = "+name";
	$scope.name = "";
	$scope.type = "";
	$scope.imageUrl = "";
	$scope.searchTerm = "";

	$scope.returnNewRestaurantObject = function(){
		return {
			name: $scope.name,
			foodType: $scope.type,
			imageUrl: $scope.imageUrl,
		};
	};

	$scope.createRestaurant = function(){
		var restaurant = $scope.returnNewRestaurantObject();
		$scope.restaurants.push(restaurant);
		$scope.resetForm();
	};

	$scope.deleteRestaurant = function( index ){
		$scope.restaurants.splice(index, 1);
	};

	$scope.resetForm = function(){
		$scope.imageUrl = "";
		$scope.name = "";
		$scope.type = "";
	};

	// if the header is the same as what's already in there
	// flip it from positive to negative
		// otherwise just change it to +header
	$scope.setOrderKey = function( header ){
		if ($scope.orderKey.slice(1) === header ){
			if ($scope.orderKey[0] === "+") {
				$scope.orderKey = "-" + header;
			} else {
				$scope.orderKey = "+" + header;
			};
		} else {
			$scope.orderKey = "+" + header;
		};
	};

}]);