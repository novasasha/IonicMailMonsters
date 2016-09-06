angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('EmailsCtrl', function($scope) {
  $scope.emails = [
    { sender: 'Jacob',
      id: 1,
      title: "Hello",
      body: "Pour-over organic sriracha microdosing, mustache pop-up fanny pack narwhal blog art party. Kombucha cold-pressed sustainable, chartreuse plaid 3 wolf moon yr man braid sartorial venmo neutra cray biodiesel. Drinking vinegar banh mi keytar, banjo taxidermy plaid listicle tacos aesthetic distillery. Gluten-free semiotics iPhone pickled. VHS synth cornhole food truck polaroid, jean shorts readymade vice master cleanse brooklyn echo park organic. Wolf dreamcatcher tote bag hoodie VHS, occupy food truck cronut semiotics tousled vinyl. Street art cred beard selfies." },
    { sender: 'Robert',
      id: 2,
      title: "Hi",
      body: "Pour-over organic sriracha microdosing, mustache pop-up fanny pack narwhal blog art party. Kombucha cold-pressed sustainable, chartreuse plaid 3 wolf moon yr man braid sartorial venmo neutra cray biodiesel. Drinking vinegar banh mi keytar, banjo taxidermy plaid listicle tacos aesthetic distillery. Gluten-free semiotics iPhone pickled. VHS synth cornhole food truck polaroid, jean shorts readymade vice master cleanse brooklyn echo park organic. Wolf dreamcatcher tote bag hoodie VHS, occupy food truck cronut semiotics tousled vinyl. Street art cred beard selfies." },
    { sender: 'Kyrene',
      id: 3,
      title: "Hey",
      body: "Pour-over organic sriracha microdosing, mustache pop-up fanny pack narwhal blog art party. Kombucha cold-pressed sustainable, chartreuse plaid 3 wolf moon yr man braid sartorial venmo neutra cray biodiesel. Drinking vinegar banh mi keytar, banjo taxidermy plaid listicle tacos aesthetic distillery. Gluten-free semiotics iPhone pickled. VHS synth cornhole food truck polaroid, jean shorts readymade vice master cleanse brooklyn echo park organic. Wolf dreamcatcher tote bag hoodie VHS, occupy food truck cronut semiotics tousled vinyl. Street art cred beard selfies." },
    { sender: 'Sasha',
      id: 4,
      title: "Howdy",
      body: "Pour-over organic sriracha microdosing, mustache pop-up fanny pack narwhal blog art party. Kombucha cold-pressed sustainable, chartreuse plaid 3 wolf moon yr man braid sartorial venmo neutra cray biodiesel. Drinking vinegar banh mi keytar, banjo taxidermy plaid listicle tacos aesthetic distillery. Gluten-free semiotics iPhone pickled. VHS synth cornhole food truck polaroid, jean shorts readymade vice master cleanse brooklyn echo park organic. Wolf dreamcatcher tote bag hoodie VHS, occupy food truck cronut semiotics tousled vinyl. Street art cred beard selfies." },
    { sender: 'Helom',
      id: 5,
      title: "Helom",
      body: "Pour-over organic sriracha microdosing, mustache pop-up fanny pack narwhal blog art party. Kombucha cold-pressed sustainable, chartreuse plaid 3 wolf moon yr man braid sartorial venmo neutra cray biodiesel. Drinking vinegar banh mi keytar, banjo taxidermy plaid listicle tacos aesthetic distillery. Gluten-free semiotics iPhone pickled. VHS synth cornhole food truck polaroid, jean shorts readymade vice master cleanse brooklyn echo park organic. Wolf dreamcatcher tote bag hoodie VHS, occupy food truck cronut semiotics tousled vinyl. Street art cred beard selfies." },
    { sender: 'Derrick',
      id: 6,
      title: "Helom",
      body: "Pour-over organic sriracha microdosing, mustache pop-up fanny pack narwhal blog art party. Kombucha cold-pressed sustainable, chartreuse plaid 3 wolf moon yr man braid sartorial venmo neutra cray biodiesel. Drinking vinegar banh mi keytar, banjo taxidermy plaid listicle tacos aesthetic distillery. Gluten-free semiotics iPhone pickled. VHS synth cornhole food truck polaroid, jean shorts readymade vice master cleanse brooklyn echo park organic. Wolf dreamcatcher tote bag hoodie VHS, occupy food truck cronut semiotics tousled vinyl. Street art cred beard selfies." }
  ];
})

.controller('EmailCtrl', function($scope, $stateParams) {
});
