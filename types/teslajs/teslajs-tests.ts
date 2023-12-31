import * as tjs from "teslajs";

const options = { authToken: "token", vehicleID: "id" };

async function main() {
    const credentials = {
        username: "username",
        password: "password",
        mfaPassCode: "mfaPassCode",
    };
    tjs.login(credentials, (err, result) => {
        const token = result.authToken;
    });
    const vehicle = await tjs.vehicleAsync(options);
    const vehicleData = await tjs.vehicleDataAsync(options);
    const chargeState = await tjs.chargeStateAsync(options);
    await tjs.homelinkAsync(options, 36.98765432109876, -77.12345678901234, "token");
}

main();
