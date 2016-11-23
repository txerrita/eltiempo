angular.module('eltiempo')

    .factory ('dataservice', function ($http){
        var service = {};
        service.getweather = function(ciudad) {
            var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&units=metric&appid=1fea7bb734ba36400c5b8f22710e0d80';
            return $http.get(url)
        };

        return service

    });