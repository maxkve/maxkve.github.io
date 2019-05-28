(function() {
  /// /////////////////////////////////////////////////////////////////////////////////
  // Angular app
  /// /////////////////////////////////////////////////////////////////////////////////
  let ngApp = angular.module("epgpApp", [
    "ngRoute",
    "ngMaterial",
    "ngMessages"
  ]);
  ngApp.run(function() {
    console.log("Booting up...");
  });

  ngApp.config(function($routeProvider) {
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
