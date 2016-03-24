

var widgets = angular.module('widgetsApp', []);

widgets.controller('RestaurantCtrl',
    ['$scope',
    function($scope){
      $scope.restaurants = [
        {"name": "john", "foodType": "mexican"}, 
        {"name": "julia", "foodType": "hamburgers"}, 
        {"name": "aaaa", "foodType": "aaaaa"}, 
        {"name": "bbbb", "foodType": "BBB"}];
      $scope.name = "jimmys";
      $scope.foodType = "italian";
      $scope.img = "http://findicons.com/files/icons/7/dinosaurs_toys/128/stegosaurus.png";
      $scope.addRestaurant = function(restaurant) {
        $scope.restaurants.push( 
          restaurant
          // name: $scope.name,
          // foodType: $scope.foodType
        )
        $scope.name = "";
        $scope.foodType = "";
        $scope.img = "";
      };

      $scope.deleteRestaurant = function(index) {
        $scope.restaurants.splice(index, 1)
      };

      $scope.sortType = "foodType"
      $scope.sortOrder = "+";
      $scope.sortBy = $scope.sortOrder + $scope.sortType

      $scope.changeSortOrder = function(column) {
        console.log(column)
        // if you click on the same sortType, change sortOrder
        if (column === $scope.sortType) {
          $scope.sortOrder == "+" ? $scope.sortOrder = "-" : $scope.sortOrder = "+";
        }
        // if you click on a different sortType, change sortType and default to ascending
        else {
          $scope.sortType = column;
          $scope.sortOrder = "+";
        }
        $scope.sortBy = $scope.sortOrder + $scope.sortType
      }
    }]);

widgets.controller( 'PhotosCtrl', [ 
    '$scope',
    function( $scope) { 
      $scope.rawFeed = instagramResponse;
      $scope.img = "http://findicons.com/files/icons/7/dinosaurs_toys/128/stegosaurus.png";

      // console.log( $scope.rawFeed.data[0]);
      // console.log( $scope.rawFeed.data[0]["images"]["standard_resolution"]["url"]);
      $scope.photosArr = []
      $scope.rawFeed.data.forEach( function( elt){
        $scope.photosArr.push( elt["images"]["standard_resolution"]["url"] );
      });
      // console.log( $scope.photosArr);
      console.log( $scope.photosArr[0] );
      console.log( typeof $scope.photosArr[0] );
    }
  ]);
