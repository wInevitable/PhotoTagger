(function (root) {
  var PT = root.PT || (root.PT = {});

  var Photo = PT.Photo = function (data) {
    this.attributes = _.extend({}, data);
  }

  _.extend(Photo, {
    fetchByUserId: function (userId, callback) {
      $.ajax({
        url: "/api/users/" + userId + "/photos",
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
      var photo = this;

      $.ajax({
        url: "/api/photos",
        type: "POST",
        data: { photo: this.attributes },
        success: function (newAttrs) {
          _(photo.attributes).extend(newAttrs);
          callback(photo);
        }
      });
    }
  });
})(this);
