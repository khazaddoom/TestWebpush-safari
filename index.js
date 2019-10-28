// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
//         // Registration was successful
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       }, function(err) {
//         // registration failed :(
//         console.log('ServiceWorker registration failed: ', err);
//       });
//     });
//   }
(function () {
    if (!('Notification' in window)) {
        console.log('This browser does not support notifications!');
        return;
    } 
    Notification.requestPermission(status => {
        console.log('Notification permission status:', status);
    });
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(reg => {
            var newNotification = new Notification('Hello there!');
        });
      }

})();

// if (!window.Notification || !Notification.requestPermission) {
//     console.log('This browserdoes not support desktop notification');
//     return;
// } else {
//     window.Notification.requestPermission(function(p) {
//         console.log('browser notification status = ' + p);
//         return;
//     });
// }



