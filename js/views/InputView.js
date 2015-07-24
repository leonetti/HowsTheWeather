var InputView = Backbone.View.extend({

  tagName: 'input',
  // el: '<input>',

  // we want to specify the DOM events here
  events: {
    // 'keypress' : 'keyAction'
    'keydown': 'keyAction',
  },
  
  initialize: function() {
    this.render();
  },

  render: function() {
    this.resetInput();
    return this;
  },

  // will get invoked on a keypress
  keyAction: function(e) {

    // the number 13 maps to the enter key
    var isEnterKey = (e.which === 13);

    if(isEnterKey && !this.$el.val().trim().match(/^(?=.*[0-9].*)[0-9]{5}$/)) {

      // sets placeholder text
      this.$el.attr({
        placeholder: 'Sorry, zip code invalid.'
      });
      this.clearInput();

    } else if(isEnterKey) {

      this.collection.addWeatherEntry(this.$el.val());
      // passes in the zip code and runs this function
      this.resetInput();

    }

  },

  resetInput: function() {
    this.$el.attr({
      placeholder: 'Enter a zip code'
    });
    this.clearInput();
  },

  clearInput: function() {
    this.$el.val('');
  }

});
