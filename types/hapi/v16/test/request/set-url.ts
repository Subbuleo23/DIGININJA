// From https://hapijs.com/api/16.1.1#requestseturlurl-striptrailingslash

import * as Hapi from "hapi";
const server = new Hapi.Server();
server.connection({ port: 80 });

var onRequest: Hapi.ServerExtRequestHandler = function(request, reply) {
    // Change all requests to '/test'
    request.setUrl("/test");
    return reply.continue();
};

server.ext("onRequest", onRequest);

// Example 2

import * as Url from "url";

onRequest = function(request, reply) {
    const uri = request.raw.req.url;
    const parsed = Url.parse(uri!, false);
    request.setUrl(parsed);

    return reply.continue();
};

server.ext("onRequest", onRequest);
