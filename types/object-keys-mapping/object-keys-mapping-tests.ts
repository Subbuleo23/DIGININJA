import { Operator, reverseCamelcase, toCamelcase, trim } from "object-keys-mapping";

trim({ name: "" });

toCamelcase({ will_be_camelcase: "" });

reverseCamelcase({ willBeUnderlined: "" });

const operator = new Operator({ camelcase: true });

operator.map({});
