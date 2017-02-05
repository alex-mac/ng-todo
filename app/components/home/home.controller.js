app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.todos = [];
  $scope.todo = {};

  $scope.addToList = function() {
    $scope.todos.push({
      text: $scope.todo.text,
      done: false
    });
    $scope.todo.text = '';
    
  }

}]);
