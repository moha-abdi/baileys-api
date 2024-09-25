import type { BaileysEventEmitter } from "baileys";
import * as handlers from "./handlers";

export class Store {
	private readonly chatHandler;
	private readonly messageHandler;
	private readonly contactHandler;
	private readonly groupMetadataHandler;

	constructor(sessionId: string, event: BaileysEventEmitter) {
		this.chatHandler = handlers.chatHandler(sessionId, event);
		this.messageHandler = handlers.messageHandler(sessionId, event);
		this.contactHandler = handlers.contactHandler(sessionId, event);
		this.groupMetadataHandler = handlers.groupMetadataHandler(sessionId, event);
		this.listen();
	}

	public listen() {
		this.messageHandler.listen();
	}

	public unlisten() {
		this.messageHandler.unlisten();
	}
}
