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
  ];

  $scope.addToList = function(idx)
  {
    $scope.lists[idx].content.push({
      text: $scope.lists[idx].todoText,
      completed: "not-completed"
    });
    $scope.lists[idx].todoText = '';
  }

  $scope.deleteListItem = function(parentIdx, idx)
  {
    $scope.lists[parentIdx].content.splice(idx, 1);
  }

  $scope.markCompleted = function(parentIdx, idx)
  {
    $scope.lists[parentIdx].content[idx].completed =
    $scope.lists[parentIdx].content[idx].completed === "completed" ? "not-completed" : "completed";
  }

}]);
