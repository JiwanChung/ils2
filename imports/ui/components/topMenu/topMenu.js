import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './topMenu.html';
 
class TopMenu {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

    this.isNavCollapse = true;
    this.isCollapsed = false;

    this.tabs= [
    	{ num: 0, title: '소개', link: '/about', content: 'sss'},
    	{ num: 1, title: '행사', link: '/events', content: 'sas'},
    	{ num: 2, title: '학술지', link: '/journals', content: 'sas'},
    	{ num: 3, title: '산하단체', link: '/affiliation', content: 'sas'},
    	{ num: 4, title: '연구원사람들', link: '/people', content: 'sas'},
    	{ num: 5, title: '관련사이트', link: '/links', content: 'sas'}
    ];
  }
}

const name = 'topMenu';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: TopMenu
});