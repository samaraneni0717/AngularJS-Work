/**
 * Created by amarenes on 5/26/2017.
 */
angular.module('app').config(function ($provide) {
    $provide.decorator("$exceptionHandler",["$delegate",function ($delegate) {
        return function (exception,cause) {
            $delegate(exception,cause);
            alert(exception.message);
        }
    }]);
});