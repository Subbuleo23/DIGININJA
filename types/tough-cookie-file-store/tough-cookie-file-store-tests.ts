import { CookieJar } from "tough-cookie";
import { FileCookieStore } from "tough-cookie-file-store";
new CookieJar(new FileCookieStore("./cookie.json"));

// Disabled as isExpired and isEmpty have been removed.
// /* check if cookie is empty or expired */
// const cookieInstance = new FileCookieStore('./cookie.json');
// cookieInstance.isExpired(); // will return True if the cookie is expired
// cookieInstance.isEmpty(); // will return True if cookie is empty

/* request example */
/*
// Disabled due to warning in npm test:
// Error: tough-cookie-file-store depends on request but has a lower required TypeScript version.
import * as request from 'request'
var j = request.jar(new CookieStore('./cookie.json'));
const r = request.defaults({ jar : j })
r('http://www.google.com', function() {
  r('http://images.google.com')
})
*/
