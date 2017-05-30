/**
 * Created by amarenes on 5/27/2017.
 */

angular.module("saMenu").directive('saMenu',function () {
    return{
        scope:{

        },
        //we want this menu to include menu items in this
        transclude:true,
        controller:"saMenuCtrl",
        templateUrl:"../ext-modules/saMenu/saMenu.tpl.html"
    }

});