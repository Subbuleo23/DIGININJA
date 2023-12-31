import {
    isIdentifierChar,
    isIdentifierName,
    isIdentifierStart,
    isKeyword,
    isReservedWord,
    isStrictBindOnlyReservedWord,
    isStrictBindReservedWord,
    isStrictReservedWord,
} from "@babel/helper-validator-identifier";

isReservedWord("", false); // $ExpectType boolean
isStrictReservedWord("", false); // $ExpectType boolean
isStrictBindOnlyReservedWord(""); // $ExpectType boolean
isStrictBindReservedWord("", false); // $ExpectType boolean
isKeyword(""); // $ExpectType boolean
isIdentifierStart(0xffff); // $ExpectType boolean
isIdentifierChar(0xffff); // $ExpectType boolean
isIdentifierName("variableName"); // $ExpectType boolean
