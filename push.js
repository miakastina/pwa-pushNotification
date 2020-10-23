var webPush = require('web-push');

const vapidKeys = {
    "publicKey" : "BE-YRCvAKsrDCvG_LB3GIChiv3AIGUqs4AKsxHrqF420jzwmBzHqa-RkENF6Z1rQk_zQWOLwW3Lt9CLZ9OOep0I",
    "privateKey" : "XwptNpR-EPYdu6l7xOohOixwdolx1ogcOet8gn96Rwk"
};

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eLXmTkJFPgA:APA91bHK9ie6XJ5rQmRZHmEbYLbOrHU-uSC4gd6_4IFoWzAXHUo-1LjyYo_93HZNbbczshAoVJ6e5NJcfg-0WGC5tBY39JsnGz4v_IYYRyNKgmUzG-g_D-441N7RCI6H1kwIVwxEpVkN",
    "keys": {
        "p256dh": "BPevb1ij9K0DbkNkPN4LZDmnvOL67OF1QlYRp+qq+EVcci/t2Hkm2sqYMRb649a6SBdCWdRz7eDmffytI2VzXH0=",
        "auth": "BX1eodatcthtpAhy0qzRDA=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi !';
var options = {
    gcmAPIKey: '693506690587',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);