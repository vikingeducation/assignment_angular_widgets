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

	$scope.pageNumber = 1;
	$scope.instagramObjects = instagramResponse.data;
	$scope.instagramObjectsForPage;

	$scope.photoFilter = null;
	$scope.tagFilter = ["Everything"];
	$scope.rawFeed = instagramResponse;

	$scope.convertToDate = function(createdTime){
		var date = new Date(parseInt(createdTime) * 1000);
		return moment(date).format("MMM Do YY"); // Sep 3rd 16
	};

	$scope.filterInstagramObjects = function(){
		// Resetting instagramObjects
		// Way more efficient ways to do this but right now I just want this to work.
		$scope.instagramObjects = instagramResponse.data;

		$scope.filterAsPerPhotoFilter();

		$scope.filterAsPerTags();

		$scope.pageNumber = 1;

		$scope.setObjectsForPage();
	};

	$scope.filterAsPerTags = function(){

		// If 'Everything' has't been chosen from the tags
		// Let's start looking for some things
		if ($.inArray("Everything", $scope.tagFilter) < 0){
			var filteredObjects = [];
			for (var i = ($scope.instagramObjects.length - 1); i >= 0; i--){
				// We're going through each object, Now we wanna go through each objects tags,

				// Best to do it this way because the an individuals tags will be much smaller than the full list of tags.
				// So now we're going through each tag in the current object
				for (var j = 0; j < $scope.instagramObjects[i].tags.length; j++){
					var tag = $scope.instagramObjects[i].tags[j];
					if ( $.inArray( tag, $scope.tagFilter ) >= 0 ){
						filteredObjects.push( $scope.instagramObjects[i] );
						break;
					};
				};
			};
			$scope.instagramObjects = filteredObjects;
		};
	};

	$scope.filterAsPerPhotoFilter = function(){
		// if user selects on the everything option, return all instagram objects
		// else filter
		if ($scope.photoFilter !== null){
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

	$scope.changePages = function( value ){
		$scope.pageNumber = value;

		$scope.setObjectsForPage();
	};

	$scope.setObjectsForPage = function(){
		$scope.instagramObjectsForPage = $scope.instagramObjects.slice(($scope.pageNumber - 1) * 12, $scope.pageNumber * 12);
	};

}]);