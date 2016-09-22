var widgets = angular.module('widgets', []);
widgets.controller("RestaurantCtrl",
  ['$scope',
  function($scope){
    $scope.restaurants = [];
    $scope.makeRest = function(){
      var rest = $scope.formData;
      rest.id = $scope.restaurants.length;
      $scope.restaurants.push(rest);
      $scope.formData = {};
    };

    $scope.removeRest = function(restaurant){
      $scope.restaurants.splice(restaurant.id, 1);
    };
  }]);