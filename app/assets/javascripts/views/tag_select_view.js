(function (root) {
  var PT = root.PT || (root.PT = {});

  var TagSelectView = PT.TagSelectView = function (photo, event) {
    this.$el = $("<div></div>");
    this.photo = photo;

    var imgPos = $(event.currentTarget).position();
    this.tagPos = {
      x_pos: event.offsetX - 50,
      y_pos: event.offsetY - 50
    };

    this.$el.css({
      position: "absolute",
      left: this.tagPos.x_pos + imgPos.left,
      top: this.tagPos.y_pos + imgPos.top
    });

    this.$el.on(
      "click",
      "ul.tag-options li",
      this.selectTagOption.bind(this)
    );
  };

  _.extend(TagSelectView.prototype, {
    render: function () {
      this.$el.empty();

      var $tagBox = $("<div></div>");
      $tagBox.addClass("photo-tag");
      this.$el.append($tagBox);

      this.$el.append(JST["photo_tag_options"]({
        users: USERS
      }));

      return this;
    },

    selectTagOption: function (event) {
      var userId = $(event.currentTarget).attr("data-id");
      new PT.PhotoTagging({
        user_id: userId,
        photo_id: this.photo.get("id"),
        x_pos: this.tagPos.x_pos,
        y_pos: this.tagPos.y_pos
      }).create();

      this.$el.remove();
    }
  });
})(this);
