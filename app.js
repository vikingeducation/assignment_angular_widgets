var widgets = angular.module('widgets', []);
widgets.controller('RestaurantCtrl',
    ['$scope',
    function($scope){
      $scope.restaurants = [{name: "Starbucks", foodType: "Coffee", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Starbucks_Coffee_Logo.svg/1024px-Starbucks_Coffee_Logo.svg.png"},
                            {name: "Philz", foodType: "Coffee", logo: "https://pbs.twimg.com/profile_images/615957761256337409/P13O4djR.png"},
                            {name: "Chipotle", foodType: "Mexican", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/480px-Chipotle_Mexican_Grill_logo.svg.png"}
                            ];
      $scope.sortType = 'foodType';
      $scope.sortReverse = false;

      $scope.addRestaurant = function() {
        $scope.restaurants.push({name: $scope.name, foodType: $scope.foodType, logo: $scope.logo})
        $scope.name = '';
        $scope.foodType = '';
        $scope.logo = '';
      };
      $scope.deleteRestaurant = function(restaurant) {
        var index = $scope.restaurants.indexOf(restaurant);
        console.log(index);
        $scope.restaurants.splice(index, 1);
      };
      $scope.toggleSort = function(field) {
        if (field == $scope.sortType) {
          $scope.sortReverse ? $scope.sortReverse = false : $scope.sortReverse = true;
          return;
        }
        $scope.sortType = field;
      }
      $scope.sortCaret = function(sortType, sortReverse) {
        if(sortType == $scope.sortType && sortReverse == $scope.sortReverse) {
          return true;
        }
      }
    }]);