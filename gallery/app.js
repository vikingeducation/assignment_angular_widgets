var photoGalley = angular.module("photoGalley", []);

photoGalley.controller('PhotosCtrl', ['$scope', '_', function ($scope) {
	$scope.rawFeed = instagramResponse;

	$scope.users = $scope.rawFeed.data;

	var getFilters = function (users) {
		var filters = [];
		for (var i = 0; i < users.length; i++) {
			filters.push(users[i].filter);
		};
		console.log(filters);
		return _.uniq(filters);
	};

	var getTags = function (users) {
		var tags = [];
		for (var i = 0; i < users.length; i++) {
			for (var j = 0; j < users[i].tags.length; j++) {
				tags.push(users[i].tags[j]);
			};
		};
		return _.uniq(tags);
	};

	var getPagesArray = function () {
		if ($scope.users.length % 12 === 0) {
			var pages = $scope.users.length / 12;
		} else {
			var pages = Math.floor($scope.user.length / 12 + 1);
		};
		var result = []
		for (var i = 1; i <= pages; i++) {
			result.push(i);
		};
		return result;
	};

	$scope.filters = getFilters($scope.users);

	$scope.tags = getTags($scope.users);

	$scope.startIndex = 0;

	$scope.pages = getPagesArray();

	$scope.setCurrentPage = function (pageIndex) {
		$scope.startIndex = (pageIndex - 1) * 12;
	};


}]);

photoGalley.factory('_', ['$window', function ($window) {
	return $window._;
}]);

photoGalley.filter('uniq', ['_', function () {
	return function (collection) {
		return _.uniq(collection);
	};
}]);

photoGalley.filter('tagsFilter', ['_', function () {
	return function (collection, tags) {
		if (tags === undefined) {
			return collection;
		};
		console.log(tags);
		var filteredCollection = [];
		var includeAll = true;
		for (var i = 0; i < collection.length; i++) {
			var collectionTags = collection[i].tags;
			for (var j = 0; j < tags.length; j++) {
				if (!_.includes(collectionTags, tags[j])) {
					includeAll = false;
				};
			};
			if (includeAll) {
				filteredCollection.push(collection[i]);
			} else {
				includeAll = true;
			};
		};
		return filteredCollection;
	};
}]);
