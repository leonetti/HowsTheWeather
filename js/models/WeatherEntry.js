var WeatherEntry = Backbone.Model.extend({

  // default has many of the properties the model will contain that we will add data to later
  defaults: {
    zipcode: '',
    city: '',
    weather: ''
  },

  // we could also have functions on here such as convertToCelcius
  // used for manipulating the data

  initialize: function() {},

});
