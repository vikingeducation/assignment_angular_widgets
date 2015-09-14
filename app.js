var widgets = angular.module("widgets", []);

widgets.controller("PhotosCtrl", ["$scope", function($scope){
  $scope.rawFeed = window.instagramResponse.data
  $scope.IGFilters = (function() {
    var filters = []
    for (var i = 0; i < $scope.rawFeed.length; i++) {
      var photo = $scope.rawFeed[i]
      if (filters.indexOf(photo.filter) === -1 ) {
        filters.push(photo.filter)
      }
    };
    return filters
  })()

}])

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