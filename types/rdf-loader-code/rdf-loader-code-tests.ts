import { GraphPointer } from "clownface";
import LoaderRegistry = require("rdf-loaders-registry");
import ArgumentsLoader = require("rdf-loader-code/arguments");
import EcmaScriptLoader = require("rdf-loader-code/ecmaScript");
import EcmaScriptModuleLoader = require("rdf-loader-code/ecmaScriptModule");
import EcmaScriptLiteralLoader = require("rdf-loader-code/ecmaScriptLiteral");
import { NamedNode } from "rdf-js";
import { Arguments } from "rdf-loader-code/arguments";

const node: GraphPointer = <any> {};
const registry = new LoaderRegistry();

const variables = new Map();
variables.set("name", "World");

async function ecmaScript() {
    EcmaScriptLoader.register(registry);

    registry.load<unknown, typeof EcmaScriptLoader>(node, {
        basePath: "/temp",
    });
}

async function ecmaScriptModules() {
    EcmaScriptLoader.register(registry);

    registry.load<unknown, typeof EcmaScriptModuleLoader>(node, {
        basePath: "/temp",
    });
}

async function ecmaScriptLiteral() {
    EcmaScriptLiteralLoader.register(registry);

    const literal: string | undefined = await registry.load<string, typeof EcmaScriptLiteralLoader>(node, {
        variables,
        context: {},
    });
}

async function argumentsLoader() {
    ArgumentsLoader.register(registry);

    const property: NamedNode = <any> {};
    const args: unknown[] | [Record<string, any>] | undefined = await registry.load<Arguments, typeof ArgumentsLoader>(
        node,
        {
            basePath: "/temp",
            context: {},
            variables,
            property,
        },
    );
}
