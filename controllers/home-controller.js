/**
 * Created by Kaustubh.
 */
(function(){

    angular.module('myapp')
        .controller('homeController',homeControllerFn);
    function homeControllerFn($scope, $firebaseArray){

        console.log("invoked");

        var myProducts=new Firebase('https://a20355295.firebaseio.com/products');
        $scope.products=$firebaseArray(myProducts);

        /*$scope.products = [
            {
                productName: "Leaf Rake",
                productCode: "GDN0011",
                description: "Leaf rake with 48-inch wooden handle.",
                price: "19.95"
            },
            {
                "productName": "Garden Cart",
                "productCode": "GDN0023",
                "description": "15 gallon capacity rolling garden cart",
                "price": "32.99"
            },
            {
                "productName": "Hammer",
                "productCode": "TBX0048",
                "description": "Curved claw steel hammer",
                "price": "8.99"
            },
            {
                "productName": "Saw",
                "productCode": "TBX0022",
                "description": "15-inch steel blade hand saw",
                "price": "11.55"
            }
        ];*/

          $scope.cancelEdit=function(){
        $scope.editFormShow=false;       
        }
        $scope.cancelAdd=function(){
        $scope.addFormShow=false;       
        }





        $scope.showForm=function(){
            $scope.addFormShow=true;
            $scope.editFormShow=false;
            clearForm();
        }

        $scope.hideForm=function(){
            $scope.addFormShow=false;
        }

        function clearForm(){

            $scope.productName="";
            $scope.productCode="";
            $scope.description="";
            $scope.price="";
        }

        $scope.addFormSubmit=function(){
          
        if(!($scope.productName||$scope.productCode||$scope.price)){

             //alert("Enter details");
        }

        else{
        $scope.products.$add({
            productName:$scope.productName,
            productCode:$scope.productCode,
            description:$scope.description,
            price:$scope.price

        });
        clearForm();
        }
        }

        $scope.showProduct=function(product){

            $scope.editFormShow=true;
            $scope.addFormShow=false;
            $scope.productName=product.productName;
            $scope.productCode=product.productCode;
            $scope.description=product.description;
            $scope.price=product.price;
            $scope.id=product.$id;
        }

        $scope.editFormSubmit=function(){
            var id=$scope.id;
            var record=$scope.products.$getRecord(id);
            record.productName=$scope.productName;
            record.productCode=$scope.productCode;
            record.description=$scope.description;
            record.price=$scope.price;
            $scope.product.$save(record);
        }

        $scope.deleteProduct=function(product){
            $scope.products.$remove(product);
        }

    }


})();
