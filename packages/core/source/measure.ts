function Measure(
  _target: any,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor,
) {
  const method = descriptor.value!;
  descriptor.value = function (...args: Array<any>) {
    const start = performance.now();
    const result = method.apply(this, args);
    const end = performance.now();
    console.log(`Execution time of ${String(propertyKey)}: ${end - start}ms`);
    return result;
  };
  return descriptor;
}

export { Measure };
