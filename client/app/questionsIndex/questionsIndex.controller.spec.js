'use strict';

describe('Controller: QuestionsIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('stackunderflowApp'));

  var QuestionsIndexCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuestionsIndexCtrl = $controller('QuestionsIndexCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
