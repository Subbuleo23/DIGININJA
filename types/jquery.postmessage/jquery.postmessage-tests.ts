/// <reference types="jquery" />

function test_postMessage() {
    if (!parent) return;
    // post plain message
    $.postMessage("test message", "http://dummy.url/", parent);

    // post object message
    $.postMessage(
        {
            "a": "1",
            "b": "2",
        },
        "http://dummy.url/",
        parent,
    );
}

function test_receiveMessage() {
    // receive plain source origin
    $.receiveMessage((e) => {
        // e is an instance of MessageEvent
        console.log(e.data);
        console.log(e.source);
        console.log(e.origin);
    }, "http://dummy.url");

    // receive source origin callback
    $.receiveMessage((e) => {}, (sourceOrigin) => {
        return sourceOrigin === "http://dummy.url";
    }, 100);
}
