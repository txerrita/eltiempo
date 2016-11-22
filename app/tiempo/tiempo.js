angular.module('eltiempo')

    .controller('tiempo', function($scope, dataservice){
        //Comienzo declaracion
        $scope.ciudad ="";
        $scope.tiempo = "";
        //finalizo declaracion

        $scope.buscarCiudad = function () {
            console.log('buscar ciudad');
            
            //llamada a la api
            dataservice.getweather($scope.ciudad)
                .success (function(result) {
                    $scope.tiempo = result;
                    console.log(result);
                })
                .catch(function(error){
                    console.log(error)
                })

        }
    });