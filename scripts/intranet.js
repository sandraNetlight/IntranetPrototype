var myApp = angular.module('myApp', ['ngMaterial']);

myApp.controller('MainController',['$scope','$http',function($scope, $http){
  $scope.page = "Start";
  $scope.category = "";
  $scope.office = "Berlin";
  $http.get('menu.Json').success(function(data) {
    $scope.menu = data;
  });

  $scope.openPage = function(p, c) {
            $scope.page = p;
            $scope.category = c;
        };

}]);
