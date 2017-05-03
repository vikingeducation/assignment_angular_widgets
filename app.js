var widgets = angular.module('WidgetsApp', []);

widgets.controller('RestaurantCtrl', ['$scope', function($scope){
  $scope.restaurants = [];
}]);
