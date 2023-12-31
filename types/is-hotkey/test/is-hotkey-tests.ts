import { compareHotkey, isCodeHotkey, isHotkey, isKeyHotkey, parseHotkey, toKeyCode, toKeyName } from "is-hotkey";

const event = new KeyboardEvent("");

isHotkey("mod+s")(event); // $ExpectType boolean
isHotkey("mod+s", { byKey: true })(event); // $ExpectType boolean

isHotkey("mod+s", event); // $ExpectType boolean
isHotkey("mod+s", { byKey: true }, event); // $ExpectType boolean

isHotkey("mod+s"); // $ExpectType (event: KeyboardEventLike) => boolean
isHotkey("mod+s", { byKey: true }); // $ExpectType (event: KeyboardEventLike) => boolean

isCodeHotkey("mod+s")(event); // $ExpectType boolean
isKeyHotkey("mod+s")(event); // $ExpectType boolean

isCodeHotkey("mod+s", event); // $ExpectType boolean
isKeyHotkey("mod+s", event); // $ExpectType boolean

toKeyName("cmd"); // $ExpectType string

toKeyCode("shift"); // $ExpectType number

parseHotkey("cmd+s"); // $ExpectType HotKey
parseHotkey("cmd+s", { byKey: true }); // $ExpectType HotKey

compareHotkey(parseHotkey("cmd+s"), event); // $ExpectType boolean

// Multiple hotkeys

isHotkey(["mod+s", "cmd+s"])(event); // $ExpectType boolean

isHotkey(["mod+s", "cmd+s"], event); // $ExpectType boolean

isCodeHotkey(["mod+s", "cmd+s"])(event); // $ExpectType boolean

isCodeHotkey(["mod+s", "cmd+s"], event); // $ExpectType boolean
