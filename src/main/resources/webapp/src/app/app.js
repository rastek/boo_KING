'use strict';

angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider,
                      $mdIconProvider) {
        $stateProvider
            .state('start', {
                url: '',
                templateUrl: 'app/views/start.html',
                controller: 'StartController',
                controllerAs: 'vm'
            })
            .state('dashboard', {
                url: '',
                templateUrl: 'app/views/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'vm',
                abstract: true
            })
            .state('dashboard.summary', {
                url: '/summary',
                templateUrl: 'app/views/summary.html',
                data: {
                    title: 'summary'
                }
            })
            .state('dashboard.profile', {
                url: '/profile',
                templateUrl: 'app/views/dashboard/pages/profile.html',
                controller: 'ProfileController',
                controllerAs: 'vm',
                data: {
                    title: 'Profile'
                }
            })
            .state('dashboard.table', {
                url: '/table',
                controller: 'TableController',
                controllerAs: 'vm',
                templateUrl: 'app/views/dashboard/pages/table.html',
                data: {
                    title: 'Table'
                }
            });

        $urlRouterProvider.otherwise('/summary');

        $mdThemingProvider
            .theme('default')
            .primaryPalette('grey', {
                'default': '600'
            })
            .accentPalette('teal', {
                'default': '500'
            })
            .warnPalette('defaultPrimary');

        $mdThemingProvider.theme('dark', 'default')
            .primaryPalette('defaultPrimary')
            .dark();

        $mdThemingProvider.theme('grey', 'default')
            .primaryPalette('grey');

        $mdThemingProvider.theme('custom', 'default')
            .primaryPalette('defaultPrimary', {
                'hue-1': '50'
            });

        $mdThemingProvider.definePalette('defaultPrimary', {
            '50': '#FFFFFF',
            '100': 'rgb(255, 198, 197)',
            '200': '#E75753',
            '300': '#E75753',
            '400': '#E75753',
            '500': '#E75753',
            '600': '#E75753',
            '700': '#E75753',
            '800': '#E75753',
            '900': '#E75753',
            'A100': '#E75753',
            'A200': '#E75753',
            'A400': '#E75753',
            'A700': '#E75753'
        });

        $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
    });
