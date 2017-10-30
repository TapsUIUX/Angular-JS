//creating Module, injacting ui-router Module
    angular.module('myApp', ['ui.router'])

        //Page Structure
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('Home', {
                    url: '/home',
                    views: {
                        '': {
                            templateUrl: 'Views/HomePage.html',
                            controller: 'mainCtrl'
                        },
                        'inputForm@Home': {
                            templateUrl: 'Views/inputForm.html'
                        },
                        'outPut@Home': {
                            templateUrl: 'Views/outPut.html'
                        }

                    }

                }); //state end

            $urlRouterProvider.otherwise('/home');

        }]); //config ends 
