# beautiful-oop

beautiful-oop provides your with some neat functionality helping with tasks
following the OOP style.

## core

### core/@Runnable

`@Runnable` marks a class as main entry point. A marked class should have a static
`main` method which will be executed automatically.

```ts
import { Runnable } from 'beautiful-oop/packages/core';

@Runnable
class App {
  public static main() {
    // your code goes here
  }
}
```

### core/@Measure

A classs method decorated with `@Measure` will get its execution time
measured. The result will be printed to the console.

```ts
import { Measure } from 'beautiful-oop/packages/core';

class App {
  @Measure
  public someMethod() {
    // some code
  }
}
```

## events

`beautiful-oop/packages/events` provides you with some functionality for handling
events that are dispatched when a method is executed.

### events/@On

`@On` marks a method as handler for a given event.

```ts
import { On } from 'beautiful-oop/packages/events';

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
