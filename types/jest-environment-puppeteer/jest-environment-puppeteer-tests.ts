import { Circus, Config } from "@jest/types";
import JestEnvironmentPuppeteer from "jest-environment-puppeteer";
import { Browser, BrowserContext, Page } from "puppeteer";

const myBrowser: Browser = browser; // $ExpectType Browser
const myPage: Page = page; // $ExpectType Page
const myContext: BrowserContext = context; // $ExpectType BrowserContext

jestPuppeteer.debug();
jestPuppeteer.resetPage();

// Creating a custom Jest environment
class CustomJestEnvironment extends JestEnvironmentPuppeteer {
    constructor(config: Config.ProjectConfig) {
        super(config);
    }

    async setup() {
        await super.setup();
        await this.global.page.goto("https://www.google.com");
    }

    async teardown() {
        await this.global.page.waitFor(2000);
        await super.teardown();
    }

    async handleTestEvent(event: Circus.Event, state: Circus.State) {
        if (event.name === "test_fn_failure") {
            console.error("woaw your test failed, you should feel bad!");
        }
    }
}

type JestEnvironmentPuppeteerGlobal = JestEnvironmentPuppeteer["global"]; // $ExpectType Global
type JestEnvironmentPuppeteerGlobalPuppeteer = JestEnvironmentPuppeteer["global"]["jestPuppeteer"]; // $ExpectType JestPuppeteer
type JestEnvironmentPuppeteerFakeTimers = JestEnvironmentPuppeteer["fakeTimers"]; // $ExpectType FakeTimers<Timer> | null
