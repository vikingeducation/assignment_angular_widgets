var widgets = angular.module("WidgetsApp", []);

widgets.controller("RestaurantCtrl", ['$scope', function($scope) {
  $scope.restaurants = [
  {name: 'martannes', foodType: 'mexican'},
  {name: 'omaligans', foodType: 'irish pub'}
  ];
  $scope.name = "shift";
  $scope.typeOfFood = "tapas";
  $scope.icon = "";
  $scope.query1 = "";
  $scope.clickOrder = "name"
  $scope.createRestaurant = function(){
    console.log("create function fire");
    var rest = {};
    rest.name = angular.copy($scope.name);
    rest.foodType = angular.copy($scope.typeOfFood);
    rest.icon = angular.copy($scope.icon);
    $scope.restaurants.push(rest);
    $scope.name = "";
    $scope.typeOfFood = "";
    $scope.icon = "";
  };

  $scope.removeRest = function(index){
    $scope.restaurants.splice(index, 1);
  };

  $scope.activeSearch = function(){
    if ($scope.query1 !== "") {
      return true;
    } else {
      return false;
    };
  };

  $scope.clickSort = function(input) {
    if ($scope.clickOrder === input){
      $scope.clickOrder = "-" + input;
    } else {
      $scope.clickOrder = input;
    };
  }
}]);

widgets.controller("PhotosCtrl", ['$scope', function($scope){
  $scope.rawFeed = instagramResponse;
  $scope.tagSelect = [""]

  $scope.filters = (function(){
    var fil = [];
    var absent = true;
    angular.forEach( $scope.rawFeed.data, function(photo){
      absent = true;
      for (var i = 0; i < fil.length; i++) {
        if (photo.filter === fil[i]) {
          absent = false;
        };
      };
      if (absent) {
        fil.push(photo.filter);
      };
    });
    return fil;
  })();

  $scope.selectUser = function(user){
    if ($scope.selectedUser === user) {
      delete $scope.selectedUser;
    } else {
      $scope.selectedUser = user;
    };
  };

  $scope.tags = (function(){
    var fil = [];
    var absent = true;
    angular.forEach( $scope.rawFeed.data, function(photo){
      absent = true;
      for (var j = 0; j < photo.tags.length; j++) {
        for (var i = 0; i < fil.length; i++) {
          if (photo.tags[j] === fil[i]) {
              absent = false;
          };
        };
        if (absent) {
          fil.push(photo.tags[j]);
        };
      };
    });
    return fil;
  })();

  $scope.returnEmptyArray = function(){
    return [];
  };

}]);

widgets.filter('tagFilter', function() {

  // `activatePlayfulFilter` is a boolean the user
  //    can set in the DOM to turn on this filter
  return function( collection, tagList ) {
    console.log(collection)
    if (tagList.length === 1 && tagList[0] === "") {
      return collection;
    };

    var filteredCollection = [];

    angular.forEach( collection, function( photo ){
      var hasTag = false;
      for (var i = 0; i < photo.tags.length; i++){
        for (var j = 0; j < tagList.length; j++){
          if (photo.tags[i] === tagList[j]){
            hasTag = true;
          };
        };
      };
      if (hasTag === true) {
        filteredCollection.push(photo)
      };
    });
      // If the kitten is playful, keep it!
    return filteredCollection;

  };
});


widgets.factory('_', ['$window', function($window) {
  return $window._;
}]);

widgets.filter('uniqBy', ['_', function(_) {

  return function(collection, key) {
    return _.uniqBy(collection, key);
  };

}]);
