var widgets = angular.module('widgets', []);

widgets.controller('RestaurantCtrl',
  ['$scope',
  function($){
    $.restaurants = [];
    $.name;
    $.typeOfFood;
    $.createRestaurant = function() {
      $.restaurants.push({ name: $.name, typeOfFood: $.typeOfFood });
      $.name = "";
      $.typeOfFood = "";
      console.log($.restaurants);
    };
  }]);
