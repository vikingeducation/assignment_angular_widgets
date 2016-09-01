// As per codecademy
var app = angular.module("widgets", []);

app.controller("RestaurantCtrl", ['$scope', function($scope){
	$scope.restaurants = [];
	$scope.name = "";
	$scope.type = "";
	$scope.imageUrl = "";

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

}]);