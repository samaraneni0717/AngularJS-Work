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

       }
   }
});