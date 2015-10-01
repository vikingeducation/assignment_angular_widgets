var widgets = angular.module('widgets', []);

widgets.controller('RestaurantCtrl',
  ['$scope',
  function($scope){

    $scope.restaurants = [];
    $scope.sort = "foodType";

    $scope.createRestaurant = function(name, foodType, imageURL) {
      var newRestaurant = {
        name: name,
        foodType: foodType,
        imageURL: imageURL
      };

      //store as a property on an object...access through it
      $scope.restaurants.push(newRestaurant);
      $scope.name = null;
      $scope.foodType = null;
      $scope.imageURL = null;
    };

    $scope.remove = function(restaurant) {
      var i = $scope.restaurants.indexOf(restaurant);
      console.log(i)
      $scope.restaurants.splice(i, 1);
    };

    $scope.setSort = function(selected) {
      $scope.sort = selected;
    };

  }]);



  widgets.controller('PhotosCtrl',
    ['$scope',
    function($scope) {

      $scope.rawFeed = instagramResponse;

      $scope.photos = $scope.rawFeed["data"];

      $scope.allFilters = [];
      $scope.photos.forEach( function(photo) {
        if ($scope.allFilters.indexOf(photo.filter) === -1) {
          $scope.allFilters.push(photo.filter);
        };
      });

      $scope.allTags = [];
      $scope.photos.forEach( function(photo) {
        $scope.allTags = $scope.allTags.concat(photo.tags)
      });

      $scope.tagFilter = function(tags) {
        return function(photo) {
          photo.tags.indexOf(tags[0]) !== -1;
        }
      }

      $scope.customFilter = function(photo) {
        var match = true;
        if ($scope.tagSearch) {
          $scope.tagSearch.forEach(function(tag) {
            if (photo.tags.indexOf(tag) === -1) {
              match = false;
            };
          })
        };
        return match;
      };

    }]);