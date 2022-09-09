# beautiful-oop

beautiful-oop provides your with some neat functionality helping with tasks
following the OOP style.

## core

### core/@Main

`@Main` marks a class as main entry point. A marked class should have a static
`main` method which will be executed automatically.

```ts
import { Main } from 'beautiful-oop/core';

@Main
class App {
  public static main() {
    // your code goes here
  }
}
```

## events

`beautiful-oop/events` provides you with some functionality for handling
events that are dispatched when a method is executed.

### events/@On

`@On` marks a method as handler for a given event.

```ts
import { On } from 'beautiful-oop/events';

class Handler {
  @On('Event')
  public handleEvent() {
    // handling code here
  }
}
```

### events/@Dispatch

`@Dispatch` marks a method so an event handler is attached to it. Everytime the
marked method is called/executed the event will be dispatched and the corresponding
handler will be executed as well.

```ts
import { Dispatch } from 'beautiful-oop';

class SomeClass {
  @Dispatch('Event')
  public someMethod() {
    // your code goes here
  }
}
```
