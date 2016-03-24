var widgets = angular.module('widgets', []);

widgets.controller('RestaurantCtrl',
  ['$scope',
  function($scope){
    $scope.restaurants = [];
    $scope.name;
    $scope.typeOfFood;
    $scope.imgUrl;

    $scope.createRestaurant = function() {
      $scope.restaurants.push({ name: $scope.name, typeOfFood: $scope.typeOfFood, url: $scope.imgUrl});
      $scope.name = "";
      $scope.typeOfFood = "";
      $scope.imgUrl = "";
      console.log($scope.restaurants);
    };

    $scope.removeRestaurant = function(rest) {
      var index = $scope.restaurants.indexOf(rest);
      $scope.restaurants.splice(index, 1);
    };

    $scope.searchTerm;

    $scope.orderCategory;

    $scope.order = function(input) {
      $scope.orderCategory = input;
    }

  }]);

  widgets.controller('PhotosCtrl',
    ['$scope',
    function($scope) {

      // data data from profile_picture
      $scope.rawFeed = instagramResponse['data'];

      $scope.photos = [];

      (function() {
        $scope.rawFeed.forEach( function(el) {
          var photo = {  };

          photo.userName = el['user']['userName'];

          if (el["caption"] === null) {
            photo.desc = "";
          } else {
            photo.desc = el['caption']['text'];
          }

          photo.imageUrl = el['images']['standard_resolution']['url'];
          photo.createdTime = el['created_time'];
          photo.link = el['link'];
          photo.likes = el['likes']['count'];
          photo.comments = el['comments']['count'];

          $scope.photos.push(photo);
        } )

      })();

    }]);
