'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: 'mainController'});
  $routeProvider.when('/demographics', {templateUrl: 'partials/demographics.html', controller: 'demographicsController'});
  $routeProvider.when('/question', {templateUrl: 'partials/question.html', controller: 'questionController'});
  $routeProvider.otherwise({redirectTo: '/main'});
}]);
