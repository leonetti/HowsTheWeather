var EntryView = Backbone.View.extend({

  // entry view is each piece inside of the list
  // it is a child of the list view not the app view

  className: 'entry',

  // template is a custom property we are adding
  // underscore's template accepts a string
  // underscore template returns a function that is passed an object where the key is weather or city
  //   and the object is the value
  template: _.template('<p>It is currently <%= weather %> in <%= city %>.</p>'),

  initialize: function() {
    this.render();
  },

  render: function() {

    var entry = this.template({
      weather: this.model.get('weather'),
      city: this.model.get('city')
    });

    // passes the entry's html into our current div's html 
    this.$el.html(entry);

    return this;
  }
});
