var widgets = angular.module('widgets', ['angular.filter']);

widgets.factory('_', ['$window', function($window) {return $window._}]);

widgets.controller('PhotosCtrl', ['$scope', '_', function($scope,_) { 
  $scope.rawFeed = instagramResponse.data;
  $scope.userFilter;
  $scope.userTags= [];
  $scope.allTags = [];
  $scope.userName;

  (function(data) {
    data.forEach(function(ele) {
      ele.tags.forEach(function(tag) {
        $scope.allTags.push(tag);
      })
    })
  })($scope.rawFeed);

  $scope.updateName = function(name) {
    $scope.userName = name;
  };

  $scope.filterPhoto = function(photo) {
    console.log($scope.userName);
    if ($scope.userFilter) {
      if (photo.filter !== $scope.userFilter.trim()) {
        return false;
      }
    }
    if ($scope.userTags.length > 0) {
      for (var i = 0; i < $scope.userTags.length; i++) {
        if (photo.tags.indexOf($scope.userTags[i].trim()) === -1) {
          return false;
        }
      }
    }
    if ($scope.userName) {
      if (photo.user.username !== $scope.userName.trim()) {
        return false;
      }
    }
    return true;
  };
}]);

widgets.controller('RestaurantCtrl', ['$scope', '_', function($scope, _) {
  $scope.restaurants = [];
  $scope.food;
  $scope.typeOfFood;
  $scope.url;
  $scope.searchFood;
  $scope.sortCol = 'typeOfFood';
  $scope.revOrder = false;
  $scope.sortBy = function(col) {
    if (col === $scope.sortCol) {
      $scope.revOrder = !$scope.revOrder
    }
    $scope.sortCol = col;
  };

  $scope.processForm = function(form) {
    var restaurant = {
      food: form.food.$viewValue,
      typeOfFood: form.typeOfFood.$viewValue,
      url: form.url.$viewValue
    };
    $scope.restaurants.push(restaurant);
    $scope.food = "";
    $scope.typeOfFood = "";
    $scope.url = "";
  };

  $scope.deleteRestaurant = function(index) {
    $scope.restaurants.splice(index,1);
  };

}]);