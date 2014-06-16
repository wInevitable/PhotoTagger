(function(window) {
  
  var PT = window.PT = (window.PT || {});
  
  var Photo = PT.Photo = function(pojo) {
    this.attributes = _.extend(pojo) || {};
  };
  
  Photo._events = {};
  
  Photo.all = [];
  
  Photo.on = function(eventName, callback) {
    Photo._events[eventName] = (Photo._events[eventName] || []);
    Photo._events[eventName].push(callback);
  };
  
  Photo.trigger = function(eventName) {
    var that = this;
    var event = eventName;

    Photo._events[event].forEach(function(callback) {

      callback.bind(that)();
    });
  };

  Photo.prototype.get = function(attr_name) {
    return this.attributes[attr_name];
  };

  Photo.prototype.set = function(attr_name, val) {
    this.attributes[attr_name] = val;
    return true;
  };

  Photo.prototype.create = function(callback) {
    var that = this;
  

    if (!this.attributes['id']) {
      $.ajax({
        url: '/api/photos',
        type: 'POST',
        data: { photo: this.attributes },
        success: function(model, response, options) {
          _.extend(that.attributes, model);
          console.log(that.attributes);
          Photo.all.push(model);

          Photo.trigger("add");
        },
      
        error: function(model, response, options) {
          console.log(model, response, options);
        }
      });
    }
  };

  Photo.prototype.save = function() {
    var that = this;
  
    if(this.attributes['id'] != undefined) {
      $.ajax({
        url: '/api/photos/' + this.attributes['id'],
        type: 'PUT',
        data: { photo: this.attributes },
        success: function(model, response, options) {
          _.extend(that.attributes, model);
          console.log(that.attributes);
        }
      });
    }
    else {
      this.create();
    }
  };

  Photo.fetchByUserId = function(userId, callback) {
    var that = this;
  
    $.ajax({
      url: 'api/users/' + userId + '/photos',
      type: 'GET',
      success: function(model, response, options) {
        var newPhotos = model.map(function(obj) {
          return new Photo(obj);
        });
        Photo.all = Photo.all.concat(newPhotos);
        callback.call(that, Photo.all);
      }
    });
  };
})(this);


