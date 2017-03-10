app.controller('RestaurantCtrl',
	['$scope',
	function($scope){
		$scope.restaurants = [];
		$scope.orderByField = 'name';

		$scope.createRestaurant = function(name, food){
			$scope.restaurants.push({name: name, foodType: food})
		};

		$scope.deleteRestaurant = function(index){
			$scope.restaurants.splice(index,1)
		}

	}]);