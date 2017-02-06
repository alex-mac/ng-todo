app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.todos = [];
  $scope.todo = {};

  $scope.lists = [
    {
      name: "todos",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "groceries",
      content: "A second list yo."
    }
  ]
  $scope.addToList = function() {
    $scope.todos.push({
      text: $scope.todo.text,
      done: false
    });
    $scope.todo.text = '';

  }

}]);
