var widgets = angular.module('widgets', []);

widgets.controller('RestaurantCtrl',
  ['$scope',
  function($){
    $.restaurants = [];
    $.name;
    $.typeOfFood;
    $.imgUrl;

    $.createRestaurant = function() {
      $.restaurants.push({ name: $.name, typeOfFood: $.typeOfFood, url: $.imgUrl});
      $.name = "";
      $.typeOfFood = "";
      $.imgUrl = "";
      console.log($.restaurants);
    };

    $.removeRestaurant = function(rest) {

      var index = $.restaurants.indexOf(rest);
      $.restaurants.splice(index, 1);
    };

  }]);
