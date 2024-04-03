// function myFunc($scope) { //luon co tham so scope
//  
//     //đằng sau scope là biến mình khởi tạo
//     //để render ra view
// }
    //Khai báo angular js + vùng sử dụng
var app = angular.module("myapp", []);
    //map hàm myFunc với vùng myController để render dữ liệu
app.controller("myController", function($scope){
//    $scope.welcome = "Hello world";
//     $scope.masv = 'PH38689';
//     $scope.tensv = 'Vu Hoang Long'
//     $scope.date = '25/08/2004'
// 
    // $scope.sinhvien = {
    //     welcome: 'Hello world',
    //     masv:"PH38689",
    //     tensv : "Vu Hoang Long",
    //     date :2004
    // }
    // $scope.currentDate = new Date();

    //Array
    $scope.sinhvien =[
        {
            'masv' : 'PH38689',
            'tensv' : 'Vu Hoang Long', 
            'date':2004
        },
        {
            'masv' : 'PH1111',
            'tensv' : 'Long', 
            'date':202 
        }
    ]
});