var app = angular.module('caffeinehit.controllers', []);

app.controller("YelpController", function($scope, YelpService, NgMap) {
    $scope.map;
    $scope.$on('mapInitialized', function(event, map) {

        $scope.map = map;
    });

    $scope.yelp = YelpService;
    $scope.yelp.cafe = $scope.yelp.results[0];
    $scope.doRefresh = function() {
        if (!$scope.yelp.isLoading) {
            $scope.yelp.refresh()
                .then(function() {
                    $scope.$broadcast('scroll.refreshComplete');
                });
        }
    };

    $scope.loadMore = function() {
        console.log("loading");
        if ($scope.yelp.hasMore) {
            $scope.yelp.next()
                .then(function() {
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                });
        }
    };

    $scope.getDirections = function(cafe) {
        var destination = [
            cafe.location.coordinate.latitude,
            cafe.location.coordinate.longitude
        ];
        var source = [
            $scope.yelp.lat,
            $scope.yelp.lon
        ];
        launchnavigator.navigate(destination, source);

    };

    $scope.openMap = function(cafe) {
        var destination = [
            cafe.location.coordinate.latitude,
            cafe.location.coordinate.longitude
        ];
        var source = [
            $scope.yelp.lat,
            $scope.yelp.lon
        ];
        launchnavigator.navigate(destination, source);

    };


    $scope.showCafeDetail = function(event, cafe) {
        $scope.cafe = cafe;
        $scope.map.scope.showInfoWindow.apply(this, [event, 'bar-info-window']);
    };


});