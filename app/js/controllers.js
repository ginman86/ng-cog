'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('mainController', ['$scope', function($scope) {

  }])
  .controller('questionController', ['$scope', function($scope) {
    $scope.errorMessage = 'Please enter a valid answer.'
  }])
  .controller('demographicsController', ['$scope', function($scope) {

  }]);
