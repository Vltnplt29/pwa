const notifications = () => {
  const notifBtn = document.querySelector('.notif-me');
  notifBtn.addEventListener('click', e => {
    e.preventDefault();
    let myNotification = null;

    const options = {
      body: "Texte de la notif",
      icon: "/icons/favicon-16x16.png",
      vibrate: [200, 100, 200]
    };

    if (!("Notification" in window)) {
      alert('Pas de notifs dispo dans ce navigateur');
    } else if (Notification.permission === 'granted') {
      console.log('Notif accepted');
      myNotification = new Notification("Hello world", options);
      myNotification.onclick = () => {
        window.open('https://cepegra.be', '_blank');
      };
    } else {
      Notification.requestPermission()
        .then(permission => {
          if (permission === 'granted') {
            console.log('Notif accepted');
            myNotification = new Notification("Hello world", options);
            myNotification.onclick = () => {
              window.open('https://cepegra.be', '_blank');
            };
          }
        });
    }
  });
}

notifications();
