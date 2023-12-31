/**
 * Test suite created by Maxime LUCE <https://github.com/SomaticIT>
 *
 * Created by using code samples from https://github.com/npm/npm#using-npm-programmatically.
 */

import * as npm from "npm";

npm.load().then(() => {
    npm.commands["add-user"](["some", "args"], () => {});
});

npm.load(function(er) {
    if (er) {
        return console.error(er);
    }

    npm.commands.install(["some", "args"], function(er, data) {
        if (er) {
            return console.error(er);
        }

        // command succeeded, and data might have some info
    });

    npm.commands.view(["some", "args"], true, function() {}); // silent: true
    npm.commands.view(["some", "args"], function() {});
    npm.commands.diff(["some", "args"], () => {});

    npm.on("log", function(message: string) {
        console.log(message);
    });

    npm.config.set("audit", false);
});

// Ensure we can import interfaces
declare function dummy(config: npm.Config, commandCallback: npm.CommandCallback): void;
