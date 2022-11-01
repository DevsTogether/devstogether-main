// @ts-nocheck

import messageHandler from '@server/messageHandler';
import type { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";

export default function SocketHandler(req: NextApiRequest, res: NextApiResponse) {
    // It means that socket server was already initialised
    //@ts-ignore
    if (res.socket.server.io) {
        console.log("Already set up");
        res.end();
        return;
    }

    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    const onConnection = (socket) => {
        messageHandler(io, socket);
    };

    // Define actions inside
    io.on("connection", onConnection);

    console.log("Setting up socket");
    res.end();
}
