import PushNotification, { Importance } from "react-native-push-notification";

PushNotification.configure({
    onNotification: ({ id, finish, action, data }) => {
        finish("UIBackgroundFetchResultNoData");
    },
    onRegister: token => {},
    onAction: ({ id, action, userInfo }) => {},
    onRegistrationError: err => {},
    onRemoteFetch: notificationData => {},
    permissions: { alert: true, badge: true, sound: true },
    popInitialNotification: false,
    requestPermissions: true,
});

PushNotification.unregister();
PushNotification.localNotification({ id: "", message: "", actions: ["Yes", "No"] });
PushNotification.localNotificationSchedule({ id: "", date: new Date(), message: "", actions: ["Yes", "No"] });
PushNotification.requestPermissions();
PushNotification.subscribeToTopic("topic");
PushNotification.presentLocalNotification({ id: "", message: "" });
PushNotification.scheduleLocalNotification({ id: "", date: new Date(), message: "" });
PushNotification.cancelLocalNotifications({ id: "123" });
PushNotification.cancelAllLocalNotifications();
PushNotification.setApplicationIconBadgeNumber(1);
PushNotification.getApplicationIconBadgeNumber(badgeCount => {});
PushNotification.popInitialNotification(notification => {});
PushNotification.checkPermissions(checkPermissions => {});
PushNotification.abandonPermissions();
PushNotification.clearAllNotifications();
PushNotification.removeAllDeliveredNotifications();
PushNotification.getDeliveredNotifications(notifications => {});
PushNotification.getScheduledLocalNotifications(notifications => {});
PushNotification.removeDeliveredNotifications(["id"]);
PushNotification.invokeApp({ message: "" });
PushNotification.getChannels(channels => {});
PushNotification.channelExists("chanel_id", exists => {});
PushNotification.createChannel({
    channelId: "id",
    channelName: "name",
    importance: Importance.DEFAULT,
    playSound: false,
}, created => {});
PushNotification.channelBlocked("chanel_id", blocked => {});
PushNotification.deleteChannel("id");
PushNotification.cancelLocalNotification("id");
