/**
 * Created by amarenes on 5/19/2017.
 */
"use strict";
//to bind  a string one time '@' symbol
//Attributes in directive shoulbe be in camel case and the same should be in snake case in html
angular.module("saFramework").directive("saFramework", function () {
    return{
        //we may want to embed the menu within the saFramework so set transclusion to true
        transclude:true,
        //isolate scope
        scope:{
               title:'@',
                subtitle:'@'
        },
        controller:"saFrameworkCtrl",
        //whenever you see this templateurl it means there may be dozens of projects gonna use this component
        //so it's not a good idea to give this kind of physical path
        // if you have grunt/gulp you can use $templateCache service to load templates
        templateUrl:"../ext-modules/saFramework/saFramework.tpl.html"

    };
});