var widgets = angular.module('widgets', []);


widgets.controller('RestaurantCtrl',
  [ '$scope',
    function($scope){

    $scope.restaurants = [];

    $scope.sortCol = "foodType";

    $scope.createRestaurant = function(){
      var newRestaurant = {};
      newRestaurant.name = $scope.name;
      newRestaurant.foodType = $scope.foodType;
      newRestaurant.img = $scope.img;
      $scope.restaurants.push(newRestaurant);
      $scope.name = null;
      $scope.foodType = null;
      $scope.img = null;
    };

    $scope.deleteRestaurant = function(restaurant){
      var index = $scope.restaurants.indexOf(restaurant);
      $scope.restaurants.splice(index, 1);
    };

  }]);

widgets.controller('PhotosCtrl',
  [ '$scope',
    '$window',
    function($scope, $window){
      $scope.rawFeed = $window.instagramResponse;
      // Comment count
      $scope.commentCount = $scope.rawFeed['data'][0]['comments']['count'];
      // Like count
      $scope.likeCount = $scope.rawFeed['data'][0]['likes']['count'];
      // Created at
      $scope.createdAt = $scope.rawFeed['data'][0]['created_time'];
      // URL
      $scope.url = $scope.rawFeed['data'][0]['images']['standard_resolution']['url'];
      // Username
      $scope.userName = $scope.rawFeed['data'][0]['user']['username'];

  }]);