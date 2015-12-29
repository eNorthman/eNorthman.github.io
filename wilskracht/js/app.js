'use strict';

/* App Module */

var app = angular.module('app', [
  'ngRoute',
  'controllers',
  'directives'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'mainController'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'mainController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);