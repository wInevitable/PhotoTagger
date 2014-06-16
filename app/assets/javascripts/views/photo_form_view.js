(function(window) {
  
  var PT = window.PT = (window.PT || {});
  var FormView = PT.FormView = function() {
    this.$el = $("<div></div>");
    this.$el.on("submit", "form", function(event) {
      event.preventDefault();
      var newPhoto = new PT.Photo($(event.currentTarget).serializeJSON());
      newPhoto.create()
    });
  };
  
  FormView.prototype.render = function(callback) {
    var that = this;
    that.$el.html(JST["photo_form"]);
    callback.call(that, that.$el)
    return that;
  };
  
  FormView.prototype.submit = function(event) {
  }
  
})(this);