var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
    RoomsView.render();
  },

  render: function() {
    for (var i = 0; i < Rooms.rooms.length; i++) {
      RoomsView.renderRoom(Rooms.rooms[i]);
    }
  },

  renderRoom: function (room) {
    $(`<option></option>`).html(room).appendTo(this.$select);
  }

};
