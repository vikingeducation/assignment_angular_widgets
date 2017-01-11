angular.module("widgets", [])
  .controller("RestarauntCtrl", ['$scope', function ($scope){
      $scope.restaurants = [];

      $scope.createRest = function () {
        $scope.restaurants.push({
          name: $scope.name,
          foodType: $scope.foodType,
          url: $scope.url
        });
        $scope.name = "";
        $scope.foodType = "";
        $scope.url = "";
      };

      $scope.destroyit = function (restaurant) {
        $scope.restaurants.forEach(function (obj) {
          if(restaurant === obj){
            $scope.restaurants.shift(restaurant)
          }
        });

      }

  }]);
