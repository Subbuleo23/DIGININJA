function test_fin_me() {
    const { uuid, name, isWindow, isView, isFrame } = fin.me;
}

function test_application() {
    let application: fin.OpenFinApplication;
    // constructor
    application = new fin.desktop.Application({
        url: "application.html",
        uuid: "74BED629-2D8E-4141-8582-73E364BDFA74",
        name: "Application Name",
        plugins: false,
        mainWindowOptions: {
            defaultHeight: 600,
            defaultWidth: 800,
            defaultTop: 300,
            defaultLeft: 300,
            autoShow: true,
        },
    }, (successObj) => {
        console.log("Application successfully created, HTTP response code:", successObj);
        application.run();
    }, (error) => {
        console.log("Error creating application:", error);
    });
    // createFromManifest
    fin.desktop.Application.createFromManifest("http://stuf.com/app.json", (app) => {
        console.log(app.uuid);
    }, err => console.log(err));
    // getCurrent
    application = fin.desktop.Application.getCurrent();
    // wrap
    application = fin.desktop.Application.wrap("454C7F31-A915-4EA2-83F2-CFA655453C52");
    // getWindow
    application.getWindow();
    // addEventListener
    application.addEventListener("closed", (event) => {
        console.log("The application has closed");
    }, () => {
        console.log("The registration was successful");
    }, reason => {
        console.log("failure: " + reason);
    });
    // close
    application.close();
    // getChildWindows
    application.getChildWindows(children => {
        children.forEach(childWindow => {
            console.log("Showing child: " + childWindow.name);
            childWindow.show();
        });
    });
    // getGroups
    application.getGroups(allGroups => {
        console.log(`There are a total of ${allGroups.length} groups.`);

        let groupCounter = 1;
        allGroups.forEach(windowGroup => {
            console.log(`Group ${groupCounter} contains ${windowGroup.length} windows.`);
            ++groupCounter;
        });
    });
    // getInfo
    application.getInfo(info => {
        console.log(`Launch mode: ${info.launchMode}`);
    });
    // getManifest
    application.getManifest(manifest => {
        console.log("Application manifest:");
        console.log(manifest);
    });
    // getParentUuid
    application.getParentUuid(parentUuid => {
        console.log("UUID of parent application:");
        console.log(parentUuid);
    });
    // getShortcuts
    application.getShortcuts(config => {
        console.log("Desktop shortcut is enabled: ", config.desktop);
        console.log("Start Menu shortcut is enabled: ", config.startMenu);
        console.log("System Startup shortcut is enabled: ", config.systemStartup);
    });
    // getTrayIconInfo
    application.getTrayIconInfo(info => {
        console.log(
            info.x,
            info.y,
            info.bounds.left,
            info.bounds.top,
            info.bounds.height,
            info.bounds.width,
            info.monitorInfo.reason,
        );
    });
    // getZoomLevel
    application.getZoomLevel(level => {
        console.log("Application zoom level:");
        console.log(level);
    });
    // isRunning
    application.isRunning(running => {
        console.log("the application is", running ? "running" : "not running");
    });
    // registerCustomData
    application.registerUser("a", "b", () => console.log("done"), err => console.log(err));
    // removeEventListener
    application.removeEventListener("closed", (event: any) => {
        console.log(event);
    }, () => {
        console.log("The unregistration was successful");
    }, err => {
        console.log("failure:", err);
    });
    // removeTrayIcon
    application.removeTrayIcon(() => {
        console.log("Removed the tray icon.");
    }, err => {
        console.log("failure:", err);
    });
    // restart
    application.restart(() => {
        console.log("You will not read this.");
    }, err => {
        console.log("failure:", err);
    });
    // run
    application.run(() => {
        console.log("Application is running.");
    }, err => {
        console.log("failure:", err);
    });
    // schedule restart
    application.scheduleRestart(() => {
        console.log("You will not read this.");
    }, err => {
        console.log("failure:", err);
    });
    // sendApplicationLog
    application.sendApplicationLog(info => {
        console.log("Application logId:");
        console.log(info.logId);
    });
    // setAppLogUsername
    application.setAppLogUsername("username", () => {
        console.log("Successfully set app log username");
    }, error => {
        console.log("Failed to set app log username. Error: ", error);
    });
    // setShortcuts
    application.setShortcuts({
        desktop: true,
        startMenu: false,
        systemStartup: true,
    }, () => {
        console.log("Successfully set new shortcut states");
    }, error => {
        console.log("Failed to set new shortcut states. Error: ", error);
    });
    // setTrayIcon
    application.setTrayIcon("https://developer.openf.in/download/openfin.png", clickInfo => {
        console.log(`The mouse has clicked at (${clickInfo.x}, ${clickInfo.y})`);
    });
    // setZoomLevel
    application.setZoomLevel(2, () => {
        console.log("Successfully set application zoom level");
    }, error => {
        console.log("Failed to set application zoom level. Error: ", error);
    });
    // terminate
    application.terminate();
    // wait
    application.addEventListener("not-responding", () => {
        console.log("waiting for hung application");
        application.wait();
    });
    // uuid
    const hasUuid = application.uuid;
}

function test_external_application() {
    let externalApp: fin.OpenFinExternalApplication;
    // wrap
    externalApp = fin.desktop.ExternalApplication.wrap("my-uuid");
    // addEventListener
    externalApp.addEventListener("connected", () => {
        console.log("external app connected");
    }, () => {
        console.log("The registration was successful");
    }, (reason, err) => {
        console.log(`Error Message: ${err.message} Error Stack: ${err.stack}`);
    });
    // removeEventListener
    const previousCallback = () => {};
    externalApp.removeEventListener("connected", previousCallback, () => {
        console.log("The unregistration was successful");
    }, (reason, err) => {
        console.log(`Error Message: ${err.message} Error Stack: ${err.stack}`);
    });

    // getInfo
    externalApp.getInfo(info => {
        console.log(info.parent.uuid, info.parent.name);
    }, err => console.log(err));
}

function test_global_hot_key() {
    // addEventListener
    fin.desktop.GlobalHotkey.addEventListener("registered", (event) => {
        console.log(` window ${event.identity.name} has registered ${event.hotkey}`, event);
    }, () => {
        console.log("The registration was successful");
    }, (reason, err) => {
        console.log(`Error Message: ${err.message} Error Stack: ${err.stack}`);
    });
    // isRegister
    const hotkey = "CommandOrControl+X";
    fin.desktop.GlobalHotkey.isRegistered(hotkey, registered => {
        console.log(`hotkey ${hotkey} is registered ? ${registered}`);
    }, (reason, err) => {
        console.log("Error unregistering the hotkey", err);
    });
    // register
    fin.desktop.GlobalHotkey.register(hotkey, () => {
        console.log(`${hotkey} pressed`);
    }, () => {
        console.log("Success");
    }, (reason, err) => {
        console.log("Error registering the hotkey", err);
    });
    // removeEventListener
    const previousCallback = () => {};
    fin.desktop.GlobalHotkey.removeEventListener("registered", previousCallback, () => {
        console.log("The unregistration was successful");
    }, (reason, err) => {
        console.log(`Error Message: ${err.message} Error Stack: ${err.stack}`);
    });
    // unregister
    fin.desktop.GlobalHotkey.unregister(hotkey, () => {
        console.log("Success");
    }, (reason, err) => {
        console.log("Error unregistering the hotkey", err);
    });
    // unregisterAll
    fin.desktop.GlobalHotkey.unregisterAll(() => {
        console.log("Success");
    }, (reason, err) => {
        console.log("Error unregistering all hotkeys for this application", err);
    });
}

function test_inter_application_bus() {
    // addSubscribeListener
    fin.desktop.InterApplicationBus.addSubscribeListener((uuid, topic, name) => {
        console.log(`The application ${uuid} has subscribed to ${topic}`);
    });
    // addUnsubscribeListener
    fin.desktop.InterApplicationBus.addUnsubscribeListener((uuid, topic, name) => {
        console.log(`The application ${uuid} has unsubscribed to ${topic}`);
    });
    // removeSubscribeListener
    const aRegisteredListener = (uuid: string, topic: string, name: string) => {};
    fin.desktop.InterApplicationBus.removeSubscribeListener(aRegisteredListener);
    // removeUnsubscribeListener
    fin.desktop.InterApplicationBus.removeUnsubscribeListener(aRegisteredListener);
    // publish
    fin.desktop.InterApplicationBus.publish("a topic", {
        field1: "value1",
        field2: "value2",
    });
    // send
    fin.desktop.InterApplicationBus.send("an application's uuid", "a topic", {
        field1: "value1",
        field2: "value2",
    });
    // subscribe
    fin.desktop.InterApplicationBus.subscribe("*", "a topic", (message, uuid, name) => {
        console.log(`The application ${uuid} sent this message: ${message}`);
    });
    // unsubscribe
    const aRegisteredMessageListener = (message: any, senderUuid: string) => {
        console.log(message, senderUuid);
    };
    fin.desktop.InterApplicationBus.unsubscribe("*", "a topic", aRegisteredMessageListener);
}

function test_notification() {
    let notification: fin.OpenFinNotification;
    // getCurrent
    notification = fin.desktop.Notification.getCurrent();
    // close
    notification.close();
    // sendMessage
    notification = new fin.desktop.Notification({
        timeout: 10,
        url: "http://localhost:5000/Account/Register",
        message: "Hello",
        onShow: () => {},
        // onClose: () => { },
        onDismiss: () => {},
        // onClick: () => { },
        onMessage: () => {},
        onError: () => {},
    });
    // sendMessageToApplication
    notification.sendMessageToApplication("some message");
}

function test_system() {
    // addEventListener
    fin.desktop.System.addEventListener("monitor-info-changed", event => {
        console.log("The monitor information has changed to: ", event);
    }, () => {
        console.log("The registration was successful");
    }, err => {
        console.log("failure: " + err);
    });
    // clearCache
    fin.desktop.System.clearCache({
        cache: true,
        cookies: true,
        localStorage: true,
        appcache: true,
    });
    // deleteCacheOnExit
    fin.desktop.System.deleteCacheOnExit(() => {
        console.log("successful");
    }, err => {
        console.log("failure: " + err);
    });
    // downloadAsset
    const dirAppAsset = {
        src: "http://local:8000/dir.zip",
        alias: "dirApp",
        version: "1.23.24",
        target: "dir.bat",
        args: "",
    };
    fin.desktop.System.downloadAsset(dirAppAsset, progress => {
        const downloadedPercent = Math.floor((progress.downloadedBytes / progress.totalBytes) * 100);
        console.log(`Downloaded ${downloadedPercent}%`);
    }, p => {
        console.log(`Downlod complete, can be found on ${p.path}`);
        // lets launch our application asset.
        // launchDirApp();
    }, (reason, err) => {
        console.log(reason, err);
    });
    // downloadRuntime
    fin.desktop.System.downloadRuntime(
        { version: "9.61.31.56" },
        progress => {
            console.log(progress.downloadedBytes, progress.downloadedBytes);
        },
        () => console.log("download complete"),
        err => console.error(err),
    );
    // downloadPreloadScript
    const preloadScripts = [
        { url: "http://whatever.com/script.js" },
    ];
    fin.desktop.System.downloadPreloadScripts(preloadScripts, info => {
        const downloadInfo = info[0];
        console.log(downloadInfo.success, downloadInfo.url, downloadInfo.error);
    }, err => {
        console.log(err);
    });
    // exit
    fin.desktop.System.exit(() => {
        console.log("successful");
    }, err => {
        console.log("failure: " + err);
    });
    // flushCookieStore
    fin.desktop.System.flushCookieStore(() => {
        console.log("successful");
    }, err => {
        console.log("failure", err);
    });
    // getAllApplications
    fin.desktop.System.getAllApplications(applicationInfoList => {
        applicationInfoList.forEach(applicationInfo => {
            console.log(
                "Showing information for application with uuid: "
                    + applicationInfo.uuid,
            );
            console.log("isRunning: ", applicationInfo.isRunning);
        });
    });
    // getAllExternalApplications
    fin.desktop.System.getAllExternalApplications(externalAppsInfoList => {
        externalAppsInfoList.forEach(appInfo => {
            console.log(`External app connected to the runtime with UUID ${appInfo.uuid}`);
        });
    });
    // getAllWindows
    fin.desktop.System.getAllWindows(windowInfoList => {
        windowInfoList.forEach(windowInfo => {
            console.log("Showing information for application with uuid: ", windowInfo.uuid);
            console.log("Main window: ", windowInfo.mainWindow);
            console.log("Child windows: ", windowInfo.childWindows);
        });
    });
    // getAppAssetInfo
    fin.desktop.System.getAppAssetInfo({ alias: "myAppAsset" }, info => {
        console.log(info.alias, info.args, info.mandatory, info.src, info.target, info.version);
    }, err => console.log(err));
    // getCommandLineArguments
    fin.desktop.System.getCommandLineArguments(args => {
        console.log("The command line arguments are " + args);
    });
    // getCookieInfo
    fin.desktop.System.getCookies({ name: "myCookie1" }, cookies => {
        const cookie1 = cookies[0];
        console.log(cookie1.name, cookie1.domain, cookie1.path);
    }, err => console.log(err));
    // getCrashReporterState
    fin.desktop.System.getCrashReporterState(state => console.log(state), err => console.error(err));
    // getDeviceId
    fin.desktop.System.getDeviceId(id => {
        console.log("The id of the device is: " + id);
    });
    // getDeviceUserId
    fin.desktop.System.getDeviceUserId(id => console.log(id), err => console.error(err));
    // getEntityInfo
    fin.desktop.System.getEntityInfo("uuid", "name", info => {
        console.log(info.entityType, info.name, info.uuid, info.parent.name, info.parent.uuid);
    }, err => console.log(err));
    // getEnvironmentVariable
    fin.desktop.System.getEnvironmentVariable("APPDATA", variable => {
        console.log("this is the APPDATA value", variable);
    });
    // getFocusedWindow
    fin.desktop.System.getFocusedWindow(win => {
        console.log(win.uuid, win.name);
    }, err => console.log(err));
    // getHostSpecs
    fin.desktop.System.getHostSpecs(info => {
        console.log(info);
    }, error => {
        console.log("There was an error:", error);
    });
    // getInstalledRuntimes
    fin.desktop.System.getInstalledRuntimes().then(runtimes => console.log(runtimes)).catch(err => console.log(err));
    // getLog
    fin.desktop.System.getLog("debug-2015-01-08-22-27-53.log", log => {
        console.log(log);
    });
    // getLogList
    fin.desktop.System.getLogList(logList => {
        logList.forEach(logInfo => {
            console.log(
                `The filename of the log is ${logInfo.name}, the size is ${logInfo.size}, and the date of creation is ${logInfo.date}`,
            );
        });
    });
    // getMachineId
    fin.desktop.System.getMachineId(id => console.log(id), err => console.error(err));
    // getMinLogLevel
    fin.desktop.System.getMinLogLevel(level => console.log(level), err => console.log(err));
    // getMonitorInfo
    fin.desktop.System.getMonitorInfo(monitorInfo => {
        console.log("This object contains information about all monitors: ", monitorInfo);
    });
    // getMousePosition
    fin.desktop.System.getMousePosition(mousePosition => {
        console.log(`The mouse is located at left: ${mousePosition.left}, top: ${mousePosition.top}`);
    });
    // getProcessList
    fin.desktop.System.getProcessList(list => {
        list.forEach(process => {
            console.log(`UUID: ${process.uuid}, Application Name: ${process.name}`);
        });
    });
    // getProxySettings
    fin.desktop.System.getProxySettings(proxy => {
        console.log(proxy);
    });
    // getRuntimeInfo
    fin.desktop.System.getRuntimeInfo(runtimeInfoObject => {
        console.log("Runtime version:", runtimeInfoObject.version);
        console.log("Runtime architecture:", runtimeInfoObject["architecture"]);
    }, err => {
        console.log("Failed to get runtime info, error message:", err);
    });
    // getRvmInfo
    fin.desktop.System.getRvmInfo(rvmInfoObject => {
        console.log("RVM version:", rvmInfoObject.version);
        console.log("RVM has been running since:", rvmInfoObject["start-time"]);
    }, err => {
        console.log("Failed to get rvm info, error message:", err);
    });
    // getVersion
    fin.desktop.System.getVersion(version => {
        console.log("The version is " + version);
    });
    // launchExternalProcess
    fin.desktop.System.launchExternalProcess({
        path: "notepad",
        arguments: "",
        listener(result: { exitCode: any }) {
            console.log("the exit code", result.exitCode);
        },
    }, payload => {
        console.log("Success:", payload.uuid);
    }, error => {
        console.log("Error:", error);
    });
    // launch external process with an alias
    fin.desktop.System.launchExternalProcess({
        // Additionally note that the executable found in the zip file specified in appAssets
        // will default to the one mentioned by appAssets.target
        // If the the path below refers to a specific path it will override this default
        alias: "myApp",
        listener(result: { exitCode: any }) {
            console.log("the exit code", result.exitCode);
        },
    }, payload => {
        console.log("Success:", payload.uuid);
    }, error => {
        console.log("Error:", error);
    });
    //
    fin.desktop.System.launchExternalProcess({
        alias: "myApp",
        arguments: "e f g",
        listener(result: { exitCode: any }) {
            console.log("the exit code", result.exitCode);
        },
    }, payload => {
        console.log("Success:", payload.uuid);
    }, error => {
        console.log("Error:", error);
    });
    //
    fin.desktop.System.launchExternalProcess({
        path: "C:\Users\ExampleUser\AppData\Local\OpenFin\OpenFinRVM.exe",
        arguments: "--version",
        certificate: {
            trusted: true,
            subject: "O=OpenFin INC., L=New York, S=NY, C=US",
            thumbprint: "3c a5 28 19 83 05 fe 69 88 e6 8f 4b 3a af c5 c5 1b 07 80 5b",
        },
        listener(result: { exitCode: any }) {
            console.log("the exit code", result.exitCode);
        },
    }, payload => {
        console.log("Success:", payload.uuid);
    }, error => {
        console.log("Error:", error);
    });
    // log
    fin.desktop.System.log("info", "An example log message", () => {
        console.log("message successfully logged");
    }, err => {
        console.log(err);
    });
    // monitorExternalProcess
    fin.desktop.System.monitorExternalProcess({
        pid: 2508,
        listener(result: { exitCode: any }) {
            console.log("the exit code", result.exitCode);
        },
    }, payload => {
        console.log("The process is now being monitored: ", payload.uuid);
    }, error => {
        console.log("Error:", error);
    });
    // openUrlWithBrowser
    fin.desktop.System.openUrlWithBrowser("https://developer.openf.in/", () => {
        console.log("successful");
    }, err => {
        console.log("failure: " + err);
    });
    // readRegistryValue
    fin.desktop.System.readRegistryValue("HKEY_SOMETHING", "HARDWARE\\SOMETHING", "BootSomething", info => {
        console.log(info.data, info.rootKey, info.subkey, info.type, info.value);
    }, err => console.log(err));
    // registerExternalConnection
    fin.desktop.System.registerExternalConnection("remote-connection-uuid", (...args: any[]) => {
        console.log(args);
    });
    // releaseExternalProcess
    fin.desktop.System.launchExternalProcess({
        path: "notepad",
        arguments: "",
        listener(result: { exitCode: any }) {
            console.log("The exit code", result.exitCode);
        },
    }, result => {
        console.log("Result UUID is " + result.uuid);

        // release it.
        fin.desktop.System.releaseExternalProcess(result.uuid, () => {
            console.log("Process has been unmapped!");
        }, reason => {
            console.log("failure: " + reason);
        });
    });
    // removeEventListener
    fin.desktop.System.removeEventListener("monitor-info-changed", (event) => {
        console.log(event);
    }, () => {
        console.log("successful");
    }, (err: any) => {
        console.log("failure: " + err);
    });
    // setMinLogLevel
    fin.desktop.System.setMinLogLevel("log level", () => console.log("Success"), (err: any) => console.error(err));
    // showDeveloperTools
    fin.desktop.System.showDeveloperTools("uuid", "name", () => {
        console.log("successful");
    }, err => {
        console.log("failure: " + err);
    });
    // startCrashReporter
    fin.desktop.System.startCrashReporter({ diagnosticMode: true }, () => {
        console.log("success");
    }, err => {
        console.log(err);
    });
    // terminateExternalProcess
    fin.desktop.System.launchExternalProcess({
        // notepad is in the system's PATH
        path: "notepad",
        arguments: "",
        listener(result: { exitCode: any }) {
            console.log("The exit code", result.exitCode);
        },
    }, result => {
        console.log("Result UUID is " + result.uuid);

        // Attempt to close the process. Terminate after 4 seconds if it
        // has not done so.
        fin.desktop.System.terminateExternalProcess(result.uuid, 4000, true, info => {
            console.log("Termination result " + info.result);
        }, reason => {
            console.log("failure: " + reason);
        });
    });
    // updateProxySettings
    fin.desktop.System.updateProxySettings("type", "proxyAddress", 8080, () => {
        console.log("success");
    }, err => {
        console.log(err);
    });
}

function test_system_clipboard() {
    // availableFormats
    fin.desktop.System.Clipboard.availableFormats(null, formats => {
        formats.forEach(format => console.log(`The format ${format} is available to read`));
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
    // readHtml
    fin.desktop.System.Clipboard.readHtml(null, html => {
        console.log(`This is the html from the clipboard: ${html}`);
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
    // readRtf
    fin.desktop.System.Clipboard.readRtf(null, rtf => {
        console.log(`This is the rtf from the clipboard: ${rtf}`);
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
    // readText
    fin.desktop.System.Clipboard.readText(null, text => {
        console.log(`This is the text from the clipboard: ${text}`);
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
    // write
    fin.desktop.System.Clipboard.write(
        {
            text: "Hello Text!",
            html: "<h1>Hello Html</h1>",
            rtf: "Hello Rtf",
        },
        null,
        () => {
            console.log("Success!!");
        },
        (reason, err) => {
            console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
        },
    );
    // writeHtml
    fin.desktop.System.Clipboard.writeHtml("<h1>Hello World</h1>", null, () => {
        console.log("Success!!");
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
    // writeRtf
    fin.desktop.System.Clipboard.writeRtf("Hello World!", null, () => {
        console.log("Success!!");
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
    // writeText
    fin.desktop.System.Clipboard.writeText("Hello World", null, () => {
        console.log("Success!!");
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
}

function test_window() {
    let finWindow: fin.OpenFinWindow;
    // constructor
    finWindow = new fin.desktop.Window({
        name: "childWindow",
        url: "child.html",
        defaultWidth: 320,
        defaultHeight: 320,
        defaultTop: 10,
        defaultLeft: 300,
        frame: false,
        resizable: false,
        state: "normal",
    }, () => {
        const _win = finWindow.getNativeWindow();
        _win.addEventListener("DOMContentLoaded", () => {
            finWindow.show();
        });
    }, error => {
        console.log("Error creating window:", error);
    });
    // getCurrent
    finWindow = fin.desktop.Window.getCurrent();
    // getNativeWindow
    let nativeWindow: Window;
    nativeWindow = finWindow.getNativeWindow();
    // getParentApplication
    let parentApp: fin.OpenFinApplication;
    parentApp = finWindow.getParentApplication();
    // getParentWindow
    let parentFinWindow: fin.OpenFinWindow;
    parentFinWindow = finWindow.getParentWindow();
    // wrap
    finWindow = fin.desktop.Window.wrap("uuid", "name");
    // addEventListener
    finWindow.addEventListener("bounds-changed", event => {
        console.log("The window has been moved or resized");
    }, () => {
        console.log("The registration was successful");
    }, reason => {
        console.log("failure:" + reason);
    });
    // animate
    finWindow.animate({
        opacity: {
            opacity: 0.15,
            duration: 1000,
        },
        position: {
            left: 10,
            top: 10,
            duration: 3000,
        },
    }, {
        interrupt: false,
    }, evt => {
        // Callback will only fire after both "opacity" and "position" have finished animating.
    });
    // authenticate
    finWindow.addEventListener("auth-requested", evt => {
        finWindow.authenticate("userName", "P@assw0rd", () => {}, (reason, err) => {
            console.log("failure:", err);
        });
    });
    // blur
    finWindow.blur();
    // bringToFront
    finWindow.bringToFront();
    // close
    finWindow.close();
    // executeJavaScript
    finWindow.executeJavaScript("console.log('Hello world');");
    // disableFrame
    finWindow.disableFrame();
    // enableFrame
    finWindow.enableFrame();
    // flash
    finWindow.flash();
    // focus
    finWindow.focus();
    // getAllFrames
    finWindow.getAllFrames(frames => {
        console.log(`name: ${frames[0].name} uuid: ${frames[0].uuid}`);
    });
    // getBounds
    finWindow.getBounds(bounds => {
        console.log(`top: ${bounds.top} left: ${bounds.left} height: ${bounds.height} width: ${bounds.width}`);
    });
    // getGroups
    finWindow.getGroup(windowGroup => {
        console.log(`There are a total of ${windowGroup.length} windows in this group.`);
    });
    // getInfo
    finWindow.getInfo(info => {
        console.log(`Window title: ${info.title}`);
    });
    // getOptions
    finWindow.getOptions(options => {
        console.log(options);
    });
    // getSnapshot
    finWindow.getSnapshot(base64Snapshot => {
        console.log("data:image/png;base64," + base64Snapshot);
    });
    // getState
    finWindow.getState(state => {
        console.log("state: " + state);
    });
    // getZoomLevel
    finWindow.getZoomLevel(level => {
        console.log("zoom level: " + level);
    }, error => {
        console.log("error:", error);
    });
    // hide
    finWindow.hide();
    // isShowing
    finWindow.isShowing(showing => {
        console.log("the window is " + (showing ? "showing" : "hidden"));
    });
    // joinGroup
    let secondWindow = new fin.desktop.Window({
        url: "http://www.openfin.co",
        name: "secondWindow",
        autoShow: true,
    }, () => {
        // When mainWindow moves or is moved, secondWindow moves by the same amount
        secondWindow.joinGroup(finWindow);
    });
    // leaveGroup
    secondWindow = new fin.desktop.Window({
        url: "http://www.openfin.co",
        name: "secondWindow",
        autoShow: true,
    }, () => {
        // When finWindow moves or is moved, secondWindow moves by the same amount
        secondWindow.joinGroup(finWindow, () => {
            // once we are in the group, lets leave it.
            secondWindow.leaveGroup();
        });
    });
    // maximize
    finWindow.maximize();
    // mergeGroups
    {
        const finWindowOne = new fin.desktop.Window({
            url: "http://www.openfin.co",
            name: "finWindowOne",
            autoShow: true,
        });
        const finWindowTwo = new fin.desktop.Window({
            url: "http://www.openfin.co",
            name: "finWindowTwo",
            autoShow: true,
        });
        const finWindowThree = new fin.desktop.Window({
            url: "http://www.openfin.co",
            name: "finWindowThree",
            autoShow: true,
        });
        const finWindowFour = new fin.desktop.Window({
            url: "http://www.openfin.co",
            name: "finWindowFour",
            autoShow: true,
        });
        // When finWindowOne moves or is moved, finWindowTwo moves by the same amount
        finWindowOne.joinGroup(finWindowTwo);
        // When finWindowThree moves or is moved, finWindowFour moves by the same amount
        finWindowThree.joinGroup(finWindowFour);
        // finWindowOne, finWindowTwo, finWindowThree, and finWindowFour now move together in the same group
        finWindowOne.mergeGroups(finWindowThree);
    }
    // minimize
    finWindow.minimize();
    // moveBy
    finWindow.moveBy(10, 10);
    // moveTo
    finWindow.moveTo(100, 200);
    // navigate
    finWindow.navigate("https://openfin.co");
    // navigateBack
    finWindow.navigateBack();
    // navigateForward
    finWindow.navigateForward();
    // reload
    finWindow.reload();
    // removeEventListener
    finWindow.removeEventListener("bounds-changed", event => {
        console.log(event);
    });
    // resizeBy
    finWindow.resizeBy(10, 10, "top-right");
    // resizeTo
    finWindow.resizeTo(10, 10, "top-right");
    // restore
    finWindow.restore();
    // setAsForeground
    finWindow.setAsForeground();
    // setBounds
    finWindow.setBounds(100, 200, 400, 400);
    // setZoomLevel
    finWindow.setZoomLevel(10);
    // show
    finWindow.show();
    // showAt
    finWindow.showAt(10, 10, false);
    // stopFlashing
    finWindow.stopFlashing();
    // stopNavigation
    finWindow.stopNavigation();
    // updateOptions
    finWindow.updateOptions({
        frame: false,
        maxWidth: 500,
    });
}

async function test_external_window() {
    // wrap
    const externalWin = await fin.ExternalWindow.wrap({ uuid: "uuid", name: "name" });

    // getCurrent
    fin.System.getFocusedExternalWindow();

    // getAllExternalWindows
    fin.System.getAllExternalWindows().then((exWins: any[]) => exWins.forEach(exWin => console.log(exWin.uuid)));
    // addEventListener
    externalWin.addListener("some-event", (event: { message: any }) => console.log(event.message));

    // removeEventListener
    externalWin.removeListener("some-event", () => {});

    // getInfo
    externalWin.getInfo().then(console.log);
}

function test_frame() {
    // wrap
    const frame = fin.desktop.Frame.wrap("uuid", "name");
    // getCurrent
    const currentFrame = fin.Frame.getCurrentSync();
    // addEventlistener
    frame.addEventListener(
        "event",
        () => console.log("on event"),
        () => console.log("success"),
        err => console.error(err),
    );
    // removeEventListener
    frame.addEventListener(
        "event",
        () => console.log("on event"),
        () => console.log("success"),
        err => console.error(err),
    );
    // getInfo
    frame.getInfo(info => {
        console.log(info.uuid, info.name, info.entityType, info.parent.uuid, info.parent.name);
    }, err => console.error(err));
    // getParentWindow
    frame.getParentWindow(parent => {
        console.log(parent.uuid, parent.name, parent.entityType, parent.parent.uuid, parent.parent.name);
    }, err => console.error(err));
}

async function testPlatform() {
    // ** Class Methods ** //
    // wrap
    const platform = await fin.Platform.wrap({ uuid: "uuid", name: "name" });
    // getCurrent
    const currentPlatform = await fin.Platform.getCurrent();
    // getCurrentSync
    const anotherCurrentPlatform = fin.Platform.getCurrentSync();
    // start
    fin.Platform.start({ uuid: "uuid", name: "name" });
    // start from manifest
    fin.Platform.startFromManifest("some manifest url");

    // ** Instance Methods ** //
    // getSnapshot & applySnapshot
    const snapshop = await platform.getSnapshot();
    platform.applySnapshot(snapshop);
    // create, reparent & close Views
    const { identity: newViewIdentity } = await platform.createView({
        url: "some url",
        name: "some name",
        target: { uuid: "uuid", name: "window name" },
    });
    platform.reparentView({ uuid: "uuid", name: "view_name" }, { uuid: "uuid", name: "target_name" });
    platform.closeView(newViewIdentity);
    // createWindow
    platform.createWindow({ uuid: "uuid", name: "name" });
    // get and set context
    const context = await platform.getWindowContext();
    platform.setWindowContext(context);
    // launchLegacyManifest
    platform.launchLegacyManifest("some_manifest_url.html");
    // quit
    platform.quit();
}

async function testView() {
    // ** Class Methods ** //
    // wrap
    const view = await fin.View.wrap({ uuid: "uuid", name: "name" });
    // getCurrent
    const currentView = await fin.View.getCurrent();
    // getCurrentSync
    const anotherCurrentView = fin.View.getCurrentSync();
    // create
    fin.View.create({ name: "name", url: "some_url.html", target: { uuid: "uuid", name: "window name" } });
    // start from manifest
    fin.Platform.startFromManifest("some manifest url");

    // ** Instance Methods ** //
    // attach
    view.attach({ uuid: "uuid", name: "target window name" });
    // show and hide
    view.show().then(() => view.hide());
    // setBounds
    view.setBounds({ height: 320, width: 320, top: 20, left: 20 });
    // getInfo
    const info = await view.getInfo();
    // get and update options
    view.getOptions().then(() => view.updateOptions({ autoResize: { width: true } }));
    // getCurrentWindow
    const currentWin = await view.getCurrentWindow();
    // setCustomWindowHandler
    view.setCustomWindowHandler(["url1.html, url2.html"], () => null);
    // destroy
    view.destroy();
}

async function testLayout() {
    // ** Class Methods ** //

    const layout = fin.Platform.Layout.getCurrentSync();
    const sameLayout = await fin.Platform.Layout.getCurrent();

    const config = await layout.getConfig();
    const initOptions = { layout: config };
    fin.Platform.Layout.init(initOptions);

    const wrappedLayout = await fin.Platform.Layout.wrap(layout.identity);
    const anotherWrappedLayout = fin.Platform.Layout.wrapSync(layout.identity);

    // ** Instance Methods ** //
    layout.replace(config);
    layout.applyPreset({ presetType: "columns" });
    layout.getConfig().then(config => config.settings && config.settings.hasHeaders);
    layout.identity.uuid;
}

async function testFDC3() {
    const contextListener: fdc3.ContextListener = fdc3.addContextListener((context: fdc3.Context) => {});
    contextListener.unsubscribe();

    fdc3.addEventListener("channel-changed", (event: fdc3.ChannelChangedEvent) => {});

    const intentListener: fdc3.IntentListener = fdc3.addIntentListener("test-intent", (context: fdc3.Context) => {});
    intentListener.unsubscribe();

    await fdc3.broadcast({ type: "test-context" });

    const appIntent: fdc3.AppIntent = await fdc3.findIntent("test-intent");

    const appIntents: fdc3.AppIntent[] = await fdc3.findIntentsByContext({ type: "test-context" });

    const channelById: fdc3.Channel = await fdc3.getChannelById("test-channel-id");
    await channelById.join();

    const currentChannel: fdc3.Channel = await fdc3.getCurrentChannel();
    await currentChannel.join();

    const appChannel: fdc3.Channel = await fdc3.getOrCreateAppChannel("test-app-channel-name");
    await appChannel.join();

    const systemChannels: fdc3.Channel[] = await fdc3.getSystemChannels();

    await fdc3.open("test-app");
    await fdc3.open("test-app", { type: "test-context" });

    await fdc3.raiseIntent("test-intent", { type: "test-context" });
    await fdc3.raiseIntent("test-intent", { type: "test-context" }, "test-target");

    fdc3.removeEventListener("channel-changed", (event: fdc3.ChannelChangedEvent) => {});

    await fdc3.defaultChannel.join();
    await fdc3.defaultChannel.broadcast({ type: "test-context" });
}
