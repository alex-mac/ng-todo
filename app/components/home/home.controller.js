app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.todos = [];
  $scope.todo = {};

  $scope.lists = [
    {
      name: "todos",
      todoText: "",
      content: [],
    },
    {
      name: "groceries",

      todoText: "",
      content: []
    }
  ]
  $scope.addToList = function(idx) {
    $scope.lists[idx].content.push({
      text: $scope.lists[idx].todoText,
      done: false
    });
    $scope.lists[idx].todoText = '';

  }

}]);
