var app = angular.module("ourApp", []);

app.factory("instagramResponse", ["$window",function($window) {
    return $window.instagramResponse;
}])