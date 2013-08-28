// This is a manifest file that'll be compiled into application.js,
// which will include all the files listed below.
//
// Any JavaScript/Coffee file within this directory,
// lib/assets/javascripts, vendor/assets/javascripts, or
// vendor/assets/javascripts of plugins, if any, can be referenced
// here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll
// appear at the bottom of the the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE
// PROCESSED, ANY BLANK LINE SHOULD GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require_tree .

function Photo (data) {
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
