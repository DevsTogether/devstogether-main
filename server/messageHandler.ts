export default (io: any, socket: any) => {
    const createdMessage = (msg: string) => {
        socket.broadcast.emit("newIncomingMessage", msg);
    };

    socket.on("createdMessage", createdMessage);
};
