import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './topMenu.html';
 
class TopMenu {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

    this.tabs= [
    	{ title: 'About', content: 'sss'},
    	{ title: 'Journals', content: 'sas'},
    	{ title: 'Events', content: 'sas'},
    	{ title: 'Affiliations', content: 'sas'},
    	{ title: 'People', content: 'sas'},
    	{ title: 'Links', content: 'sas'}
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