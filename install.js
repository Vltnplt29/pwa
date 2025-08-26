const install = () => {

    const installBtn = document.querySelector('.install-btn');
    let deferredPrompt = null;

    // On cache le bouton par défaut
    installBtn.classList.add('hidden');

    // Événement quand l'app est "installable"
    window.addEventListener('beforeinstallprompt', e => {
        e.preventDefault();
        deferredPrompt = e;
        installBtn.classList.remove('hidden');
    });

    // Clic sur le bouton d'installation
    installBtn.addEventListener('click', async e => {
        e.preventDefault();
        deferredPrompt.prompt();

        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            installBtn.classList.add('hidden');
        }
        deferredPrompt = null;
    });

    // Quand l'app est installée
    window.addEventListener('appinstalled', () => {
        installBtn.classList.add('hidden');
    });
}

export default install