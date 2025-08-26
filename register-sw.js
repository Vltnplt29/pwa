function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker enregistré');
          console.log(registration);
        })
        .catch(err => {
          console.log('Échec de l’enregistrement du SW :', err);
        });
    });
  }
}

registerServiceWorker()
