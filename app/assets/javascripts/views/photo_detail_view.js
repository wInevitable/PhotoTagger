(function (root) {
  var PT = root.PT || (root.PT = {});

  var PhotoDetailView = PT.PhotoDetailView = function (photo) {
    this.$el = $("<div></div>");
    this.photo = photo;

    this.$el.on("click", "a#photosListView", this.showList.bind(this));
    this.$el.on("click", "img", this.popPhotoTagSelectView.bind(this));
  };

  _.extend(PhotoDetailView.prototype, {
    popPhotoTagSelectView: function (event) {
      var imgPos = $("img").position();

      var boxLeft = event.offsetX + imgPos.left - 50;
      var boxTop = event.offsetY + imgPos.top - 50;

      var $div = $("<div></div>");
      $div.addClass("photo-tag");
      $div.css({
        position: "absolute",
        left: boxLeft,
        top: boxTop
      });

      this.$el.append($div);
    },

    render: function () {
      var view = this;

      this.$el.html(
        JST["photo_detail"]({ photo: this.photo })
      );

      return this;
    },

    showList: function (event) {
      event.preventDefault();
      PT.showPhotosIndex();
    }
  });
})(this);
