(function (root) {
  var PT = root.PT || (root.PT = {});

  var PhotoFormView = PT.PhotoFormView = function () {
    this.$el = $("<div></div>");
  };

  _.extend(PhotoFormView.prototype, {
    render: function () {
      var view = this;

      this.$el.html(JST["photo_form"]());

      return this;
    }
  });
})(this);
