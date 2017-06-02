/**
 * Created by amarenes on 5/27/2017.
 */
angular.module("saMenu").directive('saMenuItem',function () {
   return{
       scope:{
            label:'@',
           icon:'@',
           route:'@'
       },
       require:'^saMenu',
       templateUrl:"../ext-modules/saMenu/saMenuItem.tpl.html",
       link:function (scope, el, attr, ctrl) {

           scope.isActive = function () {
               // comparison with the selectedElement available from the function in the controller
               return el === ctrl.getActiveElement();
           };
            el.on('click',function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                //since we're using jQuery angular will have no idea that our scope is changing, so use $apply
                scope.$apply(function () {
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            });

       }
   }
});