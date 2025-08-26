import install from 'install.js'

async function fetchVoyage() {
  try {
    const res = await fetch('https://ingrwf12.cepegra-frontend.xyz/cockpit1/api/content/items/voyages');
    const data = await res.json();
    const v = data?.[0] || {};
    document.querySelector('.voyage').textContent = v["voyages-label"] ?? v["voyages_label"] ?? v["voyage-label"] ?? v["voyage_label"] ?? "Indisponible";
    document.querySelector('.description').innerHTML = v["voyages-description"] ?? v["voyages_description"] ?? v["voyage-description"] ?? v["voyage_description"] ?? "";
    document.querySelector('.prix').textContent = (v["voyages-prix"] ?? v["voyages_prix"] ?? v["voyage-prix"] ?? v["voyage_prix"] ?? "-") + ' €';
  } catch {
    document.querySelector('.voyage').textContent = "Indisponible";
    document.querySelector('.description').textContent = "";
    document.querySelector('.prix').textContent = "- €";
  }
}

fetchVoyage();

install()
