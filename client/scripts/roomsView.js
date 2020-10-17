var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on("click", Rooms.add)
  },

  render: function() {
  },

  renderRoom: function (room) {
    $(`<option><%- room %></option>`).appendTo(this.$select);
  }

};
