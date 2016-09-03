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

app.controller("PhotosCtrl", ['$scope', function($scope){
	$scope.instagramObjects = instagramResponse.data;
	$scope.photoFilter = "";
	$scope.rawFeed = instagramResponse;

	$scope.convertToDate = function(createdTime){
		var date = new Date(parseInt(createdTime) * 1000);
		return moment(date).format("MMM Do YY");               // Sep 3rd 16
	};

	$scope.filterInstagramObjects = function(){
		$scope.instagramObjects = $.grep(instagramResponse.data, function(iO){
			return iO.filter === $scope.photoFilter;
		});
	};

	$scope.returnUniqueFiltersFromInstagramJson = function( i ){
		var filters = [];
		for(var a = 0; a < i.data.length; a++){
			filters.push(i.data[a].filter);
		};
		return $.unique(filters).sort();
	};
	$scope.filters = $scope.returnUniqueFiltersFromInstagramJson( instagramResponse );
}]);