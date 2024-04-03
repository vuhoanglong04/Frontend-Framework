window.ProductAddController = function($scope , $http  ,$location){
    var apiUrl = "http://localhost:3000/products";
    //List Category
    var listCategory = "http://localhost:3000/category";
    $scope.getAllCategory  = function(){
        $http.get(listCategory).then(function(response){
            if(response.status==200){
                $scope.categories = response.data;

            }
        })
    }
    $scope.getAllCategory();

    $scope.check={
        name: true,
        nameMinLenght:true,
        price:true , 
        priceNumber :true,
        category : true
    }
    $scope.onSubmitForm = function(){
        
        let checkName = true;
        let checkPrice = true;
        let checkCategoryId = true;

        //Name
        if(!$scope.inputValidate || !$scope.inputValidate.name  ){
            $scope.check.name =false
            $scope.check.nameMinLenght = true
            checkName = false;
        }else if($scope.inputValidate.name && $scope.inputValidate.name.length <=6){
            $scope.check.nameMinLenght = false
            $scope.check.name =true
            checkName = false;

        }else  {
            $scope.check.name = true;
            $scope.check.nameMinLenght = true
            checkName = true;

        }
        //Price
        if(!$scope.inputValidate || !$scope.inputValidate.price){
            $scope.check.price =false;
            $scope.check.priceNumber =true;
            checkPrice = false;
        }else if($scope.inputValidate.price && isNaN($scope.inputValidate.price)){
            $scope.check.price =true;
            $scope.check.priceNumber =false;
            checkPrice = false;
        }
        else {
            $scope.check.price =true;
            $scope.check.priceNumber =true;
            checkPrice = true;
        }


        //Category ID
        if(!$scope.inputValidate || $scope.inputValidate.category==null){
            $scope.check.category =false;
            checkCategoryId = false;
        }
        else {
            $scope.check.category =true;
            checkCategoryId = true;
        }

        if(checkName && checkPrice && checkCategoryId){
            var newItem ={
                ...$scope.inputValidate
            }
            $http.post(
                apiUrl,
                newItem 
            ).then(function(response){
                if(response.status ==201){
                   $location.path("/products/list");
                }
            });
        }
    }

    $scope.onCancel = function(){
        $location.path('products/list');
    }
}