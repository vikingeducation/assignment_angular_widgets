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
  }
  $scope.deleteRestaurant = function($index) {
    $scope.restaurants.splice($index, 1);
    console.log("Trying to delete")
  }
}])