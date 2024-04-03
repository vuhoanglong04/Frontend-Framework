window.CategoryEditController = function ($scope , $http , $routeParams , $location){
    var apiUrl = "http://localhost:3000/category"
    var id = $routeParams.id;
    $scope.check={
        name: true,
        nameMinLenght :true
    }
    $scope.text={
        nameValidate: ''
    }
    $scope.getProductInfor = function(){
        $http.get(`${apiUrl}/${id}`).then(function(response){
            if(response.status ==200){
                $scope.ct = response.data;
                $scope.inputValidate ={
                    name : response.data.name,
                }
            }   
        }
        ).catch(function(error){ 
            $scope.message  = `${error.statusText} product with id ${id}`;
        })
    }
    $scope.getProductInfor();

    $scope.onUpdate = function(){
        let success = true;
        if(!$scope.inputValidate || !$scope.inputValidate.name  ){
            $scope.check.name =false
            $scope.check.nameMinLenght = true
            nameValidate = "Please enter name category";
            success = false;
        }else if($scope.inputValidate.name && $scope.inputValidate.name.length <=6){
            $scope.check.nameMinLenght = false
            $scope.check.name =true
            nameValidate = "Category name must be at least 6 characters";

            success = false;
        }else  {
            $scope.check.name = true;
            $scope.check.nameMinLenght = true
            success = true;
        }

        if(success){
            var updateCategory ={
                ...$scope.inputValidate
            }
            $http.put(
                `${apiUrl}/${id}`,
                updateCategory 
            ).then(function(res){
                if(res.status == 200){
                    $location.path('category/list');
                }
            })
        }
    }

    $scope.onCancel = function(){
        $location.path('category/list');
    }
}