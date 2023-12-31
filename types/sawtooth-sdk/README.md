# sawtooth-sdk-javascript TypeScript Defintions

## GitHub Repo for the SDK

https://github.com/hyperledger/sawtooth-sdk-javascript

## Caveats

-   `protobuf.js` has an outstanding issue that makes the `pbts` binary unable to generate TypeScript definitions for protobufs that contain enums outside of a message. Because of this, we have excluded [`authorization.proto`](https://github.com/hyperledger/sawtooth-sdk-javascript/blob/master/protos/authorization.proto) from this project.
    -   https://github.com/protobufjs/protobuf.js/issues/1342
-   When running `dts-gen -m sawtooth-sdk --dt` with `dts-gen v0.6.0`, no output is produced and the command hangs indefinitely

## Contributing

This project will need to be maintained as the SDK is updated.

The best way to verify new contributions is to test them out in an existing TypeScript project that uses the new features from the Sawtooth SDK that are missing from Definitely Typed. Then, verify that the new definitions are tested properly in Definitely Typed before opening a PR.

### Setup

Create a fork of [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) and clone it locally. `cd` into the project and run `npm install`.

Copy over the contents of `types/sawtooth-sdk` from your Definitely Typed fork to the `node_modules/@types` folder in your project, e.g.

```sh
cd /path/to/DefinitelyTyped
cp -r types/sawtooth-sdk </path/to/your-project>/node_modules/@types
```

Your project should now be able to pick up the types as you develop them in the `node_modules/@types/sawtooth-sdk` folder.

### Adding new protobuf definitions

All of the definitions for the SDK protos are autogenerated using the `pbjs` and `pbts` binaries from `protobuf.js`.

If a new protobuf is added to the SDK, follow these steps to re-generate the defintions for the `/protos` folder.

1. `git clone https://github.com/hyperledger/sawtooth-sdk-javascript.git`
2. `cd sawtooth-sdk-javascript`
3. `npm install`
4. `npx pbjs -t static-module -w commonjs $(ls -d protos/*.proto) | npx pbts -o index.d.ts -`
5. `cp index.d.ts </path/to/DefinitelyTyped>/types/sawtooth-sdk/protobuf`
6. Add the following linting rules and TypeScript defintion import to the top of `index.d.ts`

    ```
     // tslint:disable:member-access
     // tslint:disable:interface-name
     // tslint:disable:no-unnecessary-qualifier
     // tslint:disable:no-empty-interface

     /// <reference types="long" />
    ```

### Testing

When you are confident the new types are accurate, copy the changes back to Definitely Typed in `types/sawtooth-sdk`.

Before opening a PR you will need to write new tests for the updates you've made.

#### Writing tests

To assert that an expression is of a given type, use `$ExpectType`. To assert that an expression causes a compile error, use `$ExpectError`.

```
// $ExpectType PublicKey
const signerPubKey = signer.getPublicKey();

// @ts-expect-error PrivateKey
const signerPubKey = signer.getPublicKey();
```

#### Running tests

To verify the correctness of any changes, run the following tests from the root of Definitely Typed.

```sh
$ npm run prettier -- --write types/sawtooth-sdk/**/*.ts
$ npm run lint sawtooth-sdk
$ npm run test
```

### Opening A PR

At this point your changes should be ready to submit in a PR. Follow [these instructions on Editing An Existing Package](https://github.com/DefinitelyTyped/DefinitelyTyped#edit-an-existing-package) in Definitely Typed.

### Copyright (c) 2020 Target Brands, Inc.
