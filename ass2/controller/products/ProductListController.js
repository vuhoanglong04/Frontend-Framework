window.ProductListController = function($scope , $http , $location) {
    var apiUrl = "http://localhost:3000/products";
    $scope.getData  = function(){
        $http.get(apiUrl).then(function(response){
            if(response.status==200){
                $scope.products = response.data;
            }
        })
    }
    $scope.getData();

    //Delete
    $scope.onDelete = function(deleteID){
        let  confirm = window.confirm("Are you sure you want to delete");
        if(confirm){
            $http.delete(`${apiUrl}/${deleteID}`).then(
                function(response){
                        if(response.status==200){
                            $scope.getData();
                        }
                }
            )
        }
    };
    //Edit
    $scope.onEdit = function(editID){
        $location.path(`/products/${editID}/edit`)
    }

    
};