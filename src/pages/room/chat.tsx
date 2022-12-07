/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

let socket;
let roomId;

type Message = {
    id: string;
    author: string;
    message: string;
};

const page: NextPage = () => {
    const nextRouter = useRouter();
    const { call_id: roomId } = nextRouter.query;
    const [username, setUsername] = useState("");
    const [chosenUsername, setChosenUsername] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Array<Message>>([]);

    useEffect(() => {
        socketInitializer();
    }, []);

    const socketInitializer = async () => {
        // We just call it because we don't need anything else out of it
        //await fetch("/api/sockets/socket");

        socket = io();

        socket.on("newIncomingMessage", (msg) => {

            if (msg.author != chosenUsername) {
                console.log("atualiza!");

                const msgObj = { id: msg.id, author: msg.author, message: msg.message };

                setMessages((currentMsg) => [
                    ...currentMsg,
                    msgObj,
                ]);
            }

        });
    };

    const sendMessage = async () => {
        const msg = { id: Math.round(Math.random() * 10000), author: chosenUsername, message }
        socket.emit("createdMessage", msg);

        setMessages((currentMsg) => [
            ...currentMsg,
            msg,
        ]);

        setMessage("");
    };

    const handleKeypress = (e) => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            if (message) {
                sendMessage();
            }
        }
    };

    return (
        <div style={{ color: "#fff" }}>
            <main className="gap-4 flex flex-col items-center justify-center w-full h-full">
                {!chosenUsername ? (
                    <>
                        <h3 className="font-bold text-white text-xl">
                            How people should call you?
                        </h3>
                        <input
                            type="text"
                            placeholder="Identity..."
                            value={username}
                            className="p-3 rounded-md outline-none"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <button
                            onClick={() => {
                                setChosenUsername(username);
                            }}
                            className="bg-white rounded-md px-4 py-2 text-xl"
                        >
                            Go!
                        </button>
                    </>
                ) : (
                    <>
                        <p className="font-bold text-white text-xl">
                            Your username: {username}
                        </p>
                        <div className="flex flex-col justify-end bg-white h-[20rem] min-w-[33%] rounded-md shadow-md ">
                            <div className="h-full last:border-b-0 overflow-y-scroll">
                                {messages.map((msg, i) => {
                                    return (
                                        <div
                                            className="w-full py-1 px-2 border-b border-gray-200"
                                            key={i}
                                        >
                                            {msg.author} : {msg.message}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="border-t border-gray-300 w-full flex rounded-bl-md">
                                <input
                                    type="text"
                                    placeholder="New message..."
                                    value={message}
                                    className="outline-none py-2 px-2 rounded-bl-md flex-1"
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={handleKeypress}
                                />
                                <div className="border-l border-gray-300 flex justify-center items-center  rounded-br-md group hover:bg-purple-500 transition-all">
                                    <button
                                        className="group-hover:text-white px-3 h-full"
                                        onClick={() => {
                                            sendMessage();
                                        }}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
};

export default page