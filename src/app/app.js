//App imports
import { MOShopRouteConfig, MOShopInterceptorConfig, MOShopRunConfig } from './app.config';
import MOShopMain from './main';
import './app.scss';

const requires = [
  /* Dependencies */
  'ngAnimate',
  'ngCookies',
  'ngMessages',
  'ui.router',
  'ui.bootstrap',
  'ui.bootstrap.datetimepicker',
  'blockUI',
  'ngFileUpload',
  /* App */
  MOShopMain,
];

const moShop = angular
  .module('moShop', requires)
  //Load our appManifest global from bootloader.js so we can inject it
  .constant('MOShopAppManifest', angular.injector(['ng']).get('$window').appManifest)
  .config(MOShopRouteConfig)
  .config(MOShopInterceptorConfig)
  .run(MOShopRunConfig);

/*eslint-disable */
angular.element(document).ready(function() {
  var loadingIdicatorElement = document.getElementById('loader');
  loadingIdicatorElement.setAttribute('style', 'display:none;');

  //Bootstrap our app
  angular.bootstrap(document, ['moShop'], {
    strictDi: true,
  });
});
/*eslint-enable */

export default moShop.name;
