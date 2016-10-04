import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './aboutHistory.html';

class AboutHistory {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

    this.events = [
    	{ "year": "1963", "title": "법률문제연구소 설립", "content": ""},
    	{ "year": "1970", "title": "제1회 법률문제연구발표회 개최", "content": ""},
    	{ "year": "1973", "title": "볍률연구 창간호 발간", "content": ""},
    	{ "year": "1974", "title": "법률문제연구소에 법률구조상담소 설치", "content": ""},
    	{ "year": "1993", "title": "법률연구 창간호 발간", "content": ""},
    	{ "year": "2011", "title": "법학연구원으로 승격", "content": ""}
    ]
  }
}

const name = 'aboutHistory';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: AboutHistory
});