var widgets = angular.module('widgets', []);
widgets.controller("RestaurantCtrl",
  ['$scope',
  function($scope){
    $scope.restaurants = [
      {
        name: "Arby's",
        foodType: "Burgers"
      },
      {
        name: "Bertucci's",
        foodType: "Pizza"
      },
      {
        name: "Chili's",
        foodType: "Tex-Mex"
      },
      {
        name: "Denny's",
        foodType: "Brunch"
      }

    ];
    $scope.makeRest = function(){
      var rest = $scope.formData;
      rest.id = $scope.restaurants.length;
      $scope.restaurants.push(rest);
      $scope.formData = {};
    };

    $scope.removeRest = function(restaurant){
      $scope.restaurants.splice(restaurant.id, 1);
    };

    $scope.orderProp = "";

    $scope.setOrder = function(prop){
      console.log("reaching controller");
      if($scope.orderProp == prop){
        $scope.orderProp = "-"+prop;
      }
      else{
        $scope.orderProp = prop;
      }
    };
  }]);