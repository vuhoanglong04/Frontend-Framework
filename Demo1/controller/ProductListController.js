window.ProductListController = function($scope, $http, $location){

    // tạo đường dẫn apiUrl dể gọi API
    var apiUrl = "http://localhost:3000/products";
    $scope.getData = function(){
        //gọi để lấy data
        $http.get(apiUrl).then(function(response){
            // nếu như response trả về thành công
            if(response.status == 200){
                // tạo ra biến products để hứng dữ liệu
                // từ phía json-server trả về
                $scope.products = response.data;
            }
        })
    }
    $scope.getData();
    
}