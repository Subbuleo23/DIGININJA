import * as cfenv from "cfenv";

const appEnv = cfenv.getAppEnv(); // $ExpectType AppEnv

cfenv.getAppEnv({}); // $ExpectType AppEnv
cfenv.getAppEnv({ name: "foo" }); // $ExpectType AppEnv
cfenv.getAppEnv({ protocol: "foo" }); // $ExpectType AppEnv
cfenv.getAppEnv({ vcap: {} }); // $ExpectType AppEnv
cfenv.getAppEnv({ vcap: { application: { name: "foo" } } }); // $ExpectType AppEnv
cfenv.getAppEnv({ vcap: { services: { foo: [{ name: "bar" }] } } }); // $ExpectType AppEnv
cfenv.getAppEnv({ vcapFile: "foo" }); // $ExpectType AppEnv

appEnv.app; // $ExpectType Record<string, any>
appEnv.isLocal; // $ExpectType boolean
appEnv.name; // $ExpectType string
appEnv.port; // $ExpectType number
appEnv.bind; // $ExpectType string
appEnv.urls; // $ExpectType string[]
appEnv.url; // $ExpectType string
appEnv.services; // $ExpectType Record<string, any>

appEnv.toJSON(); // $ExpectType string

appEnv.getServices(); // $ExpectType { [key: string]: Service; }

appEnv.getService("foo"); // $ExpectType Service | null
appEnv.getService(/foo/); // $ExpectType Service | null

appEnv.getServiceURL("foo"); // $ExpectType string | null
appEnv.getServiceURL(/foo/); // $ExpectType string | null
appEnv.getServiceURL("foo", { a: "b" }); // $ExpectType string | null

appEnv.getServiceCreds("foo"); // $ExpectType Record<string, any> | null
appEnv.getServiceCreds(/foo/); // $ExpectType Record<string, any> | null
