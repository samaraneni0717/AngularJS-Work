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
                // passing the scope of the saMenuGroupDirective from that directive ctrlr
             this.setOpenMenuScope = function (scope) {
                 $scope.openMenuScope = scope;
             };
            
             $scope.$on('sa-menu-show',function (evt, data) {
                  $scope.showMenu = data.show;
             });
            //whoever is using this component need to know the orientation so broadcast the event
             $scope.toggleMenuOrientation = function () {
                 //close any open menu
                 if($scope.openMenuScope)
                     $scope.openMenuScope.closeMenu();

                 $scope.isVertical = !$scope.isVertical;
                 $rootScope.$broadcast('sa-menu-orientation-changed-event',
                     {
                         isMenuVertical: $scope.isVertical
                     }
                 )
             };
                //to hide the pop up menu upon any click on the screen
        //here we are binding the click even and passing it (e)
             angular.element(document).bind('click',function (e) {
                 if($scope.openMenuScope  && !$scope.isVertical){
                     //if we are clicking within the menu you return without closing the menu
                     if($(e.target).parent().hasClass('sa-selectable-item'))
                         return;
                     $scope.$apply(function () {
                         $scope.openMenuScope.closeMenu();
                     });
                     // the click doesn't get passed outside of the
                     e.preventDefault();
                     e.stopPropagation();
                 }
             })

        }
    ]
);