angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quizapiiaj-env.eba-5b8k6f7s.us-east-2.elasticbeanstalk.com/';

    return service;
}]);