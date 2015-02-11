class Layout {
  constructor ($rootScope, $state) {
    let self = this;

    self.current = 'application';
    self.$state = $state;

    $rootScope.currentLayout = function() {
      return self.getLayout();
    }
  }

  setLayout (name) {
    this.current = name;
  }

  getLayout () {
    let layout = this.current;

    // If layout is defined in the state's data - use that instead
    if (this.$state.current.data && this.$state.current.data.layout) {
      layout = this.$state.current.data.layout;
    }

    return 'layouts/' + layout + '.html';
  }
}

angular.module('%APP_NAME%.services').service('Layout', Layout);
