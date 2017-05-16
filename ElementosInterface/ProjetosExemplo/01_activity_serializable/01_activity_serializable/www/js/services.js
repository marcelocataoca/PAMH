angular.module('app.services', [])

    .factory('BlankFactory', [function () {

    }])

    .service('BlankService', [function () {

    }])

    .service('Dados', function () {
        var arrayInfo = [];

        var addInfo = function (newObj) {
            arrayInfo.push(newObj);
        }
        var getInfo = function () {
            return arrayInfo;
        }
        var emptyInfo = function () {
            arrayInfo = [];
        }
        return {
            addInfo: addInfo,
            getInfo: getInfo
        }
    })