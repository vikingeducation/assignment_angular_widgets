var widgets = angular.module("widgets", []);

widgets.controller('Restaurant', ["$scope", function($scope) {
  $scope.restaurants = [];

  $scope.createRestaurant = function() {
    var object = {};
    object.name = $scope.name;
    object.food = $scope.food;
    object.image = $scope.image;
    $scope.restaurants.push(object);
    $scope.name = "";
    $scope.food = "";
    $scope.image = "";
    $scope.arrow = "http://www.iconsdb.com/icons/preview/deep-pink/up-circular-xxl.png";
  };

  $scope.deleteRestaurant = function(name, food) {
    for (var i = 0; i < $scope.restaurants.length; i++) {
      if ($scope.restaurants[i].name === name &&
          $scope.restaurants[i].food === food) {
        $scope.restaurants.splice(i, 1);
        break;
      }
    }
  };

  $scope.changeFilter = function(filter) {
    if(filter[0] !== "-" && $scope.restaurantFilter === filter) {
      $scope.restaurantFilter = "-" + filter;
      $scope.arrow = "http://www.iconsdb.com/icons/preview/deep-pink/down-circular-xxl.png"
    }
    else {
      $scope.restaurantFilter = filter;
      $scope.arrow = "http://www.iconsdb.com/icons/preview/deep-pink/up-circular-xxl.png"
    }
  };

}]);