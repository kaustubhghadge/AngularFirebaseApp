(function(){

angular.module('myapp')
    .controller('loginController',loginControllerFn);

    function loginControllerFn($scope, $window, $document, $location){


        $scope.nextPage = function(){
            $scope.username = document.getElementById('username').value;
            $scope.password = document.getElementById('password').value;
            if($scope.username== 'admin' && $scope.password== 'admin' ){
                $location.url("/home");
            }
            else{
                $location.url("/user");
                alert("Username and password is incorrect")
            }
        }

    }


})();


