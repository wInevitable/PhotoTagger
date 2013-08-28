(function (root) {
  var PT = root.PT || (root.PT = {});

  var TagSelectView = PT.TagSelectView = function (photo, event) {
    this.$el = $("<div></div>");
    this.photo = photo;

    var imgPos = $(event.currentTarget).position();
    var boxLeft = event.offsetX + imgPos.left - 50;
    var boxTop = event.offsetY + imgPos.top - 50;
    
    this.$el.addClass("photo-tag");
    this.$el.css({
      position: "absolute",
      left: boxLeft,
      top: boxTop
    });
  };

  _.extend(TagSelectView.prototype, {
    render: function () {
      return this.$el;
    }
  });
})(this);
