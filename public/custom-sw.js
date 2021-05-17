self.addEventListener('push', event => {
    const data = event.data.json();
    console.log('New notification', data);
    const options = {
        body: data.body,
    };
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
})

self.addEventListener('fetch', event => {
    let urlsToCache = [
        '/home',
        '/plantingForm',
        '/sowingForm',
        '/harvestingForm',
        '/reminder',
        '/create-reminder',
        '/ConnectDevice',
        '/activities',
        '/view-data',
        '/settings'
    ];

    caches.open('test-cache')
        .then(function (cache) {
            console.log("Opened cache");
            return cache.addAll(urlsToCache)
        })

});