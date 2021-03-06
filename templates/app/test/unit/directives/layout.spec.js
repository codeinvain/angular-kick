describe('layout Directive', function () {
  var element, $scope, createDirective;

  beforeEach(module('%APP_NAME%.config', '%APP_NAME%.services', '%APP_NAME%.directives'));

  beforeEach(inject(function ($rootScope, $compile, $templateCache, Layout) {
    $templateCache.put('layouts/application.html', 'APPLICATION');
    createDirective = function (scopeAttrs) {
      $scope = angular.extend($rootScope.$new(), scopeAttrs);

      element = angular.element('<layout></layout>');
      element = $compile(element)($scope);
      Layout.setLayout('application');
      $scope.$apply();
    };
  }));

  it('should show layout', function () {
    createDirective({});
    expect(element.html()).toMatch("APPLICATION");
  });
});
