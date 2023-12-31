import { add, remove, set } from "url-params";

const url1 = add("http://www.example.com/?foo=2+3+6&baz=6", "foo", 4);
const url2 = remove("http://www.example.com/?foo=2+3+6&baz=6", "foo", 3);
const url3 = set("http://www.example.com/?foo=2+3+6&baz=6", "foo", 3);

const url4 = add("http://www.example.com/?foo=2+3+6&baz=6", "foo"); // $ExpectType string
const url5 = remove("http://www.example.com?foo=2+3", "foo"); // $ExpectType string
const url6 = set("http://www.example.com?foo=2+3", "foo"); // $ExpectType string
