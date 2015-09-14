var widgets = angular.module("widgets", []);

widgets.controller("PhotosCtrl", ["$scope", function($scope){
  $scope.rawFeed = window.instagramResponse.data;
  $scope.search = {tags: undefined};
  $scope.tagFilters=[];
  $scope.currentPage = 0;
  $scope.nextPage = function() {
    $scope.currentPage++
    console.log($scope.currentPage)
  }
  $scope.prevPage = function() {
    $scope.currentPage--
  }

  $scope.hashtagFilter = function(val, idx, arr){
    console.log('inside hashtagfilter');
    if($scope.tagFilters.length ==0){
      return true;
    }
    for(var i=0; i < $scope.tagFilters.length; i++){
      console.log(val.tags);
      if (val.tags == $scope.tagFilters[i]){
        console.log('true');
        return true;
      }else if (val.tags.indexOf($scope.tagFilters[i]) != -1){
        return true;
      }
    }
  };

  $scope.IGFilters = (function() {
    var filters = [];
    for (var i = 0; i < $scope.rawFeed.length; i++) {
      var photo = $scope.rawFeed[i];
      if (filters.indexOf(photo.filter) === -1 ) {
        filters.push(photo.filter);
      }
    }
    return filters;
  })();

  $scope.hashtags = (function() {

    var tags = [];
    for (var i = 0; i < $scope.rawFeed.length; i++) {
      var photo = $scope.rawFeed[i];
      for (var j=0; j < photo.tags.length; j++){
        if (tags.indexOf(photo.tags[j]) === -1 ) {
          tags.push(photo.tags[j]);
        }
      }
    }
    return tags;
  })();

}]);

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