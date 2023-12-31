import ES2016 = require("./es2016");

interface ES2017 {
    readonly "Abstract Equality Comparison": typeof import("./2017/AbstractEqualityComparison");
    readonly "Abstract Relational Comparison": typeof import("./2017/AbstractRelationalComparison");
    readonly "Strict Equality Comparison": typeof import("./2017/StrictEqualityComparison");
    readonly AdvanceStringIndex: typeof import("./2017/AdvanceStringIndex");
    readonly ArrayCreate: typeof import("./2017/ArrayCreate");
    readonly ArraySetLength: typeof import("./2017/ArraySetLength");
    readonly ArraySpeciesCreate: typeof import("./2017/ArraySpeciesCreate");
    readonly Call: typeof import("./2017/Call");
    readonly CanonicalNumericIndexString: typeof import("./2017/CanonicalNumericIndexString");
    readonly CompletePropertyDescriptor: typeof import("./2017/CompletePropertyDescriptor");
    readonly CreateDataProperty: typeof import("./2017/CreateDataProperty");
    readonly CreateDataPropertyOrThrow: typeof import("./2017/CreateDataPropertyOrThrow");
    readonly CreateHTML: typeof import("./2017/CreateHTML");
    readonly CreateIterResultObject: typeof import("./2017/CreateIterResultObject");
    readonly CreateListFromArrayLike: typeof import("./2017/CreateListFromArrayLike");
    readonly CreateMethodProperty: typeof import("./2017/CreateMethodProperty");
    readonly DateFromTime: typeof import("./2017/DateFromTime");
    readonly Day: typeof import("./2017/Day");
    readonly DayFromYear: typeof import("./2017/DayFromYear");
    readonly DaysInYear: typeof import("./2017/DaysInYear");
    readonly DayWithinYear: typeof import("./2017/DayWithinYear");
    readonly DefinePropertyOrThrow: typeof import("./2017/DefinePropertyOrThrow");
    readonly DeletePropertyOrThrow: typeof import("./2017/DeletePropertyOrThrow");
    readonly EnumerableOwnProperties: typeof import("./2017/EnumerableOwnProperties");
    readonly FromPropertyDescriptor: typeof import("./2017/FromPropertyDescriptor");
    readonly Get: typeof import("./2017/Get");
    readonly GetIterator: typeof import("./2017/GetIterator");
    readonly GetMethod: typeof import("./2017/GetMethod");
    readonly GetOwnPropertyKeys: typeof import("./2017/GetOwnPropertyKeys");
    readonly GetPrototypeFromConstructor: typeof import("./2017/GetPrototypeFromConstructor");
    readonly GetSubstitution: typeof import("./2017/GetSubstitution");
    readonly GetV: typeof import("./2017/GetV");
    readonly HasOwnProperty: typeof import("./2017/HasOwnProperty");
    readonly HasProperty: typeof import("./2017/HasProperty");
    readonly HourFromTime: typeof import("./2017/HourFromTime");
    readonly InLeapYear: typeof import("./2017/InLeapYear");
    readonly InstanceofOperator: typeof import("./2017/InstanceofOperator");
    readonly Invoke: typeof import("./2017/Invoke");
    readonly IsAccessorDescriptor: typeof import("./2017/IsAccessorDescriptor");
    readonly IsArray: typeof import("./2017/IsArray");
    readonly IsCallable: typeof import("./2017/IsCallable");
    readonly IsConcatSpreadable: typeof import("./2017/IsConcatSpreadable");
    readonly IsConstructor: typeof import("./2017/IsConstructor");
    readonly IsDataDescriptor: typeof import("./2017/IsDataDescriptor");
    readonly IsExtensible: typeof import("./2017/IsExtensible");
    readonly IsGenericDescriptor: typeof import("./2017/IsGenericDescriptor");
    readonly IsInteger: typeof import("./2017/IsInteger");
    readonly IsPromise: typeof import("./2017/IsPromise");
    readonly IsPropertyDescriptor: typeof import("./2017/IsPropertyDescriptor");
    readonly IsPropertyKey: typeof import("./2017/IsPropertyKey");
    readonly IsRegExp: typeof import("./2017/IsRegExp");
    readonly IterableToList: typeof import("./2017/IterableToList");
    readonly IteratorClose: typeof import("./2017/IteratorClose");
    readonly IteratorComplete: typeof import("./2017/IteratorComplete");
    readonly IteratorNext: typeof import("./2017/IteratorNext");
    readonly IteratorStep: typeof import("./2017/IteratorStep");
    readonly IteratorValue: typeof import("./2017/IteratorValue");
    readonly MakeDate: typeof import("./2017/MakeDate");
    readonly MakeDay: typeof import("./2017/MakeDay");
    readonly MakeTime: typeof import("./2017/MakeTime");
    readonly MinFromTime: typeof import("./2017/MinFromTime");
    readonly modulo: typeof import("./2017/modulo");
    readonly MonthFromTime: typeof import("./2017/MonthFromTime");
    readonly msFromTime: typeof import("./2017/msFromTime");
    readonly ObjectCreate: typeof import("./2017/ObjectCreate");
    readonly OrdinaryDefineOwnProperty: typeof import("./2017/OrdinaryDefineOwnProperty");
    readonly OrdinaryGetOwnProperty: typeof import("./2017/OrdinaryGetOwnProperty");
    readonly OrdinaryGetPrototypeOf: typeof import("./2017/OrdinaryGetPrototypeOf");
    readonly OrdinaryHasInstance: typeof import("./2017/OrdinaryHasInstance");
    readonly OrdinaryHasProperty: typeof import("./2017/OrdinaryHasProperty");
    readonly OrdinarySetPrototypeOf: typeof import("./2017/OrdinarySetPrototypeOf");
    readonly RegExpExec: typeof import("./2017/RegExpExec");
    readonly RequireObjectCoercible: typeof import("./2017/RequireObjectCoercible");
    readonly SameValue: typeof import("./2017/SameValue");
    readonly SameValueNonNumber: typeof import("./2017/SameValueNonNumber");
    readonly SameValueZero: typeof import("./2017/SameValueZero");
    readonly SecFromTime: typeof import("./2017/SecFromTime");
    readonly Set: typeof import("./2017/Set");
    readonly SetFunctionName: typeof import("./2017/SetFunctionName");
    readonly SetIntegrityLevel: typeof import("./2017/SetIntegrityLevel");
    readonly SpeciesConstructor: typeof import("./2017/SpeciesConstructor");
    readonly SymbolDescriptiveString: typeof import("./2017/SymbolDescriptiveString");
    readonly TestIntegrityLevel: typeof import("./2017/TestIntegrityLevel");
    readonly thisBooleanValue: typeof import("./2017/thisBooleanValue");
    readonly thisNumberValue: typeof import("./2017/thisNumberValue");
    readonly thisStringValue: typeof import("./2017/thisStringValue");
    readonly thisTimeValue: typeof import("./2017/thisTimeValue");
    readonly TimeClip: typeof import("./2017/TimeClip");
    readonly TimeFromYear: typeof import("./2017/TimeFromYear");
    readonly TimeWithinDay: typeof import("./2017/TimeWithinDay");
    readonly ToBoolean: typeof import("./2017/ToBoolean");
    readonly ToDateString: typeof import("./2017/ToDateString");
    readonly ToIndex: typeof import("./2017/ToIndex");
    readonly ToInt16: typeof import("./2017/ToInt16");
    readonly ToInt32: typeof import("./2017/ToInt32");
    readonly ToInt8: typeof import("./2017/ToInt8");
    readonly ToInteger: typeof import("./2017/ToInteger");
    readonly ToLength: typeof import("./2017/ToLength");
    readonly ToNumber: typeof import("./2017/ToNumber");
    readonly ToObject: typeof import("./2017/ToObject");
    readonly ToPrimitive: typeof import("./2017/ToPrimitive");
    readonly ToPropertyDescriptor: typeof import("./2017/ToPropertyDescriptor");
    readonly ToPropertyKey: typeof import("./2017/ToPropertyKey");
    readonly ToString: typeof import("./2017/ToString");
    readonly ToUint16: typeof import("./2017/ToUint16");
    readonly ToUint32: typeof import("./2017/ToUint32");
    readonly ToUint8: typeof import("./2017/ToUint8");
    readonly ToUint8Clamp: typeof import("./2017/ToUint8Clamp");
    readonly Type: typeof import("./2017/Type");
    readonly ValidateAndApplyPropertyDescriptor: typeof import("./2017/ValidateAndApplyPropertyDescriptor");
    readonly WeekDay: typeof import("./2017/WeekDay");
    readonly YearFromTime: typeof import("./2017/YearFromTime");
}

declare namespace ES2017 {
    // Re-export types from previous versions
    // - ES2015:
    type PropertyKey = ES2016.PropertyKey;

    // - ES5:
    type GenericDescriptor = ES2016.GenericDescriptor;
    type AccessorDescriptor<T = unknown> = ES2016.AccessorDescriptor<T>;
    type DataDescriptor<T = unknown> = ES2016.DataDescriptor<T>;
    type PropertyDescriptor<T = unknown> = ES2016.PropertyDescriptor<T>;
}

declare const ES2017: ES2017;
export = ES2017;
