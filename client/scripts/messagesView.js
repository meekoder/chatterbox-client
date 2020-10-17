var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', Friends.toggleStatus);
    App.fetch((results) => {
      this.render(results);
    });
  },

  render: function(messages) {
    messages.forEach(message => {
      this.renderMessage(message);
    });
  },

  renderMessage: function(message) {
    if (!message.username) {
      return;
    }
    // render new message
    var newMessage = MessageView.render(message);
    // append new message to body
    $(newMessage).appendTo(this.$chats);
  }
};