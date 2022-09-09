"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
class EventStore {
    constructor() {
        this._events = new Map();
    }
    on(event, handler) {
        this._events.set(event, handler);
    }
    dispatch(event) {
        let handler = this._events.get(event);
        if (!handler)
            return;
        handler();
    }
}
exports.Events = new EventStore();
