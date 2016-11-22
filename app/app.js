angular.module('eltiempo', ['ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/home/home.html",
                controller: "home"
            })
            .when("/tiempo", {
                templateUrl: "app/tiempo/tiempo.html",
                controller: "tiempo"
            })
            .otherwise({
                redirect: "/"
            })

    })

    .run(function(){
        console.log ('app del tiempo')
    });