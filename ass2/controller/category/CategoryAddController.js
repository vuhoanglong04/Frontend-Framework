window.CategoryAddController = function($scope , $http  ,$location){
    var apiUrl = "http://localhost:3000/category";
    $scope.check={
        name: true,
        nameMinLenght :true
    }
    $scope.text={
        nameValidate: ''
    }
    $scope.onSubmitForm = function(){
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
            console.log(1);
            var newCategory ={
                ...$scope.inputValidate
            }
            $http.post(
                apiUrl,
                newCategory 
            ).then(function(response){
                if(response.status ==201){
                   $location.path("/category/list");
                }
            });
        }
    }

    $scope.onCancel = function(){
        $location.path('category/list');
    }
}