
var app = angular.module('SyncaridePanel', ['ngRoute']);


app.config(function($routeProvider, $locationProvider){

    $routeProvider
        .when('/Sample', {

            templateUrl: "templates/sample.html",
            controller: "MainController"
        })

        .otherwise({
            redirectTo: '/'
        })


});