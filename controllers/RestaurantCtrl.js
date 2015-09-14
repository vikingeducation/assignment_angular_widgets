
widgets.controller('RestaurantCtrl',['$scope', function($scope){
$scope.restaurants = [];
$scope.foodName = "";
$scope.foodType = "";
$scope.fun = function(){
  var newObj = {
    name: $scope.foodName,
    type: $scope.foodType
  };
  $scope.restaurants.push(newObj);
  $scope.foodName = "";
  $scope.foodType = "";
};
}
]);