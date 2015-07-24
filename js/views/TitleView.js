var TitleView = Backbone.View.extend({

  // in jQuery if you ever select an element with the carrots it creates a new element
  el: '<h1>',

  initialize: function() {
    this.render();
  },

  render: function() {
    // when we instantiate the TitleView Backbone creates the $el 
    this.$el.text('How\'s the weather?');
    return this;
  }

});
