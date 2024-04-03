angular.module('myApp' ,['ngRoute']).config(function($routeProvider){
    //Products
    $routeProvider.when('/' , {
        templateUrl: 'view/products/list.html',
        controller : ProductListController
    }).when('/category/list' , {
        templateUrl: 'view/category/list.html',
        controller : CategoryListController
    }).when('/category/add' , {
        templateUrl: 'view/category/add.html',
        controller : CategoryAddController
    }).when('/category/:id/edit' , {
        templateUrl: 'view/category/edit.html',
        controller : CategoryEditController
    }).when('/products/list' , {
        templateUrl: 'view/products/list.html',
        controller : ProductListController
    }).when('/products/add' , {
        templateUrl: 'view/products/add.html',
        controller : ProductAddController
    }).when('/products/:id/edit' , {
        templateUrl: 'view/products/edit.html',
        controller : ProductEditController
    })
})