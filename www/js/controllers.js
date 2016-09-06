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
    { sender: 'Naomi David',
      id: 1,
      title: "Hello",
      body: "Pour-over organic sriracha microdosing, mustache pop-up fanny pack narwhal blog art party. Kombucha cold-pressed sustainable, chartreuse plaid 3 wolf moon yr man braid sartorial venmo neutra cray biodiesel. Drinking vinegar banh mi keytar, banjo taxidermy plaid listicle tacos aesthetic distillery. Gluten-free semiotics iPhone pickled. VHS synth cornhole food truck polaroid, jean shorts readymade vice master cleanse brooklyn echo park organic. Wolf dreamcatcher tote bag hoodie VHS, occupy food truck cronut semiotics tousled vinyl. Street art cred beard selfies." },
    { sender: 'Dev Bootcamp',
      id: 2,
      title: "Only 19 weeks!",
      body: "Mlkshk shoreditch hashtag four loko, single-origin coffee flannel kombucha seitan street art. Wayfarers typewriter schlitz health goth kogi, semiotics cardigan gastropub godard selvage chartreuse. Fingerstache fanny pack pork belly, austin +1 photo booth synth polaroid. Waistcoat man bun cornhole, tousled selfies affogato deep v aesthetic disrupt mumblecore. Kombucha vegan locavore brooklyn put a bird on it, art party typewriter vice chambray. Slow-carb vice cred stumptown chambray listicle +1 truffaut, XOXO migas portland retro austin flexitarian. Umami messenger bag readymade, XOXO cliche occupy seitan meditation salvia post-ironic helvetica chartreuse lo-fi put a bird on it." },
    { sender: 'Naomi David',
      id: 3,
      title: "Hello again",
      body: "Farm-to-table forage pour-over, next level butcher intelligentsia vice. Craft beer drinking vinegar VHS, seitan venmo post-ironic quinoa cronut squid semiotics keffiyeh mlkshk man braid YOLO stumptown. Street art raw denim fingerstache, pug pabst lomo keytar portland vegan meggings poutine. Brooklyn pickled crucifix lumbersexual, polaroid tattooed blue bottle. Kitsch gluten-free green juice kale chips semiotics, knausgaard YOLO kogi pug wayfarers. Cardigan lumbersexual marfa, lo-fi art party iPhone normcore shoreditch synth beard tattooed green juice DIY typewriter keffiyeh. XOXO jean shorts food truck narwhal artisan shabby chic master cleanse scenester you probably haven't heard of them mumblecore." },
    { sender: 'Naomi David',
      id: 4,
      title: "Heeeey",
      body: "Franzen freegan man braid viral, next level four loko narwhal brooklyn organic deep v church-key neutra kinfolk taxidermy sustainable. Ugh hammock selfies, polaroid venmo heirloom aesthetic. Gluten-free salvia chartreuse schlitz hella, distillery disrupt XOXO kitsch PBR&B craft beer green juice wolf williamsburg chicharrones. Flannel before they sold out craft beer ugh. Banh mi everyday carry artisan, blog raw denim fashion axe bushwick yuccie pop-up helvetica mlkshk authentic 8-bit green juice keffiyeh. Man braid chillwave pork belly chia banh mi, knausgaard chambray twee fixie +1 gastropub ethical. +1 trust fund cronut, cold-pressed irony flannel lo-fi tousled tattooed." },
    { sender: 'John Doe',
      id: 5,
      title: "Hello from John",
      body: "Bitters cornhole direct trade heirloom PBR&B kale chips, kitsch biodiesel marfa migas shoreditch sriracha. Normcore dreamcatcher actually fingerstache. Offal gluten-free ramps literally. +1 ugh fingerstache keytar, brooklyn gochujang truffaut hella dreamcatcher. Plaid tumblr readymade four dollar toast. Authentic meh four loko, selvage wolf hella viral pour-over. Plaid cliche before they sold out thundercats." },
    { sender: 'Dev Bootcamp',
      id: 6,
      title: "Howdy?",
      body: "Gastropub mustache occupy scenester, VHS ramps tote bag banh mi pabst sriracha. Lo-fi offal beard pinterest, williamsburg schlitz ugh. Disrupt before they sold out cray, gluten-free lo-fi godard kickstarter microdosing normcore keffiyeh you probably haven't heard of them swag. Organic direct trade etsy actually, deep v affogato retro readymade yr butcher keytar. Blog meditation drinking vinegar seitan shoreditch, normcore pinterest bushwick venmo. Flexitarian swag 3 wolf moon, farm-to-table offal fingerstache franzen normcore gastropub biodiesel yuccie wolf. Migas williamsburg taxidermy polaroid, fanny pack normcore listicle austin messenger bag disrupt mumblecore vegan narwhal marfa." }
  ];
})

.controller('EmailCtrl', function($scope, $stateParams) {
  $scope.email = [
    { sender: 'Naomi David',
      id: 1,
      title: "Hello",
      body: "Pour-over organic sriracha microdosing, mustache pop-up fanny pack narwhal blog art party. Kombucha cold-pressed sustainable, chartreuse plaid 3 wolf moon yr man braid sartorial venmo neutra cray biodiesel. Drinking vinegar banh mi keytar, banjo taxidermy plaid listicle tacos aesthetic distillery. Gluten-free semiotics iPhone pickled. VHS synth cornhole food truck polaroid, jean shorts readymade vice master cleanse brooklyn echo park organic. Wolf dreamcatcher tote bag hoodie VHS, occupy food truck cronut semiotics tousled vinyl. Street art cred beard selfies." }
  ];
});
