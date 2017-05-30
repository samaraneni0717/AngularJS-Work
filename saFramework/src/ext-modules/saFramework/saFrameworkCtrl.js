/**
 * Created by amarenes on 5/20/2017.
 */
"use strict";

angular.module("saFramework").controller("saFrameworkCtrl",['$scope',
    function ($scope) {
        $scope.$on('sa-menu-item-selected-event',function (evt,data) {
            $scope.route = data.route;
        })
    }

]);