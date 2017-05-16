angular.module('app.services', [])

	// .factory('BlankFactory', [function(){

	// }])

	// .service('BlankService', [function(){

	// }]);

	.service('VideoService', function ($q) {
		var deferred = $q.defer();
		var promise = deferred.promise;

		promise.success = function (fn) {
			promise.then(fn);
			return promise;
		}
		promise.error = function (fn) {
			promise.then(null, fn);
			return promise;
		}
	});

