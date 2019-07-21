(function() {
  /// /////////////////////////////////////////////////////////////////////////////////
  // Angular app
  /// /////////////////////////////////////////////////////////////////////////////////
  let ngApp = angular.module("epgpApp", ["ngRoute", "ngMaterial", "ngMessages", "ngSanitize"]);
  ngApp.run(function() {});

  ngApp.filter("orderObjectBy", function() {
    return function(input, attribute) {
      if (!angular.isObject(input)) return input;

      var array = [];
      for (var objectKey in input) {
        array.push(input[objectKey]);
      }

      array.sort(function(a, b) {
        a = parseInt(a[attribute]);
        b = parseInt(b[attribute]);
        return a - b;
      });
      return array.reverse();
    };
  });

  ngApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $routeProvider.when("/", {
      templateUrl: "../public/views/title/title.directive.html",
      controller: "titleController"
    });
    /*.when("/members", {
      templateUrl : "/views/members/members.html",
      controller : "membersController"
    })*/
  });
})();
