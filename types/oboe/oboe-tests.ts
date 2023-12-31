import oboe = require("oboe");

oboe("friends.json")
    .node("name", function(name) {
        console.log("You have a friend called", name);
    }).on("node", "{name dob address}", function(personJson) {
        console.log("Name is: %s", personJson.name);
    }).on("node", "person.address", function(address) {
        return oboe.drop;
    });

var friendCount = 0;
oboe("friends.json")
    .path("friend", function(name) {
        friendCount++;
    });

oboe("resource.json")
    .on("done", function(parsedJson) {
        console.log("Request complete", parsedJson);
    });

oboe("resource.json")
    .on("start", function(status, headers) {
        console.log("Resource cached for", headers.Age, "secs");
    });

oboe("/content")
    .fail(function(errorReport) {
        if (404 == errorReport.statusCode) {
            console.error("no such content");
        }
    });

oboe("friends.json")
    .node("friend", function(parsedJson) {
        console.log("friend parsed", parsedJson);
    });

oboe("friends.json")
    .node({
        "friend": function(parsedJson) {
            console.log("friend parsed", parsedJson);
        },
        "!": function(parsedJson) {
            console.log("root parsed", parsedJson);
        },
    });

var bookCount = 0;
const manualPump = oboe().node("book", function(parsedJson) {
    bookCount++;
});

manualPump.emit("data", "[{ book: \"Book 1\"");
manualPump.emit("data", "},{ book: \"Book 2\"");
manualPump.emit("data", "}]");
manualPump.emit("end");
console.log(bookCount, "books found");
