var widgets = angular.module('widgets', []);

widgets.controller('restaurantCtrl', ['$scope', function($scope){

  $scope.restaurants = [
    {
      name: "test",
      type: "Testican",
      image: "http://parkresto.com/wp-content/themes/parkrestaurant/images/11onlinereservationpark.jpg"
    },
    {
      name: "test2",
      type: "Italian"
    },
    {
      name: "test the third",
      type: "Mexican",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/7b/7b/c6/restaurant-view.jpg"
    },
    {
      name: "fourth test",
      type: "Italian",
      image: "https://static1.squarespace.com/static/51ab58f4e4b0361e5f3ed294/51ab58f4e4b0361e5f3ed29a/51ab80bee4b0058e26cfcb1f/1370194240299/Benchmark_Restaurant_Dining_Room_Photographed_by_Evan_Sung.jpg"
    }
  ];

  $scope.createRestaurant = function(){
    if ($scope.name && $scope.type) {
      var newRestaurant = {
        name: $scope.name,
        type: $scope.type,
        image: $scope.image
      };
      $scope.restaurants.push(newRestaurant);
      $scope.name = "";
      $scope.type = "";
      $scope.image = "";
    }
  };

  $scope.order = 'type';

  $scope.sort = function(column) {
    if ($scope.order === column) {
      $scope.direction = !$scope.direction;
    } else {
      $scope.direction = false;
      $scope.order = column;
    }
  };

  $scope.deleteR = function(r) {
    for (var i = 0; i < $scope.restaurants.length; i++) {
      if ($scope.restaurants[i] === r) {
        $scope.restaurants.splice(i, 1);
        return;
      }
    }
  };
}]);

widgets.controller('PhotoCtrl', ['$scope', function($scope){
  $scope.rawFeed = instagramResponse;
  $scope.images = $scope.rawFeed.data;
}]);


widgets.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      scope.$watch(function() {
        return attrs.ngSrc;
      }, function (value) {
        if (!value) {
          element.attr('src', attrs.errSrc);
        }
      });

      element.bind('error', function() {
        element.attr('src', attrs.errSrc);
      });
    }
  };
});
