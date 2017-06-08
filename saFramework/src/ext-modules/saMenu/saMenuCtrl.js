/**
 * Created by amarenes on 5/27/2017.
 */
'use strict';
angular.module('saMenu').controller('saMenuCtrl',
    ['$scope','$rootScope',function ($scope,$rootScope) {

            $scope.isVertical = true;
             $scope.showMenu = true;
             this.getActiveElement = function () {
                 return $scope.activeElement;
             };
             this.setActiveElement =function (el) {
                 $scope.activeElement = el;
             };
             
             this.isVertical = function () {
                 return $scope.isVertical;
             };

             this.setRoute = function (route) {
                 // we need to emit this route to the other controller
                 //but using $emit may allow other listeners to know about this event
                 //to use service 'publisher' 'subscriber' type is a bit complicated
                 // so using $rootScope.$broadcast we're able to catch the listener
                 //Note: earlier usage of $rootScope.$broadcast will send to all scopes and is a performance issue but now not
                 $rootScope.$broadcast('sa-menu-item-selected-event',
                     {route:route});
             };
            
             $scope.$on('sa-menu-show',function (evt, data) {
                  $scope.showMenu = data.show;
             });
            //whoever is using this component need to know the orientation so broadcast the event
             $scope.toggleMenuOrientation = function () {
                 $scope.isVertical = !$scope.isVertical;
                 $rootScope.$broadcast('sa-menu-orientation-changed-event',
                     {
                         isMenuVertical: $scope.isVertical
                     }
                 )
             }

        }
    ]
);