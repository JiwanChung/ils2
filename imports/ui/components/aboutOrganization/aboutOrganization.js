import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './aboutOrganization.html';

class AboutOrganization {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

    this.oneAtATime = true;

    this.managers = [
    	{ "job": "원장", 'name': '이철우'},
    	{ "job": "부원장", 'name': '김종철'}
    ];
    this.elses = [
    	{ "group": "녹색법학사업단", "data": [
	    	{ "team": "총괄", "people": [
	    		{"job": "연구책임자", "name": "박덕영"},
	    		{"job": "공동연구원", "name": "김하나"},
	    		{"job": "공동연구원", "name": "유현정"},
	    		{"job": "연구보조원", "name": "유선주"},
	    		{"job": "연구보조원", "name": "윤재훈"}
	    	]},
	    	{ "team": "1팀", "people": [
	    		{"job": "연구책임자", "name": "박덕영"},
	    		{"job": "공동연구원", "name": "김하나"},
	    		{"job": "공동연구원", "name": "유현정"},
	    		{"job": "연구보조원", "name": "유선주"},
	    		{"job": "연구보조원", "name": "윤재훈"}
	    	]}
	    	]
	    },
	    { "group": "SSK-기후변화와 국제법 사업단", "data": [
	    	{ "team": "총괄", "people": [
	    		{"job": "연구책임자", "name": "박덕영"},
	    		{"job": "공동연구원", "name": "김하나"},
	    		{"job": "공동연구원", "name": "유현정"},
	    		{"job": "연구보조원", "name": "유선주"},
	    		{"job": "연구보조원", "name": "윤재훈"}
	    	]},
	    	{ "team": "1팀", "people": [
	    		{"job": "연구책임자", "name": "박덕영"},
	    		{"job": "공동연구원", "name": "김하나"},
	    		{"job": "공동연구원", "name": "유현정"},
	    		{"job": "연구보조원", "name": "유선주"},
	    		{"job": "연구보조원", "name": "윤재훈"}
	    	]}
	    	]
	    }
    ];
  }
}

const name = 'aboutOrganization';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: AboutOrganization
});