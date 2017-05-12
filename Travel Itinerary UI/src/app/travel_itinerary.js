

angular.module('travelitinerary',['ui.router'])

    .config(['$stateProvider',function config ($stateProvider) {
        $stateProvider.state("travelitinerary",{
            url:"/travelitinerary",
            templateUrl: "src/app/travelitinerary.tpl.html",
            controller:"travelItineraryCtrl"
        });

    }])

    .service('TravelItineraryService',['$http','$log', function ($http,$log) {
       return{
           getTravelItineraryData:function () {
                return $http.get('http://playground.delachi.com/rest/travel/').then(function (response) {
                    $log.info(response.data);
                    return response.data;
                    }, function (reason) {
                    $scope.error = reason.data;
                    $log.info(reason);
                });
           }
       }
    }])
    .controller('travelItineraryCtrl',['TravelItineraryService','$scope',function (TravelItineraryService, $scope) {

        var vm =this;
        $scope.showAirlineDtls = false;
            $scope.showLodgingDetls=false;
            $scope.flightDetail  = null;

        TravelItineraryService.getTravelItineraryData().then(function (tripsData) {
            vm.tripsData = tripsData;
            console.log(tripsData);
        });
        // to display flight details upon the click of 'view more' in the ui
        vm.showFlightInfo = function ( flightInfo,flightDestPlace) {
            $scope.flightDestinationPlace= flightDestPlace;
            $scope.flightDetail = flightInfo;
            $scope.showAirlineDtls = true;
        };
        // to display lodging details upon the click of 'view more' in the ui
        vm.showLodgingInfo = function (lodgingInfo,lodgeDestPlace) {
            $scope.lodgingDetail = lodgingInfo;
            $scope.lodgeDestinationPlace= lodgeDestPlace;
            $scope.showLodgingDetls = true;
            if($scope.lodgingDetail.address1 === ""){
                $scope.lodgingDetail.address1 = "N/A";
            }
            else if($scope.lodgingDetail.address2 === ""){
                $scope.lodgingDetail.address2 = "N/A";
            }
        };

        //to hide the flight info details table
        vm.closeFlightInfo = function () {
            $scope.showAirlineDtls= false;
        };

        //to hide the lodging info details table
        vm.closeLodgingInfo = function () {
            $scope.showLodgingDetls= false;
        };

        }
    ]
    );