"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dispatch = exports.On = void 0;
const store_1 = require("./store");
function On(event) {
    return (target, propertyKey) => {
        store_1.Events.on(event, () => {
            let instance = new target.constructor();
            instance[propertyKey]();
        });
    };
}
exports.On = On;
function Dispatch(event) {
    return (_target, _propertyKey, descriptor) => {
        let method = descriptor.value;
        descriptor.value = function () {
            store_1.Events.dispatch(event);
            return method.apply(this, arguments);
        };
    };
}
exports.Dispatch = Dispatch;
