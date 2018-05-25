/* ------------------------------------------------------- 

* Filename:     Adding Form Fields Dynamically
* Website:      http://www.shanidkv.com
* Description:  Shanidkv AngularJS blog
* Author:       Muhammed Shanid shanidkannur@gmail.com

---------------------------------------------------------*/

var app = angular.module('angularjs-starter', []);

  app.controller('MainCtrl', function($scope) {

  $scope.choices = [{id: 'choice1'}, {id: 'choice2'}];
  
  $scope.addNewChoice = function() {
    var newItemNo = $scope.choices.length+1;
    $scope.choices.push({'id':'choice'+newItemNo});
  };
    
  $scope.removeChoice = function() {
    var lastItem = $scope.choices.length-1;
    $scope.choices.splice(lastItem);
  };
  
});

