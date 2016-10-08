import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './mainCarousel.html';

class MainCarousel {
  constructor($scope, $reactive) {
    'ngInject';

    this.slides = [
      { text: '오늘은 이러저러한 행사가 있었다.',
        title: '행사이야기1',
        id: 0,
        image: '/images/1.jpg'},
      { text: '어제는 이러저러한 행사가 있었다.',
        title: '행사이야기2',
        id: 1,
        image: '/images/2.jpg'},
      { text: '내일은 이러저러한 행사가 있을 것이다.',
        title: '행사이야기3',
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
