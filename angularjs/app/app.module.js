'use strict';

// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', [
  'ngRoute', 
  'ngAnimate',
  'core',
  'phoneListModule', 
  'phoneDetailModule',
]);

/*
phonecatApp.component('greetUser', {
  template: '<p>Hello, {{$ctrl.user}}!</p>',
  controller: function GreetUserController() {
    this.user = 'world';
  }
});
*/