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
	$scope.photoFilter = null;
	$scope.tagFilter = [];
	$scope.rawFeed = instagramResponse;

	$scope.convertToDate = function(createdTime){
		var date = new Date(parseInt(createdTime) * 1000);
		return moment(date).format("MMM Do YY"); // Sep 3rd 16
	};

	$scope.filterInstagramObjects = function(){

		$scope.filterAsPerPhotoFilter();

		// At this point $scope.instagramObjects should be all instagramObjects that are left over after the photo filters have done their thing...
		$scope.filterAsPerTags();

	};

	$scope.filterAsPerTags = function(){

		// If 'Everything' has't been chosen from the tags
		// Let's start looking for some things
		if ($.inArray("Everything", $scope.tagFilter) < 0){
			console.log( $scope.tagFilter );
		};

	};

	$scope.filterAsPerPhotoFilter = function(){
		// if user selects on the everything option, return all instagram objects
		// else filter
		if ($scope.photoFilter === null){
			$scope.instagramObjects = instagramResponse.data;
		} else {
			$scope.instagramObjects = $.grep(instagramResponse.data, function(iO){
			return iO.filter === $scope.photoFilter;
			});
		};
	};

	$scope.returnUniqueFiltersFromInstagramJson = function(){
		var i = $scope.instagramObjects;
		var filters = [];
		for(var a = 0; a < i.length; a++){
			filters.push(i[a].filter);
		};
		return $.unique(filters).sort();
	};

	$scope.filters = $scope.returnUniqueFiltersFromInstagramJson( instagramResponse );

	$scope.returnUniqueTagsFromInstagramJson = function(){
		var i = $scope.instagramObjects;
		var tags = [];
		for(var a = 0; a < i.length; a++){
			for(var b = 0; b < i[a].tags.length; b++){
				tags.push(i[a].tags[b]);
			};
		};
		// Getting the unique tags and sorting
		tags = $.unique(tags).sort();

		// Adding a "Everything" option to the start of the array
		// This will give the user an option to select all images in the multi select box.
		tags.unshift("Everything");

		return tags;
	};

	$scope.tags = $scope.returnUniqueTagsFromInstagramJson();

}]);