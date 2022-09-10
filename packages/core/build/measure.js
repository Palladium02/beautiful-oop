"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Measure = void 0;
function Measure(_target, propertyKey, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
        const start = performance.now();
        const result = method.apply(this, args);
        const end = performance.now();
        console.log(`Execution time of ${String(propertyKey)}: ${end - start}ms`);
        return result;
    };
    return descriptor;
}
exports.Measure = Measure;
