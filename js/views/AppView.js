var AppView = Backbone.View.extend({

  // get our target element
  // $el: $('#app'),
  el: '#app',

  // when we instantiate the app view it will get bound to #app
  // we put our child views inside initialize
  initialize: function() {
    // child node
    this.title = new TitleView();
    // child node
    this.input = new InputView({
      // we want to pass it an instance of a collection so we can create models out of it
      // this is how we get the zip code
      
      // collection: new Weather()
      // we don't specify new weather here we will do it when we instantiate the app so that our collections can be the same
      collection: this.collection
    });
    // child node
    this.list = new ListView({
      // we also want to pass our collection to the list view which will interpret them as the entry view
      collection: this.collection
    });

    this.render();
  },

  render: function() {

    // when we render the app view we want to render all of the child nodes
    // the append method can take in an array (this is jQuery at this point)
    this.$el.append([
      this.title.$el,
      this.input.$el,
      this.list.$el
    ]);

    // return this or this.$el is not necessary, but allows us to chain things
    return this;
  }

});
