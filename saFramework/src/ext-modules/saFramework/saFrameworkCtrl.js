/**
 * Created by amarenes on 5/20/2017.
 */
"use strict";

angular.module("saFramework").controller("saFrameworkCtrl",['$scope','$window','$timeout','$rootScope',
    function ($scope,$window,$timeout,$rootScope) {
        $scope.$on('sa-menu-item-selected-event',function (evt,data) {
            $scope.routeString = data.route;
            checkWidth();
            broadcastMenuState();
        });
        $scope.isMenuButtonVisible = true;

        // now to hide the menu button for devices with >768px
        //whenever the f/w is resized or device rotated or browser window is resized
        //on pro about jQuery is we can add Namespace to the event, in this case it is saFramework
        $($window).on('resize.saFramework',function () {
            $scope.$apply(function () {
                checkWidth();
                broadcastMenuState();
            });
        });

        $scope.$on("$destroy",function () {
            $($window).off('resize.saFramework');
        });

        var checkWidth = function () {
           // var width = $($window).innerWidth();
            // this expression even considers scroll bar width too
            var width = Math.max($($window).width(), $window.innerWidth);
            //if larger than tablet then show menu by default
            $scope.isMenuVisible = (width > 768);
            $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        };

        $scope.menuButtonClicked =function () {
           $scope.isMenuVisible = !$scope.isMenuVisible;
           // to send to menu ctrl
           broadcastMenuState();
           // as the scopes are changing in the above two lines we need to call $apply
           /* $scope.$apply();*/
        };
        
        var broadcastMenuState = function () {
            //so any listener who cares if the menu is visible or not should listen to 'sa-menu-show' event
            $rootScope.$broadcast('sa-menu-show',
                {
                    show: $scope.isMenuVisible
                });
        };



        $timeout(function () {
            checkWidth();
        },0);
    }


]);