var widgets = angular.module('widgets', []);


widgets.controller('RestaurantCtrl',
    ['$scope',
    function($scope){

      $scope.restaurants = [];

      $scope.createRestaurant = function () {
        var newRestaurant = {}
        newRestaurant.name = $scope.restaurantName
        newRestaurant.foodType = $scope.restaurantFoodType
        newRestaurant.image = $scope.restaurantImg
        $scope.restaurants.push(newRestaurant)
        $scope.restaurantName = ""
        $scope.restaurantFoodType = ""
        $scope.restaurantImg = ""
      }

      $scope.deleteRestaurant = function (index) {
        $scope.restaurants.splice(index, 1);
      }

      $scope.sortByName = function () {
        $scope.orderQuery = "name"
      }

      $scope.sortByType = function () {
        $scope.orderQuery = "foodType"
      }

    }]);

widgets.controller('PhotosCtrl',
    ['$scope',
    function($scope){

      $scope.rawFeed = instagramResponse.data;

      $scope.filters = [];
      $scope.hashtags = [];
      $scope.currentPage = 0;
      
      $scope.pagePrev = function(){
        if ($scope.currentPage > 0){
          $scope.currentPage--;
        }
      }

      $scope.pageNext = function(){
        if ($scope.currentPage  < $scope.filtered.length/12 ){
          $scope.currentPage++;
        }
      }


      var generateFiltersList = (function(){
        for (var i = 0; i < $scope.rawFeed.length; i++) {
          console.log($scope.rawFeed[i].filter)
          // Adds unique filters
          if ($scope.filters.indexOf($scope.rawFeed[i].filter) === -1) {
            $scope.filters.push($scope.rawFeed[i].filter)
          };
          // Adds unique hashtags
          for (var j = 0; j < $scope.rawFeed[i].tags.length; j++) {
            if ($scope.hashtags.indexOf($scope.rawFeed[i].tags[j]) === -1) {
              $scope.hashtags.push($scope.rawFeed[i].tags[j])
            };
          };
        }
      })();



    }]);

widgets.filter('hashtagFilter', function() {

  return function(images, selection) {

    if (!selection || selection.indexOf("") !== -1 ) return images;

    var filtered = [];

    // We iterate over all the images
    for (var w = 0; w < images.length; w++) {
      // We iterate over all the selected hashtags
      for (var i = 0; i < selection.length; i++) {
        // If the hashtag is part of the image list of hashtags, and the image wasn't selected already we add it
        if (images[w].tags.indexOf(selection[i]) !== -1 && filtered.indexOf(images[w]) === -1) {
          filtered.push(images[w])
        }
      };
    };

    return filtered;

  }


});

widgets.filter('pageFilter', function(){

  return function(images, pageNumber){

    return images.slice(pageNumber * 12, (pageNumber * 12) + 12)
  }
});
