'use strict';

angular.module('stackunderflowApp')
  .filter('fromNow', function () {
    return function (input) {
      return moment(input).locale(window.navigator.language).fromNow();
    };
  });
