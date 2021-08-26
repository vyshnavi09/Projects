let app = angular.module("myApp",['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/awards',{
        templateUrl:'templates/awards.html'
    }).when('/speech',{
        templateUrl:'templates/speech.html'
    }).when('/changes',{
        templateUrl:'templates/change.html'
    }).when('/upgrade',{
        templateUrl:'templates/master_card.html'
    }).when('/peace',{
        templateUrl:'templates/peace.html'
    }).when('/others',{
        templateUrl:'templates/other.html'
    })
});

app.controller('myController', function($scope, $interval){
    $scope.counter = new Date().toLocaleTimeString();;
    var increaseCounter = function(){
        $scope.counter = new Date().toLocaleTimeString();;
    }
    $interval(increaseCounter,1000,10)
});

app.controller('myCtrl', function($scope, $timeout) {
    $scope.myHeader = "Mary Teresa";
    $timeout(function () {
        $scope.myHeader = "Mother Teresa";
    }, 3000);
  });