var ListView = Backbone.View.extend({
  // Backbone creates a div if nothing is specified
  // this creates a div with the ID of 'list'
  id: 'list',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
    //this.collection.on('add', this.render, this);
    // this.add exists on Backbone views and views can listen to the collection
    // use listenTo rather than on because then we don't have to specify the context 'this' but backbone handles that for us 
  },

  render: function() {
    // reads data from the input view

    // everytime we re render we want to first clear the views
    this.$el.empty();

    this.entries = this.collection.map(function(model) {
      return new EntryView({
        // passing a reference to model in the entry view
        'model': model
      });
      // now this.entries equals an array of entry view objects
    });

    var $els = this.entries.map(function(entry) {
      return entry.$el;
    });
    // this loops over all the entry models and returns just the entry.$el
    // now we have a list of the $el's in the collection

    this.$el.append($els);
    // $els is an array

    return this;
  }

});
