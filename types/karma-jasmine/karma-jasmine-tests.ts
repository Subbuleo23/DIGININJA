import karma = require("karma");

fdescribe("A suite", () => {
    fit("contains spec with an expectation", () => {
        expect(true).toBe(true);
    });
});

// https://github.com/karma-runner/karma-jasmine#configuration

const testOne = (config: karma.Config) => {
    config.set({
        frameworks: ["jasmine"],
        files: ["*.js"],
    });
};

const testTwo = (config: karma.Config) => {
    config.set({
        client: {
            // $ExpectType { random: true; seed: number; stopSpecOnExpectationFailure: true; stopOnSpecFailure: true; timeoutInterval: number; }
            jasmine: {
                random: true,
                seed: 4321,
                stopSpecOnExpectationFailure: true,
                stopOnSpecFailure: true,
                timeoutInterval: 1000,
            },
            shardIndex: 1,
            totalShards: 2,
        },
    });
};
