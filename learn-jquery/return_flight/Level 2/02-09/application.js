function Tour(el) {
  this.fetchPhotos = function() {}

  el.on('click', 'button', this.fetchPhotos);

  this.el = el;
}

$(document).ready(function() {
  var paris = new Tour($('#paris'));
});

