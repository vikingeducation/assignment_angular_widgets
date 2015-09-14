
widgets.controller('RestaurantCtrl',['$scope', function($scope){
$scope.restaurants = [];
$scope.nameFilter = "";
$scope.typeFilter = "";
$scope.addRestaurant = function(){

  $scope.restaurants.push($scope.newRestaurant);
  $scope.newRestaurant = {};
};
$scope.removeRestaurant = function(index){
  $scope.restaurants.splice(index, 1);
};
$scope.Sorting = function(source){
  $scope.SortWay = source;
};
$scope.SortWay = "type";
}
]);