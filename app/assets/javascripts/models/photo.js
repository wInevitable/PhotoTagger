(function (root) {
  var PT = root.PT || (root.PT = {});

  var Photo = PT.Photo = function (data) {
    this.attributes = _.extend({}, data);
  }

  _.extend(Photo, {
    fetchByUserId: function (userId, callback) {
      $.ajax({
        url: "/users/" + userId + "/photos",
        type: "GET",
        success: function (photosData) {
          var photos = _(photosData).map(function (photoData) {
            return new Photo(photoData);
          });

          callback(photos);
        }
      });
    }
  });

  _.extend(Photo.prototype, {
    get: function (attrName) {
      this.attributes[attrName];
    },

    set: function (attrName, val) {
      this.attributes[attrName] = val
    },

    create: function (callback) {
      $.ajax({
        url: "/photos",
        type: "POST",
        data: this.attributes,
        success: callback
      });
    }
  });
})(this);
