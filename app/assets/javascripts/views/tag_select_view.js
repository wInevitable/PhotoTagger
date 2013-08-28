(function (root) {
  var PT = root.PT || (root.PT = {});

  var TagSelectView = PT.TagSelectView = function (photo, event) {
    this.$el = $("<div></div>");
    this.photo = photo;

    var imgPos = $(event.currentTarget).position();
    this.pos = {
      left: event.offsetX + imgPos.left - 50,
      top: event.offsetY + imgPos.top - 50
    };
  };

  _.extend(TagSelectView.prototype, {
    render: function () {
      this.$el.empty();

      var $tagBox = $("<div></div>");
      $tagBox.addClass("photo-tag");
      $tagBox.css({
        position: "absolute",
        left: this.pos.left,
        top: this.pos.top
      });
      this.$el.append($tagBox);

      return this;
    }
  });
})(this);
