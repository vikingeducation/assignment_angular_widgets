var app = angular.module('RestaurantApp', []);

app.controller('RestaurantCtrl',
    ["$scope",
    function($scope) {
      $scope.restaurants = [
      {name: "McDonalds",
        type: "Burgers",},
      {name: "Raymond's",
        type: "Diner",},
      {name: "Wendy's",
        type: "Tacos",},
      {name: "Chipotle",
        type: "Ebola",},
      ];

      $scope.createFood = function() {
        var restaurantObj = {
          name: $scope.name,
          type: $scope.foodType,
          url: $scope.imageUrl,
        };
        $scope.name = "";
        $scope.foodType = "";
        $scope.imageUrl = "";
        $scope.restaurants.push(restaurantObj);
      }

      $scope.changeOrder = function(filter) {
        $scope.orderSelection = filter;
      };

      $scope.deleteRestaurant = function(restaurant) {
        var index = $scope.restaurants.indexOf(restaurant);
        $scope.restaurants.splice(index,1);
      }
    }]);


app.controller('PhotosCtrl',
    ['$scope',
    function($scope) {
      $scope.rawFeed = instagramResponse['data'];

    }])
