import { matchersWithOptions } from "jest-json-schema";

expect.extend(
    matchersWithOptions(
        {
            formats: {
                test: /^test$/,
            },
        },
        ajv => {
            ajv.addKeyword("test", {
                validate: (schema: any, data: string) => {
                    return schema && data === "test";
                },
                metaSchema: {
                    type: "boolean",
                },
            });
        },
    ),
);

it("validates schema", () => {
    expect({
        test: true,
        format: "test",
    }).toBeValidSchema();
});

it("schema matches data", () => {
    const schema = {
        properties: {
            hello: { type: "string" },
            test: {
                test: true,
                format: "test",
            },
        },
        required: ["hello"],
    };
    expect({ hello: "world", test: "test" }).toMatchSchema(schema);
});

it("accepts a custom Ajv class", () => {
    const FakeAjvClass = jest.fn().mockImplementation(() => ({
        opts: { code: { formats: {} } },
        addFormat: jest.fn(),
        addKeyword: jest.fn(),
    }));
    matchersWithOptions({ AjvClass: FakeAjvClass });
    expect(FakeAjvClass).toHaveBeenCalled();
});
