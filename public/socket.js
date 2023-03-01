const socket = io()

const saveNotes = (title, description) => {
  socket.emit("client:newnote", {
    title: title.value,
    description: description.value,
  });
};

socket.on("server:newnote", appendNote);

socket.on('server:loadnotes', loadNotes)