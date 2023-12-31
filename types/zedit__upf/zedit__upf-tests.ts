import { GameMode, SortMode } from "xelib";

// Check for UPF gloabls
registerPatcher;
fh; // $ExpectType FileHelpers
info; // $ExpectType ModuleInfo
patcherPath; // $ExpectType string
patcherUrl; // $ExpectType string
xelib; // $ExpectType XELibModule

// Check for xelib functions disallowed in modules
// @ts-expect-error
xelib.Initialize("");
// @ts-expect-error
xelib.Finalize();
// @ts-expect-error
xelib.SetSortMode(SortMode.None);
// @ts-expect-error
xelib.ClearMessages();
// @ts-expect-error
xelib.GetExceptionMessage();
// @ts-expect-error
xelib.SetGamePath("");
// @ts-expect-error
xelib.SetLanguage("");
// @ts-expect-error
xelib.SetGameMode(GameMode.gmSSE);
// @ts-expect-error
xelib.GetLoadOrder();
// @ts-expect-error
xelib.GetActivePlugins();
// @ts-expect-error
xelib.LoadPlugins();

// Use all optional parameters
registerPatcher({
    info,
    gameModes: [GameMode.gmSSE],
    settings: {
        label: "test",
        hide: true,
        templateUrl: patcherUrl,
        controller($scope) {
            $scope;
        },
        defaultSettings: {
            patchFileName: "zTest.esp",
        },
    },
    requiredFiles() {
        return ["foo.esp", "bar.esp"];
    },
    getFilesToPatch(filenames) {
        return filenames.filter(f => f !== "baz.esp");
    },
    execute(patchFile, helpers) {
        // Check types
        patchFile; // $ExpectType FileHandle
        helpers; // $ExpectType Helpers

        return {
            initialize(patchFile, helpers) {
                // Check types
                patchFile; // $ExpectType FileHandle
                helpers; // $ExpectType Helpers
            },
            process: [
                {
                    load: {
                        signature: "ARMA",
                        overrides: true,
                        filter(record) {
                            record; // $ExpectType RecordHandle
                            return true;
                        },
                    },
                    records(filesToPatch, helpers) {
                        filesToPatch; // $ExpectType FileHandle[]
                        helpers; // $ExpectType Helpers

                        return [];
                    },
                    patch(record, helpers) {
                        record; // $ExpectType RecordHandle
                        helpers; // $ExpectType Helpers
                    },
                },
            ],
            finalize(patchFile, helpers) {
                // Check types
                patchFile; // $ExpectType FileHandle
                helpers; // $ExpectType Helpers
            },
        };
    },
});

// Check type inference for S
registerPatcher({
    info,
    gameModes: [GameMode.gmSSE],
    settings: {
        label: "test",
        templateUrl: patcherUrl,
        defaultSettings: {
            a: 1,
        },
    },
    execute(patchFile, helpers, settings, locals) {
        // Check types
        patchFile; // $ExpectType FileHandle
        helpers; // $ExpectType Helpers
        settings; // $ExpectType { a: number; }
        locals; // $ExpectType {}

        return {
            initialize(patchFile, helpers, settings, locals) {
                // Check types
                patchFile; // $ExpectType FileHandle
                helpers; // $ExpectType Helpers
                settings; // $ExpectType { a: number; }
                locals; // $ExpectType {}
            },
            process: [
                {
                    records(filesToPatch, helpers, settings, locals) {
                        filesToPatch; // $ExpectType FileHandle[]
                        helpers; // $ExpectType Helpers
                        settings; // $ExpectType { a: number; }
                        locals; // $ExpectType {}

                        return [];
                    },
                    patch(record, helpers, settings, locals) {
                        record; // $ExpectType RecordHandle
                        helpers; // $ExpectType Helpers
                        settings; // $ExpectType { a: number; }
                        locals; // $ExpectType {}
                    },
                },
            ],
            finalize(patchFile, helpers, settings, locals) {
                // Check types
                patchFile; // $ExpectType FileHandle
                helpers; // $ExpectType Helpers
                settings; // $ExpectType { a: number; }
                locals; // $ExpectType {}
            },
        };
    },
});

// Check type inference for L
registerPatcher<{ a: number; b: string }>({
    info,
    gameModes: [GameMode.gmSSE],
    settings: {
        label: "test",
        templateUrl: patcherUrl,
        defaultSettings: {},
    },
    execute(patchFile, helpers, settings, locals) {
        // Check types
        patchFile; // $ExpectType FileHandle
        helpers; // $ExpectType Helpers
        settings; // $ExpectType {}
        locals; // $ExpectType { a: number; b: string; }

        return {
            initialize(patchFile, helpers, settings, locals) {
                // Check types
                patchFile; // $ExpectType FileHandle
                helpers; // $ExpectType Helpers
                settings; // $ExpectType {}
                locals; // $ExpectType { a: number; b: string; }

                locals.a = 2;
                locals.b = "foo";
            },
            process: [
                {
                    records(filesToPatch, helpers, settings, locals) {
                        filesToPatch; // $ExpectType FileHandle[]
                        helpers; // $ExpectType Helpers
                        settings; // $ExpectType {}
                        locals; // $ExpectType { a: number; b: string; }

                        return [];
                    },
                    patch(record, helpers, settings, locals) {
                        record; // $ExpectType RecordHandle
                        helpers; // $ExpectType Helpers
                        settings; // $ExpectType {}
                        locals; // $ExpectType { a: number; b: string; }
                    },
                },
            ],
            finalize(patchFile, helpers, settings, locals) {
                // Check types
                patchFile; // $ExpectType FileHandle
                helpers; // $ExpectType Helpers
                settings; // $ExpectType {}
                locals; // $ExpectType { a: number; b: string; }
            },
        };
    },
});

// Check deprecated type for requiredFiles
registerPatcher({
    info,
    gameModes: [GameMode.gmSSE],
    settings: {
        label: "test",
        templateUrl: patcherUrl,
        defaultSettings: {},
    },
    requiredFiles: ["foo.esp"],
    execute() {
        return {
            process: [
                {
                    load: {
                        signature: "ARMA",
                    },
                    patch() {},
                },
            ],
        };
    },
});

// Check deprecated type for execute
registerPatcher({
    info,
    gameModes: [GameMode.gmSSE],
    settings: {
        label: "test",
        templateUrl: patcherUrl,
        defaultSettings: {},
    },
    execute: {
        process: [
            {
                load: {
                    signature: "ARMA",
                },
                patch() {},
            },
        ],
    },
});
