import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';
 
import template from './personDetails.html';
import { Persons } from '../../../api/persons/index';
 
class PersonDetails {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
 
    this.personId = $stateParams.personId;

    this.subscribe('person');
    this.subscribe('users');

    this.helpers({
    	person() {
    		return Persons.findOne({
    			_id: $stateParams.personId
    		});
    	},
    	users() {
    		return Meteor.users.find({});
    	}
    });
  }

  save() {
  	Persons.update({
  		_id: this.person._id
  	}, {
  		$set: {
  			name: this.person.name,
  			description: this.person.description,
  			public: this.person.public
  		}
  	});
  }
}
 
const name = 'personDetails';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  template,
  controllerAs: name,
  controller: PersonDetails
})
	.config(config);

function config($stateProvider) {
	'ngInject';

	$stateProvider.state('personDetails', {
		url: '/persons/:personId',
		template: '<person-details></person-details>',
		resolve: {
    		currentUser($q) {
		        if (Meteor.userId() === null) {
		          return $q.reject('AUTH_REQUIRED');
		        } else {
		          return $q.resolve();
		        }
      }
    }
	});
}
