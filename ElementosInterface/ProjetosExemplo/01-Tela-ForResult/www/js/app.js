// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives', 'app.services',])

  .config(function ($ionicConfigProvider, $sceDelegateProvider) {


    $sceDelegateProvider.resourceUrlWhitelist(['self', '*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

  })

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  /*
    This directive is used to disable the "drag to open" functionality of the Side-Menu
    when you are dragging a Slider component.
  */
  .directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function ($ionicSideMenuDelegate, $rootScope) {
    return {
      restrict: "A",
      controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

        function stopDrag() {
          $ionicSideMenuDelegate.canDragContent(false);
        }

        function allowDrag() {
          $ionicSideMenuDelegate.canDragContent(true);
        }

        $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
        $element.on('touchstart', stopDrag);
        $element.on('touchend', allowDrag);
        $element.on('mousedown', stopDrag);
        $element.on('mouseup', allowDrag);

      }]
    };
  }])

  /*
    This directive is used to open regular and dynamic href links inside of inappbrowser.
  */
  .directive('hrefInappbrowser', function () {
    return {
      restrict: 'A',
      replace: false,
      transclude: false,
      link: function (scope, element, attrs) {
        var href = attrs['hrefInappbrowser'];

        attrs.$observe('hrefInappbrowser', function (val) {
          href = val;
        });

        element.bind('click', function (event) {

          window.open(href, '_system', 'location=yes');

          event.preventDefault();
          event.stopPropagation();
        });
      }
    };
  })

  .controller("1_activity_forResultCtrl", function ($scope, $state, taskToDo, $ionicPopup, $rootScope, $location, $window) {
    $scope.items = [];
    var retorno = [];

    retorno = taskToDo.get();
    for (var i = 0; i < retorno.length; i++) {
      $scope.items.push({
        name: retorno[i].name,
        description: retorno[i].description
      })
    }

    

    $scope.goPageInsert = function () {
      $location.path("/page");
    }
  })

  .controller("pageCtrl", function ($scope, $location, taskToDo, $rootScope, $state) {
    $scope.input = [];
    $scope.addTask = function (name, description) {
      taskToDo.add({ name, description });
      var arr = taskToDo.get();
      $state.transitionTo('menu.1_activity_forResult', {}, {
        reload: true, inherit: false, notify: true
      });
    }
  })