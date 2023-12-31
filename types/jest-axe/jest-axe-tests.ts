import { axe, configureAxe, JestAxe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

const newJestWithDefaults: JestAxe = configureAxe();

const newJestWithOptions: JestAxe = configureAxe({
    elementRef: false,
    iframes: false,
    rules: {},
    runOnly: {
        type: "rules",
        values: [],
    },
    selectors: false,
    impactLevels: [],
});

const newJestWithGlobalOptions: JestAxe = configureAxe({
    globalOptions: {
        axeVersion: "3.5.5",
    },
    elementRef: false,
    iframes: false,
    rules: {},
    runOnly: {
        type: "rules",
        values: [],
    },
    selectors: false,
    impactLevels: [],
});

const sameJest: JestAxe = axe;

expect("").toHaveNoViolations();
expect(document.body).toHaveNoViolations();

(async () => {
    expect(await Promise.resolve(document.body)).toHaveNoViolations();
    await expect(Promise.resolve(document.body)).resolves.toHaveNoViolations();
});
