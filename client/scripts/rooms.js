var Rooms = {

  rooms: ['lobby'],

  add: function () {
    var newRoom = prompt('Please enter new room name');
    Rooms.rooms.push(newRoom);
    RoomsView.renderRoom(newRoom);
  }

};