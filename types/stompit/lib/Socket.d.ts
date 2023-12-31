import { EventEmitter } from "events";
import { Duplex, Writable, WritableOptions } from "stream";

import OutgoingFrameStream = require("./OutgoingFrameStream");

declare class Socket extends EventEmitter {
    constructor(transportSocket: Duplex, options: Socket.SocketOptions);

    destroy(exception: Error): void;

    hasFinishedOutput(): boolean;
    setVersion(version: string): void;
    getTransportSocket(): Duplex;

    setCommandHandler(command: string, handler: Socket.commandHandler): void;
    setCommandHandlers(handlers: Socket.CommandHandlers): void;
    setUnknownCommandHandler(handler: () => void): void;

    sendFrame(command: string, headers?: any, streamOptions?: WritableOptions): Writable;

    getHeartbeat(): Socket.Heartbeat;
    setHeartbeat(heartbeat: Socket.Heartbeat): void;

    createTransportError(message?: string | Error): Socket.SocketError;
    createProtocolError(message?: string | Error): Socket.SocketError;
    createApplicationError(message?: string | Error): Socket.SocketError;
}

export = Socket;

declare namespace Socket {
    type Heartbeat = number[];

    type commandHandler = (frame: Writable) => void;

    interface CommandHandlers {
        [command: string]: (frame: Writable, callback: commandHandler) => void;
    }

    interface SocketOptions {
        commandHandlers?: CommandHandlers | undefined;
        unknownCommand?: (() => void) | undefined;
        outgoingFrameStream?: OutgoingFrameStream | undefined;
        heartbeat?: Heartbeat | undefined;
        heartbeatDelayMargin?: number | undefined;
        heartbeatOutputMargin?: number | undefined;
        resetDisconnect?: boolean | undefined;
    }

    interface SocketError extends Error {
        isTransportError: () => boolean;
        isProtocolError: () => boolean;
        isApplicationError: () => boolean;
    }
}
