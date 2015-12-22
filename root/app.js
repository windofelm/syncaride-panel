
var app = angular.module('SyncaridePanel', ['ngRoute']);


app.config(function($routeProvider, $locationProvider){

    $routeProvider

        .when('/', {

            templateUrl: "templates/main.html",
            controller: "MainController"
        })

        .when('/Sample', {

            templateUrl: "templates/sample.html",
            controller: "SampleController"
        })

        .otherwise({
            redirectTo: '/'
        })

});


app.run(function($rootScope, $location){

    $rootScope.go = function (path) {

        $location.path(path);
    };

});