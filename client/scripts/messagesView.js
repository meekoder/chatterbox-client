var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {
    // render new message
    var newMessage = MessageView.render(message);
    // append new message to body
    $(newMessage).appendTo(this.$chats);
  }
};