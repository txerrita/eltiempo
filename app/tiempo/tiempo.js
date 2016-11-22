angular.module('eltiempo')

    .controller('tiempo', function($scope, $http){
        //Comienzo declaracion
        $scope.ciudad ="";
        $scope.tiempo = "";
        //finalizo declaracion

        $scope.buscarCiudad = function () {
            console.log('buscar ciudad');
            
            //llamada a la api
            var url = "http://api.openweathermap.org/data/2.5/weather?q="+$scope.ciudad+"&appid=1fea7bb734ba36400c5b8f22710e0d80";
            $http.get(url) 
                .success (function(result) {
                    console.log(result);
                    $scope.tiempo = result
                })
                .catch(function(error){
                    console.log(error)
                })

        }
    });