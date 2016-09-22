var widgets = angular.module('widgets', []);
widgets.controller("RestaurantCtrl",
  ['$scope',
  function($scope){
    $scope.restaurants = [];
    $scope.makeRest = function(){
      var rest = $scope.formData;
      console.log($scope.formData);
      $scope.restaurants.push(rest);
      $scope.formData = {};
    };
  }]);