var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function (room) {
    $(`<option><%- room %></option>`).appendTo(this.$select);
  }

};
