var Weather = Backbone.Collection.extend({

  // necessary when creating a collection
  model: WeatherEntry,

  addWeatherEntry: function(zipcode) {
    // ajax
    // get will get us a callback function with the data on it
    $.get(
      // we are passing the zip code to the url and asking it to give us the temp in Farenheight
      'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial',
      function(data) {
        // backbone comes with this.add where we can pass it an object and it will create a weather model with those properties
        // the callback function needs to be bound to the weather collection not jQuery
        this.add({         
            zipcode: zipcode,
            city: data.name,
            weather: data.main.temp + '°F'
          });
      }.bind(this)
    );
  }

});
