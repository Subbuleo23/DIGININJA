import EmberObject from "@ember/object";
import { assertType } from "./lib/assert";

const ExtendClass = EmberObject.extend({
    foo: "hello",
});

class ES6Class extends EmberObject {
    bar: string;
}

const TestClass = EmberObject;

if (ExtendClass.detect(TestClass)) {
    assertType<string>(TestClass.create().foo);
}

if (ES6Class.detect(TestClass)) {
    assertType<string>(TestClass.create().bar);
}
