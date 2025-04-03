// Initialisation de la carte MapLibre
const map = new maplibregl.Map({
  container: 'map', // ID de la div où afficher la carte
  style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style (tu peux utiliser un autre style ici)
  center: [-73.5673, 45.5017], // Coordonnées pour Montréal
  zoom: 12 // Niveau de zoom initial
});

// Ajout du gestionnaire d'événement sur le bouton pour afficher/masquer la couche "Commerces"
document.getElementById('toggleCommerces').addEventListener('click', function() {
  // Vérifie si la couche des commerces existe déjà
  const layerExists = map.getLayer('commerces-layer');
  
  if (layerExists) {
    // Si la couche existe, on la retire
    map.removeLayer('commerces-layer');
    map.removeSource('commerces-source');
    this.innerText = 'Afficher Commerces';
  } else {
    // Ajouter la couche "Commerces"
    map.addSource('commerces-source', {
      type: 'geojson',
      data: 'https://donnees.montreal.ca/dataset/c1d65779-d3cb-44e8-af0a-b9f2c5f7766d/resource/ece728c7-6f2d-4a51-a36d-21cd70e0ddc7/download/businesses.geojson'
    });

    map.addLayer({
      id: 'commerces-layer',
      type: 'symbol',
      source: 'commerces-source',
      paint: {
        'circle-radius': [
          'match',
          ['get', 'type'],
          'Épicerie', 5,
          'Pâtisserie/Boulangerie', 7,
          'Distributrice automatique', 4,
          'Pharmacie', 6,
          'Restaurant', 5,
          3 // valeur par défaut
        ],
        'circle-color': [
          'match',
          ['get', 'type'],
          'Épicerie', 'orange',
          'Pâtisserie/Boulangerie', 'yellow',
          'Distributrice automatique', 'blue',
          'Pharmacie', 'green',
          'Restaurant', 'purple',
          'grey' // couleur par défaut
        ],
        'circle-stroke-color': '#fff',
        'circle-stroke-width': 1
      },
      filter: ['==', ['get', 'statut'], 'Ouvert'] //  Seulement ceux qui sont "Ouvert"
    });

    this.innerText = 'Masquer Commerces';
  }
});
