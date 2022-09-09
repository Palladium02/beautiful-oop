import { Events } from './store';

function On(event: string) {
  return (target: any, propertyKey: string | symbol) => {
    Events.on(event, () => {
      let instance = new target.constructor();
      instance[propertyKey]();
    });
  };
}

function Dispatch(event: string) {
  return (
    _target: any,
    _propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>,
  ) => {
    let method = descriptor.value!;
    descriptor.value = function () {
      Events.dispatch(event);
      return method.apply(this, arguments);
    };
  };
}

export { On, Dispatch };
