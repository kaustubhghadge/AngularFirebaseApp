(function(){
  angular.module('myapp',['ngMessages','ngRoute','firebase']);


    angular.module('myapp').config(moduleConfigFn);

    moduleConfigFn.$inject = ['$routeProvider'];

    function moduleConfigFn($routeProvider){
        $routeProvider
            .when('/login',{
            templateUrl: 'templates/login.html',
            controller: 'loginController'
        })
            .when('/home', {
                templateUrl : 'templates/home.html',
                controller: 'homeController'
            })

            .otherwise({
                redirectTo:'/login'
            });

    }


})();

