import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';
 
import template from './personAdd.html';
import { Persons } from '../../../api/persons/index';
import { name as personUpload } from '../personUpload/personUpload';
 
class PersonAdd {
	constructor() {
		this.person = {};
	}

	submit() {
		this.person.owner = Meteor.user()._id;
		Persons.insert(this.person);
		this.reset();
	}

	reset() {
		this.person = {};
	}
}
 
const name = 'personAdd';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  personUpload
]).component(name, {
  template,
  controllerAs: name,
  controller: PersonAdd
});