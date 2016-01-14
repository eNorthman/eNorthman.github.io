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
        controller: 'mainController',
        activetab: 'home'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'aboutController',
        activetab: 'about'
      }).
      when('/werkwijze', {
        templateUrl: 'partials/werkwijze.html',
        controller: 'mainController',
        activetab: 'werkwijze'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'contactController',
        activetab: 'contact'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);