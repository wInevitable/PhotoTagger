(function (root) {
  var PT = root.PT || (root.PT = {});

  var PhotosListView = PT.PhotosListView = function (photos) {
    this.$el = $("<ul></ul>");
    this.photos = photos;
  };

  _.extend(PhotosListView.prototype, {
    render: function () {
      var view = this;

      this.$el.html("");
      _(this.photos).each(function (photo) {
        var $li = $("<li></li>");
        $li.text(photo.get("title"));
        view.$el.append($li);
      });

      return this;
    }
  });
})(this);
