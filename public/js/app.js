// Declares the initial angular module "meanMapApp". Module grabs other controllers and services.
var app = angular.module('FettyMapApp', ['addCtrl', 'queryCtrl', 'headerCtrl', 'geolocation', 'gservice', 'ngRoute'])

    // Configures Angular routing -- showing the relevant view and controller when needed.
    .config(function($routeProvider){

        // Join Fetty Control Panel
        $routeProvider.when('/join', {
            controller: 'addCtrl',
            templateUrl: 'partials/addForm.html',

        // Find Fetty Fans Control Panel
        }).when('/find', {
            controller: 'queryCtrl',
            templateUrl: 'partials/queryForm.html',

        // Login Control Panel
        }).when('/login', {
            controller: 'loginCtrl',
            templateUrl: 'partials/loginForm.html',

        // All else forward to the Login Control Panel
        }).otherwise({redirectTo:'/join'})
    });
