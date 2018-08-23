// socket.io realtime functionality
const socket = io();

socket.on('encounter info', (msg) => {
  let newItem = document.createElement("LI");
  let textnode = document.createTextNode(msg);
  newItem.appendChild(textnode);

  let list = document.getElementById("info_for_players");
  list.insertBefore(newItem, list.childNodes[0]);
});

function displayToPlayers () {
  let displayInfo = document.querySelector('#dice_roll_instructions').textContent;
  socket.emit('encounter info', displayInfo);
}