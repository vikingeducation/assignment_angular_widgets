// As per codecademy
var app = angular.module("widgets", []);

app.controller("RestaurantCtrl", ['$scope', function($scope){
	$scope.restaurants = [];
	$scope.name = "";
	$scope.type = "";
	$scope.createRestaurant = function(){
		var restaurant = { name: $scope.name, foodType: $scope.type };
		$scope.restaurants.push(restaurant);
		$scope.name = "";
		$scope.type = "";
	};
}]);