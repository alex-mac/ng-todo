app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/components/home/home.view.html',
    controller: 'HomeCtrl'
  })
  .otherwise({
    templateUrl: 'app/components/404/404View.html',
    controller: 'app/components/404/404Controller.js'
  });

  $locationProvider.html5Mode(false).hashPrefix('!');
}]);
