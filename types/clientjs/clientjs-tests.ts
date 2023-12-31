import { ClientJS } from "clientjs";

const client = new ClientJS();
client.getSoftwareVersion(); // $ExpectType string
client.getFingerprint(); // $ExpectType number
client.getCustomFingerprint(client.getUserAgent(), client.getFonts()); // $ExpectType number
client.getUserAgent(); // $ExpectType string
client.getUserAgentLowerCase(); // $ExpectType string
client.getBrowser(); // $ExpectType string
client.getBrowserVersion(); // $ExpectType string
client.getBrowserMajorVersion(); // $ExpectType string
client.isIE(); // $ExpectType boolean
client.isChrome(); // $ExpectType boolean
client.isFirefox(); // $ExpectType boolean
client.isSafari(); // $ExpectType boolean
client.isOpera(); // $ExpectType boolean
client.isMobileSafari(); // $ExpectType boolean
client.getEngine(); // $ExpectType string
client.getEngineVersion(); // $ExpectType string
client.getOS(); // $ExpectType string
client.getOSVersion(); // $ExpectType string
client.isWindows(); // $ExpectType boolean
client.isMac(); // $ExpectType boolean
client.isLinux(); // $ExpectType boolean
client.isUbuntu(); // $ExpectType boolean
client.isSolaris(); // $ExpectType boolean
client.getDevice(); // $ExpectType string
client.getDeviceType(); // $ExpectType string
client.getDeviceVendor(); // $ExpectType string
client.getCPU(); // $ExpectType string
client.isMobile(); // $ExpectType boolean
client.isMobileMajor(); // $ExpectType boolean
client.isMobileAndroid(); // $ExpectType boolean
client.isMobileOpera(); // $ExpectType boolean
client.isMobileWindows(); // $ExpectType boolean
client.isMobileBlackBerry(); // $ExpectType boolean
client.isMobileIOS(); // $ExpectType boolean
client.isIphone(); // $ExpectType boolean
client.isIpad(); // $ExpectType boolean
client.isIpod(); // $ExpectType boolean
client.getScreenPrint(); // $ExpectType string
client.getColorDepth(); // $ExpectType string
client.getCurrentResolution(); // $ExpectType string
client.getAvailableResolution(); // $ExpectType string
client.getDeviceXDPI(); // $ExpectType string
client.getDeviceYDPI(); // $ExpectType string
client.getPlugins(); // $ExpectType string
client.isJava(); // $ExpectType boolean
client.getJavaVersion(); // $ExpectType string
client.isFlash(); // $ExpectType boolean
client.getFlashVersion(); // $ExpectType string
client.isSilverlight(); // $ExpectType boolean
client.getSilverlightVersion(); // $ExpectType string
client.isMimeTypes(); // $ExpectType boolean
client.getMimeTypes(); // $ExpectType string
client.isFont("Times New Roman"); // $ExpectType boolean
client.isFont("Nonexistent Random Font"); // $ExpectType boolean
client.getFonts(); // $ExpectType string
client.isLocalStorage(); // $ExpectType boolean
client.isSessionStorage(); // $ExpectType boolean
client.isCookie(); // $ExpectType boolean
client.getTimeZone(); // $ExpectType string
client.getLanguage(); // $ExpectType string
client.getSystemLanguage(); // $ExpectType string
client.isCanvas(); // $ExpectType boolean
client.getCanvasPrint(); // $ExpectType string
