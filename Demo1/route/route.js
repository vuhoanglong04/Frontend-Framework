angular.module('appRoute' , ['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/home', {    //khai bap ten route
        templateUrl : "views/home.html"
    })  
    $routeProvider.when('/add', {    //khai bap ten route
        templateUrl : "views/add.html"
    })  
});