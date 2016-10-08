import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './personRemove.html';
import { Persons } from '../../../api/persons/index';
 
class PersonRemove {
	constructor($scope, $reactive) {
		'ngInject';
 
   		$reactive(this).attach($scope);

	}
  remove() {
    if (this.person) {
    	Persons.remove(this.person._id);
    	}
	}
}
 
const name = 'personRemove';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
  	person: '<'
  },
  controllerAs: name,
  controller: PersonRemove
});