var widgets = angular.module('widgets', []);

widgets.controller('RestaurantCtrl',
  ['$scope', '$window',
  function($scope, $window){

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

    $scope.page = {
      number: 1,
      perPage: 3,
      offset: function() { return (this.number - 1) * this.perPage }
    };

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


    $scope.pageDown = function() {
      if ($scope.page.number > 1) {
        $scope.page.number--;
      };
    };

    $scope.pageUp = function() {
      var totalPages = Math.ceil($scope.filteredPhotos.length / $scope.page.perPage);
      if ($scope.page.number < totalPages) {
        $scope.page.number++;
      };
    };


    $scope.resetPage = function() {
      $scope.page.number = 1;
      $window.scrollTo(0,0);
    };


    // Users widget
    $scope.users = [];
    $scope.photos.forEach( function(photo) {
      if ($scope.users.indexOf(photo.user) === -1) {
        $scope.users.push(photo.user);
      };
    });


    $scope.setUserFilter = function(user) {
      $scope.userFilter = user;
    };

  }]);