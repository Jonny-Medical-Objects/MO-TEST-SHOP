import MOShopMainComponent from './main.component';
import MOShopMainService from './main.service';
import './main.scss';

const requires = [];

const MOShopMain = angular
  .module('moShop.main', requires)
  .component('moShopMain', MOShopMainComponent)
  .service('MOShopMainService', MOShopMainService);

export default MOShopMain.name;
