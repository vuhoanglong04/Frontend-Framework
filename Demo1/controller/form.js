var app =angular.module('myApp' , []);
app.controller("myController", function($scope){
        $scope.name = "";
        // $scope.gender = "";
        $scope.input = {
                course:{
                        All:false,
                        C:false,
                        JAVA:false,
                        PHP:false
                }
        };
        $scope.list= [
                {
                        id:1,
                        name:"Student"
                },
                {
                        id:2,
                        name : "Teacher"
                }
        ];
        $scope.submit = function(){
            
                //submit
                //    console.log($scope.course);

                //checkbox
                // console.log($scope.course);

                //select option 
                console.log($scope.selected);

        }
});