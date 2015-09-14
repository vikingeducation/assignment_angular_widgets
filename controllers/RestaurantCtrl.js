
widgets.controller('RestaurantCtrl',['$scope', function($scope){
$scope.restaurants = [];
$scope.foodName = "";
$scope.foodType = "";
$scope.icon = "";
$scope.fun = function(){
  var newObj = {
    name: $scope.foodName,
    type: $scope.foodType,
    icon: $scope.icon
  };
  $scope.restaurants.push(newObj);
  $scope.foodName = "";
  $scope.foodType = "";
};
$scope.removeRestaurant = function(index){
  $scope.restaurants.splice(index, 1);
}
}
]);