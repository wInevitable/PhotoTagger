(function (root) {
  var PT = root.PT || (root.PT = {});

  var PhotosListView = PT.PhotosListView = function (photos) {
    this.$el = $("<div></div>");
    this.photos = photos;
  };

  _.extend(PhotosListView.prototype, {
    render: function () {
      var view = this;

      this.$el.empty();
      var $ul = $("<ul></ul>");
      _(this.photos).each(function (photo) {
        var $li = $("<li></li>");
        $li.text(photo.get("title"));
        $ul.append($li);
      });

      this.$el.html($ul);

      return this;
    }
  });
})(this);
