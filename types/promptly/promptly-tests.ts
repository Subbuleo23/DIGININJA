import promptly = require("promptly");

process.stdin;

// Options
var options: promptly.Options = {};
options = {
    default: "value",
};
options = {
    trim: false,
};
options = {
    retry: false,
};
options = {
    silent: false,
};
options = {
    input: process.stdin,
};
options = {
    output: process.stdout,
};

// Validator
options = {
    validator: () => {},
};
options = {
    validator: (value: string) => {},
};
options = {
    validator: (value: string) => {
        return "result";
    },
};
options = {
    validator: [
        (value: string) => {
            return "result";
        },
        (value: string) => {
            return "result";
        },
    ],
};

// Prompt
promptly.prompt("hello world");
promptly.prompt("hello world", options);
promptly.prompt("hello world", () => {
});
promptly.prompt("hello world", options, (err: Error, value: string) => {
});
(async () => {
    const result: string = await promptly.prompt("hello world");
});

// Password
promptly.password("hello world");
promptly.password("hello world", options);
promptly.password("hello world", () => {
});
promptly.password("hello world", options, (err: Error, value: string) => {
});
(async () => {
    const result: string = await promptly.password("hello world");
});

// Confirm
promptly.confirm("hello world");
promptly.confirm("hello world", options);
promptly.confirm("hello world", () => {
});
promptly.confirm("hello world", options, (err: Error, value: string) => {
});
(async () => {
    const result: boolean = await promptly.confirm("hello world");
});

// Choose
promptly.choose("hello world", ["test1", "test2"]);
promptly.choose("hello world", ["test1", "test2"], options);
promptly.choose("hello world", ["test1", "test2"], () => {
});
promptly.choose("hello world", ["test1", "test2"], options, (err: Error, value: string) => {
});
(async () => {
    const result: string = await promptly.choose("hello world", ["test1", "test2"]);
});
