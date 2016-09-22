app.controller("RestaurantCtrl",
  ["$scope", function($scope) {
  $scope.restaurants = [];
  $scope.onClick = function() {
    var newObj = {};
    newObj.name = $scope.name;
    newObj.foodType = $scope.type;
    newObj.imageSrc = $scope.imageSrc;
    $scope.restaurants.push(newObj);
    $scope.name = "";
    $scope.type = "";
    $scope.imageSrc = "";
  };
  $scope.deleteRestaurant = function($index) {
    $scope.restaurants.splice($index, 1);
  };

  $scope.clickSort = function(sortEl){
    $scope.sort = sortEl;
    $scope.descending = !$scope.descending;
    if ($scope.descending) {
      $scope.sort = "-" + $scope.sort;
    }
  }
}])
