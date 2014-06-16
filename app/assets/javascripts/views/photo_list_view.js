(function(window) {
  
  var PT = window.PT = (window.PT || {});
  
  var PhotoListView = PT.PhotoListView = function() {
    var that = this;
    this.$el = $("<div></div>");

    PT.Photo.on("add", function() {
      that.render(function(contents) {
        $("#content").append(contents);
      })
    });
  };
  
  PhotoListView.addCallback = 
  
  PhotoListView.prototype.render = function(callback) {
    var that = this;
    that.$el.html("");
    that.$el.html("<ul></ul>");
    var callback = callback;

    PT.Photo.all.forEach(function(photo) {

      var photo = photo;
      var content = "<li><a href=\"" + photo.get('url') + "\">" + photo.get('title') + "</a></li>";
      that.$el.find('ul').append(content);
    })

    callback.call(that, that.$el);
  };
  
})(this);