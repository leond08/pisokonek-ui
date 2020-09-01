self.addEventListener('push', event => {
    const data = event.data.text()
    const title = "PisoKonek"
    const options = {
      body: data,
      title: "PisoKonek",
      vibrate: [300, 100, 400],
      requireInteraction: true,
      image: './assets/img/pisokonek.png',
      actions: [  
        {action: 'insert', title: 'Insert coin now'}
      ]  
    }
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  })

  self.addEventListener('notificationclick', function(event) {  
    event.notification.close();  
  
    if (event.action === 'insert') {  
      clients.openWindow("/");  
    }  
    else {  
      clients.openWindow("/");  
    }  
  }, false);