declare function On(event: string): (target: any, propertyKey: string | symbol) => void;
declare function Dispatch(event: string): (_target: any, _propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => void;
export { On, Dispatch };
