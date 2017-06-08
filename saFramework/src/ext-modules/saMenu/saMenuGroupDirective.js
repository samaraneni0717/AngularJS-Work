/**
 * Created by amarenes on 6/1/2017.
 */
"use strict";
angular.module('saMenu').directive('saMenuGroup',function () {
   return{
       scope:{
            label:'@',
            icon:'@'
       },
       require:'^saMenu',
       transclude:true,
       templateUrl:'../ext-modules/saMenu/saMenuGroup.tpl.html',
       link:function (scope, el, attrs, ctrl) {
            scope.isOpen =false;
           // scope.closeMenu =
            scope.clicked = function () {
                scope.isOpen =  !scope.isOpen;

                if($(el).parents('.sa-subitem-section').length == 0){
                    scope.setSubmenuPosition();
                }
            };
            scope.isVertical = function () {
                return ctrl.isVertical() ||  $('el').parents('.sa-subitem-section').length>0;
            };

           scope.setSubmenuPosition = function () {
               var pos = el.offset();
               $('.sa-subitem-section').css({'left':pos.left + 20, 'top':36});
           }
       }
   }
});