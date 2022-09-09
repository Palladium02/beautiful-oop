class EventStore {
  private _events: Map<string, Function> = new Map();

  public on(event: string, handler: () => any) {
    this._events.set(event, handler);
  }

  public dispatch(event: string) {
    let handler = this._events.get(event);
    if (!handler) return;
    handler();
  }
}

export const Events = new EventStore();
