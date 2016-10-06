var app = angular.module('mealtrack.controllers.authentication', []);

/*********************************************************************
 * LoginCtrl
 *********************************************************************/
app.controller('LoginCtrl', function($scope, $state, AuthService) {

    $scope.formData = {
        "email": "",
        "password": ""
    };
    $scope.form;

    $scope.login = function(form) {
        console.log(form);
        $scope.form = form;
        console.log("LoginCtrl::login");
        if (form.$valid) {

        } else {
            console.log("ERROR");
        }
        //TODO
    };

});

/*********************************************************************
 * SignupCtrl
 *********************************************************************/
app.controller('SignupCtrl', function($scope, $state, AuthService) {

    $scope.formData = {
        "name": "",
        "email": "",
        "password": ""
    };

    $scope.signup = function() {
        console.log("SignupCtrl::signup");
        //TODO
    };

});