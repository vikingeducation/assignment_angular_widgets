var widgets = angular.module('widgets', [])


widgets.controller('RestaurantCtrl', ['$scope', '_', function($scope, _) {


  $scope.restaurants = [];
  $scope.onClick = function(form){
    console.log(form.name)
    var obj = {}
    obj['name'] = $scope.name;
    obj['foodType'] = $scope.foodType;
    $scope.restaurants.push(obj);
    $scope.name = '';
    $scope.foodType = '';
  }

  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant)
    $scope.restaurants.splice(index, 1);
  }

}]);





widgets.factory('_', ['$window', function($window) {
  return $window._;
}]);
