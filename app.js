var widgets = angular.module("widgets", []);

widgets.controller("RestaurantCtrl", ["$scope", function($scope){
  $scope.restaurants = [];
  $scope.name ="";
  $scope.foodType = "";
  $scope.restaurantImage = "";

  $scope.foodTypeFilter = "";

  $scope.sort = function(colName){
    $scope.restaurants.sort(function(a, b) {
      var textA = a[colName].toUpperCase();
      var textB = b[colName].toUpperCase();
      if (colName == 'name'){
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      }
      else if (colName == 'foodType'){
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      }
    });
  };

  $scope.createRestaurant = function(){

    $scope.restaurants.push({
      name: $scope.name,
      foodType: $scope.foodType,
      image: $scope.restaurantImage
    });
    $scope.name = "";
    $scope.foodType = "";

  };


  $scope.removeRestaurant = function(index){
    $scope.restaurants.splice(index, 1);
  };


}]);