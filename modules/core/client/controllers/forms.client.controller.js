'use strict';
angular.module('forms').controller('FormsController', ['$scope', 'Forms', 
  function($scope, Forms) {
    $scope.forms = Forms;
    $scope.detailedInfo = undefined;
    $scope.ind = undefined;
    $scope.showInstruction = true;
    $scope.showDeleteMessage = false;
    $scope.success = false;
    

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addForm = function() {
      var entry = {
        code: $scope.code, 
        name: $scope.name,
        coordinates: {
          latitude: $scope.lat,
          longitude: $scope.long
        },
        address: $scope.address
      };
      $scope.listings.push(entry);
      
      $scope.code = '';
      $scope.name = '';
      $scope.lat = '';
      $scope.long = '';
      $scope.address = '';
      
      $scope.success = true;
    };
    $scope.deleteForm = function(form) {
      var index = $scope.forms.indexOf(form);
      $scope.listings.splice(index, 1);
      $scope.showDeleteMessage = true;
    };
    $scope.showDetails = function(index) {
     $scope.showInstruction = false;
     $scope.ind = index;
    };

    
  }
]);