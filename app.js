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
    $scope.filters = [];
    $scope.tags = [];

    $scope.page = 0;

    $scope.nextPage = function() {
      var numPages = Math.floor($scope.photos.length / 12)
      if ( $scope.page < numPages - 1 ) {
        $scope.page += 1;
      }
    }

    $scope.previousPage = function() {
      if ($scope.page >= 1) {
        $scope.page -= 1;
      }
    }

    $scope.pageResults = function() {
      var firstIdx = $scope.page * 12;
      return $scope.photos.slice(firstIdx, firstIdx + 12);
    }

    $scope.rawFeed.forEach( function(el) {
      var photo = {  };

      photo.userName = el['user']['username'];

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
      photo.filter = el['filter'];

      if (el['tags'].length == 0) {
        photo.tags = ['no tags'];
      } else {
        photo.tags = el['tags'];
      }

      for ( var i = 0; i < photo.tags.length; i++ ) {
        if ( $scope.tags.indexOf( photo.tags[i] ) === -1 ) {
          $scope.tags.push( photo.tags[i] );
        }
      }

      if ( $scope.filters.indexOf( photo.filter ) === -1 ) {
        $scope.filters.push( photo.filter );
      }

      $scope.photos.push(photo);
    } )

  }]);


widgets.controller('UsersCtrl',
  ['$scope',
  function($scope) {

    $scope.rawFeed = instagramResponse['data'];

    $scope.users = [];

    $scope.rawFeed.forEach( function(el) {
      var user = {};

      user.userName = el['user']['username'];

      user.imageUrl = el['user']['profile_picture'];

      user.fullName = el['user']['full_name'];

      $scope.users.push(user);
    });
  }]);
