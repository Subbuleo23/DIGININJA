import { Lifecycle, Request, ResponseToolkit } from "hapi";

const handler: Lifecycle.Method = (request, h) => {
    return "success";
};

const strictHandler: Lifecycle.Method = (request, h) => {
    return 123;
};
