export function MOShopRouteConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider.state('main', {
    url: '/app',
    component: 'moShopMain',
    data: {
      requireLogin: false,
    },
  });

  $urlRouterProvider.otherwise('/app');
}

export function MOShopInterceptorConfig($httpProvider) {
  'ngInject';

  $httpProvider.interceptors.push(($q, $rootScope, $injector) => {
    'ngInject';

    return {
      responseError: rejection => {
        //Lazy load to avoid circular dependency issues
        switch (rejection.status) {
          default:
            return $q.reject(rejection);
        }
      },
    };
  });
}

export function MOShopRunConfig($rootScope, $transitions, $uibModalStack) {
  'ngInject';

  //Close any uibModals on route change - otherwise if open when the user presses the back button it remains present
  $transitions.onStart({}, transition => {
    transition.promise.finally($uibModalStack.dismissAll());
  });

  //Broadcast an onBeforeUnload event for any components that may want to prompt before leaving
  $transitions.onBefore({}, () => {
    const confirmation = {};
    const event = $rootScope.$broadcast('event:onBeforeUnload', confirmation);

    return !event.defaultPrevented;
  });
}
