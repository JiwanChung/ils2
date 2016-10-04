import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './mainCarousel.html';

class MainCarousel {
  constructor($scope, $reactive) {
    'ngInject';

    this.slides = [
      { text: 'sdsd',
        id: 0,
        image: '/images/1.jpg'},
      { text: 'eed',
        id: 1,
        image: '/images/2.jpg'},
      { text: 'dwe',
        id: 2,
        image: '/images/3.jpg'}
    ];

    this.active = 0;

    $reactive(this).attach($scope);
  }
}
 
const name = 'mainCarousel';
 
// create a module
export default angular.module(name, [
  angularMeteor
  ]).component(name, {
    template,
    controllerAs: name,
    controller: MainCarousel
});
