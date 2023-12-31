import ES2017 = require("./es2017");

interface ES2018 {
    readonly "Abstract Equality Comparison": typeof import("./2018/AbstractEqualityComparison");
    readonly "Abstract Relational Comparison": typeof import("./2018/AbstractRelationalComparison");
    readonly "Strict Equality Comparison": typeof import("./2018/StrictEqualityComparison");
    readonly AdvanceStringIndex: typeof import("./2018/AdvanceStringIndex");
    readonly ArrayCreate: typeof import("./2018/ArrayCreate");
    readonly ArraySetLength: typeof import("./2018/ArraySetLength");
    readonly ArraySpeciesCreate: typeof import("./2018/ArraySpeciesCreate");
    readonly Call: typeof import("./2018/Call");
    readonly CanonicalNumericIndexString: typeof import("./2018/CanonicalNumericIndexString");
    readonly CompletePropertyDescriptor: typeof import("./2018/CompletePropertyDescriptor");
    readonly CopyDataProperties: typeof import("./2018/CopyDataProperties");
    readonly CreateDataProperty: typeof import("./2018/CreateDataProperty");
    readonly CreateDataPropertyOrThrow: typeof import("./2018/CreateDataPropertyOrThrow");
    readonly CreateHTML: typeof import("./2018/CreateHTML");
    readonly CreateIterResultObject: typeof import("./2018/CreateIterResultObject");
    readonly CreateListFromArrayLike: typeof import("./2018/CreateListFromArrayLike");
    readonly CreateMethodProperty: typeof import("./2018/CreateMethodProperty");
    readonly DateFromTime: typeof import("./2018/DateFromTime");
    readonly DateString: typeof import("./2018/DateString");
    readonly Day: typeof import("./2018/Day");
    readonly DayFromYear: typeof import("./2018/DayFromYear");
    readonly DaysInYear: typeof import("./2018/DaysInYear");
    readonly DayWithinYear: typeof import("./2018/DayWithinYear");
    readonly DefinePropertyOrThrow: typeof import("./2018/DefinePropertyOrThrow");
    readonly DeletePropertyOrThrow: typeof import("./2018/DeletePropertyOrThrow");
    readonly EnumerableOwnPropertyNames: typeof import("./2018/EnumerableOwnPropertyNames");
    readonly FromPropertyDescriptor: typeof import("./2018/FromPropertyDescriptor");
    readonly Get: typeof import("./2018/Get");
    readonly GetIterator: typeof import("./2018/GetIterator");
    readonly GetMethod: typeof import("./2018/GetMethod");
    readonly GetOwnPropertyKeys: typeof import("./2018/GetOwnPropertyKeys");
    readonly GetPrototypeFromConstructor: typeof import("./2018/GetPrototypeFromConstructor");
    readonly GetSubstitution: typeof import("./2018/GetSubstitution");
    readonly GetV: typeof import("./2018/GetV");
    readonly HasOwnProperty: typeof import("./2018/HasOwnProperty");
    readonly HasProperty: typeof import("./2018/HasProperty");
    readonly HourFromTime: typeof import("./2018/HourFromTime");
    readonly InLeapYear: typeof import("./2018/InLeapYear");
    readonly InstanceofOperator: typeof import("./2018/InstanceofOperator");
    readonly Invoke: typeof import("./2018/Invoke");
    readonly IsAccessorDescriptor: typeof import("./2018/IsAccessorDescriptor");
    readonly IsArray: typeof import("./2018/IsArray");
    readonly IsCallable: typeof import("./2018/IsCallable");
    readonly IsConcatSpreadable: typeof import("./2018/IsConcatSpreadable");
    readonly IsConstructor: typeof import("./2018/IsConstructor");
    readonly IsDataDescriptor: typeof import("./2018/IsDataDescriptor");
    readonly IsExtensible: typeof import("./2018/IsExtensible");
    readonly IsGenericDescriptor: typeof import("./2018/IsGenericDescriptor");
    readonly IsInteger: typeof import("./2018/IsInteger");
    readonly IsPromise: typeof import("./2018/IsPromise");
    readonly IsPropertyKey: typeof import("./2018/IsPropertyKey");
    readonly IsRegExp: typeof import("./2018/IsRegExp");
    readonly IsStringPrefix: typeof import("./2018/IsStringPrefix");
    readonly IterableToList: typeof import("./2018/IterableToList");
    readonly IteratorClose: typeof import("./2018/IteratorClose");
    readonly IteratorComplete: typeof import("./2018/IteratorComplete");
    readonly IteratorNext: typeof import("./2018/IteratorNext");
    readonly IteratorStep: typeof import("./2018/IteratorStep");
    readonly IteratorValue: typeof import("./2018/IteratorValue");
    readonly MakeDate: typeof import("./2018/MakeDate");
    readonly MakeDay: typeof import("./2018/MakeDay");
    readonly MakeTime: typeof import("./2018/MakeTime");
    readonly MinFromTime: typeof import("./2018/MinFromTime");
    readonly modulo: typeof import("./2018/modulo");
    readonly MonthFromTime: typeof import("./2018/MonthFromTime");
    readonly msFromTime: typeof import("./2018/msFromTime");
    readonly NumberToString: typeof import("./2018/NumberToString");
    readonly ObjectCreate: typeof import("./2018/ObjectCreate");
    readonly OrdinaryDefineOwnProperty: typeof import("./2018/OrdinaryDefineOwnProperty");
    readonly OrdinaryGetOwnProperty: typeof import("./2018/OrdinaryGetOwnProperty");
    readonly OrdinaryGetPrototypeOf: typeof import("./2018/OrdinaryGetPrototypeOf");
    readonly OrdinaryHasInstance: typeof import("./2018/OrdinaryHasInstance");
    readonly OrdinaryHasProperty: typeof import("./2018/OrdinaryHasProperty");
    readonly OrdinarySetPrototypeOf: typeof import("./2018/OrdinarySetPrototypeOf");
    readonly PromiseResolve: typeof import("./2018/PromiseResolve");
    readonly RegExpExec: typeof import("./2018/RegExpExec");
    readonly RequireObjectCoercible: typeof import("./2018/RequireObjectCoercible");
    readonly SameValue: typeof import("./2018/SameValue");
    readonly SameValueNonNumber: typeof import("./2018/SameValueNonNumber");
    readonly SameValueZero: typeof import("./2018/SameValueZero");
    readonly SecFromTime: typeof import("./2018/SecFromTime");
    readonly Set: typeof import("./2018/Set");
    readonly SetFunctionName: typeof import("./2018/SetFunctionName");
    readonly SetIntegrityLevel: typeof import("./2018/SetIntegrityLevel");
    readonly SpeciesConstructor: typeof import("./2018/SpeciesConstructor");
    readonly SymbolDescriptiveString: typeof import("./2018/SymbolDescriptiveString");
    readonly TestIntegrityLevel: typeof import("./2018/TestIntegrityLevel");
    readonly thisBooleanValue: typeof import("./2018/thisBooleanValue");
    readonly thisNumberValue: typeof import("./2018/thisNumberValue");
    readonly thisStringValue: typeof import("./2018/thisStringValue");
    readonly thisSymbolValue: typeof import("./2018/thisSymbolValue");
    readonly thisTimeValue: typeof import("./2018/thisTimeValue");
    readonly TimeClip: typeof import("./2018/TimeClip");
    readonly TimeFromYear: typeof import("./2018/TimeFromYear");
    readonly TimeString: typeof import("./2018/TimeString");
    readonly TimeWithinDay: typeof import("./2018/TimeWithinDay");
    readonly ToBoolean: typeof import("./2018/ToBoolean");
    readonly ToDateString: typeof import("./2018/ToDateString");
    readonly ToIndex: typeof import("./2018/ToIndex");
    readonly ToInt16: typeof import("./2018/ToInt16");
    readonly ToInt32: typeof import("./2018/ToInt32");
    readonly ToInt8: typeof import("./2018/ToInt8");
    readonly ToInteger: typeof import("./2018/ToInteger");
    readonly ToLength: typeof import("./2018/ToLength");
    readonly ToNumber: typeof import("./2018/ToNumber");
    readonly ToObject: typeof import("./2018/ToObject");
    readonly ToPrimitive: typeof import("./2018/ToPrimitive");
    readonly ToPropertyDescriptor: typeof import("./2018/ToPropertyDescriptor");
    readonly ToPropertyKey: typeof import("./2018/ToPropertyKey");
    readonly ToString: typeof import("./2018/ToString");
    readonly ToUint16: typeof import("./2018/ToUint16");
    readonly ToUint32: typeof import("./2018/ToUint32");
    readonly ToUint8: typeof import("./2018/ToUint8");
    readonly ToUint8Clamp: typeof import("./2018/ToUint8Clamp");
    readonly Type: typeof import("./2018/Type");
    readonly ValidateAndApplyPropertyDescriptor: typeof import("./2018/ValidateAndApplyPropertyDescriptor");
    readonly WeekDay: typeof import("./2018/WeekDay");
    readonly YearFromTime: typeof import("./2018/YearFromTime");
}

declare namespace ES2018 {
    // Re-export types from previous versions
    // - ES2015:
    type PropertyKey = ES2017.PropertyKey;

    // - ES5:
    type GenericDescriptor = ES2017.GenericDescriptor;
    type AccessorDescriptor<T = unknown> = ES2017.AccessorDescriptor<T>;
    type DataDescriptor<T = unknown> = ES2017.DataDescriptor<T>;
    type PropertyDescriptor<T = unknown> = ES2017.PropertyDescriptor<T>;
}

declare const ES2018: ES2018;
export = ES2018;
