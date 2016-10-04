import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './aboutMenu.html';
 
class AboutMenu {
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

const name = 'aboutMenu';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: AboutMenu
});