class MOShopMainController {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  $onInit() {
    this.getCars();
  }

  getCars() {
    const url = 'http://localhost:4000/cars';
    const opts = {
      method: 'POST',
      url,
      cache: false,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    this.$http(opts).then(res => {
      this.cars = res.data;
    });
  }
}

export default MOShopMainController;
