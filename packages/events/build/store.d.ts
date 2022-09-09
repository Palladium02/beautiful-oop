declare class EventStore {
    private _events;
    on(event: string, handler: () => any): void;
    dispatch(event: string): void;
}
export declare const Events: EventStore;
export {};
