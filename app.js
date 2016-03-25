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
        var unique = function (value, index, self) {
             return self.indexOf(value) === index;
        };

        $scope.nextPage = function() {
          $scope.pageNumber += 1;
            Math.max(($scope.filteredPhotos.length / $scope.perPage), pageNumber);
        };

        $scope.lastPage = function() {
          $scope.pageNumber -= 1;
        };

        $scope.pageNumber = 0
        $scope.perPage = 12
        $scope.filters = {filter: "", tags: []};
        $scope.rawFeed = instagramResponse['data'];
        $scope.instagramFilters = instagramResponse['data'].map(function(photoBlob) {
          return photoBlob["filter"];
        }).filter(unique);

        $scope.containsComparator = function(expected, actual){
          return actual.indexOf(expected) > -1;
        };

        $scope.photoPages = [];

        $scope.instagramTags = instagramResponse['data'].map(function(photoBlob) {
          return (photoBlob["tags"]);
        }).filter(unique).reduce(function(a, b) {
             return a.concat(b);
           }, []);
    }]);


app.filter('photoFilter', function () {

    return function (input, filters) {
      var output = input;
      output = output.filter(function (item) {
        if (filters.filter == "" || item.filter == filters.filter) {
          return true
        }});

      output = output.filter(function (item) {
        if (filters.tags == 0) {
          return true
        } else {
          console.log("hi");
          return filters.tags.every(function(filteredTag){
            return item.tags.some(function(photoTag)  {
              return photoTag == filteredTag;
            })
          })
        }});

      return output;
    }
})
