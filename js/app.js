// ----------------------------------------
// App
// ----------------------------------------

var Widgets = angular.module('Widgets', []);

// custom pagination filter
Widgets.filter('startFrom', function() {
  return function(collection, start) {
    return collection.slice(start);
  }
});




