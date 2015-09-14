var widgets = angular.module("widgets", []);

widgets.controller("PhotosCtrl", ["$scope", function($scope){
  $scope.rawFeed = window.instagramResponse.data;
  $scope.search = {tags: undefined,
                    user: {username: undefined}};
  $scope.tagFilters=[];
  $scope.filteredPicCount;
  $scope.currentPage = 0;

  $scope.resetPage = function(){
    $scope.currentPage =0;
  };

  $scope.nextPage = function() {
    $scope.currentPage++;
    console.log($scope.currentPage);
  };

  $scope.prevPage = function() {
    $scope.currentPage--;
  };

  $scope.hashtagFilter = function(val, idx, arr){

    $scope.filteredPicCount=0;
    if($scope.tagFilters.length == 0){
      $scope.filteredPicCount++;
      return true;
    }
    for(var i=0; i < $scope.tagFilters.length; i++){
      if (val.tags == $scope.tagFilters[i]){
        $scope.filteredPicCount++;
        return true;
      }else if (val.tags.indexOf($scope.tagFilters[i]) != -1){
        $scope.filteredPicCount++;
        return true;
      }
    }
  };

  $scope.userFilter = function(username){
    $scope.search.user.username = username;
  };

  $scope.IGUsers = (function(){
    var users = [];
    for (var i = 0; i < $scope.rawFeed.length; i++) {
      var photo = $scope.rawFeed[i];
      if (users.indexOf(photo.user) === -1 ) {
        users.push(photo.user);
      }
    }
    return users;
  })(); // user objects

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