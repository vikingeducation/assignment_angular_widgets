var widgets = angular.module("widgets", []);

widgets.controller('RestaurantCtrl', 
	['$scope',
	function($scope) {
		$scope.restaurants = [];

		$scope.createRestaurant = function(formData) {
			var newRest = {};
			newRest.name = formData.name;	
			newRest.foodType = formData.foodType;
			newRest.image = formData.image;

			$scope.restaurants.push(newRest);

			formData.name = '';
			formData.foodType = '';
			formData.image = '';
		}

		$scope.deleteRestaurant = function(restaurantToDelete) {
			for(var i = 0; i < $scope.restaurants.length; i++) {
				var restaurant = $scope.restaurants[i];

				if (restaurant.name === restaurantToDelete.name) {
					$scope.restaurants.splice(i, 1);
					break;
				}
			}
		}

		$scope.order = 'foodType';
		$scope.orderReverse = false;

		$scope.orderColumn = function(name) {
			$scope.order = name;
			$scope.orderReverse = !$scope.orderReverse;
		}

		$scope.getIcon = function(name) {
			var icon;
			if ($scope.orderReverse === true) {
				icon = "^";
			} else {
				icon = "v";
			}

			if ($scope.order === name) {
				return icon;
			}
		}
	}])






