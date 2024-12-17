# 📚 GEO 7630 - Semaine 12 : Webmapping avancé et mise en production

## 🗓️ Date
- **1 avril 2025**

## 🎯 Objectifs du cours 13
1. Comprendre les **principes d’architecture applicative** pour le webmapping.
2. Effectuer des **analyses spatiales avancées** dans une application web.
3. Développer et optimiser des composants interactifs avancés avec MapLibre GL.
4. Mettre en production une application de **webmapping**.

---

## 📋 Contenu du cours

### **1. Concepts avancés d’architecture applicative**
- **Architecture applicative moderne** :
  - Utilisation de **Docker** pour le déploiement.
  - Orchestration des services backend et frontend.
- **Principes clés** :
  - Séparation des couches **frontend** et **backend**.
  - Automatisation du déploiement via des conteneurs.

#### **Technologies utilisées**
- **Backend** : PostgreSQL/PostGIS, pg_tileserv, pg_featureserv.
- **Frontend** : MapLibre GL, TurfJS.
- **Outils de conteneurisation** : Docker, Docker-Compose.

---

### **2. Analyse spatiale dans le web**
#### **Principales opérations d’analyse spatiale**
- **Distance** : Calcul de distance entre deux points avec la formule de Haversine.
- **Buffer** : Création de zones tampon autour des entités.
- **Intersect/Dissolve** : Intersection et fusion de géométries.
- **Grids et Interpolation** : Création de maillages et visualisation des données spatiales.

#### **Librairies utilisées**
- **TurfJS** : Outils d’analyse spatiale pour les applications web.
- **MapLibre GL** : Intégration interactive des analyses dans des cartes web.

#### **Exemples de code**
- **Calculer un buffer avec TurfJS** :
  ```javascript
  const buffer = turf.buffer(geojson, 500, { units: 'meters' });
  map.addSource('buffer-layer', {
    type: 'geojson',
    data: buffer
  });
  map.addLayer({
    id: 'buffer-layer',
    type: 'fill',
    source: 'buffer-layer',
    paint: {
      'fill-color': '#00f',
      'fill-opacity': 0.5
    }
  });
  ```
- **Calcul de distance** :
  ```javascript
  const distance = turf.distance(point1, point2, { units: 'kilometers' });
  console.log(`Distance : ${distance} km`);
  ```

---

### **3. Atelier : Webmapping avancé**
1. **Interactions avancées avec MapLibre GL** :
   - **Change building color based on zoom level**.
   - **Create a heatmap layer** pour des données continues.
   - **Clusters dynamiques** avec requêtes interactives.
2. **Affichage en 3D** :
   - **Bâtiments 3D** avec des styles dynamiques.
   - **Intégration de tuiles LiDAR** avec Itowns.
3. **Outils supplémentaires** :
   - **Gestion interactive** : `queryRenderedFeatures`, `map.on('click')`.
   - **Légendes** avec des bibliothèques comme watergis/mapbox-gl-legend.

---

### **4. Mise en production d’une application de webmapping**
#### **Bonnes pratiques**
- **Cycle de développement** :
  - Développement → Test → Déploiement.
- **Assurance qualité** :
  - Debugging et monitoring des requêtes réseau.
  - Validation des erreurs dans le code **JavaScript**.
- **Publication et versionnement** :
  - Utilisation de **Git** pour le versionnement du code source.
  - Déploiement dans un environnement **Nginx** conteneurisé.

#### **Exemple de configuration Docker**
```yaml
version: "3.4"
services:
  server-web:
    image: nginx
    ports:
      - "8000:80"
    volumes:
      - ./:/usr/share/nginx/html
```

---

## 🧪 Laboratoire
### **Thème : Développement et mise en production d’une application avancée**
1. **Créer des analyses spatiales** interactives :
   - Ajout de buffers, intersections et distances avec TurfJS.
2. **Développement avancé de la carte** :
   - Intégrer des couches vectorielles et tuiles 3D.
   - Appliquer des styles dynamiques en fonction du zoom.
3. **Mise en production** :
   - Déployer l’application sur un serveur local avec **Nginx** et **Docker**.
   - Tester les performances et corriger les éventuels bugs.

---

## 📂 Ressources et liens utiles
- **MapLibre GL** : [Documentation officielle](https://maplibre.org/maplibre-gl-js-docs/)
- **TurfJS** : [Documentation TurfJS](https://turfjs.org/)
- **Itowns** : [Itowns Docs](https://www.itowns-project.org/)
- **Docker** : [Docker Documentation](https://docs.docker.com/)
- **Bootstrap** : [Introduction Bootstrap](https://getbootstrap.com/)

---

## 📝 Devoir
- **Travail pratique 6 (TP6)** : Mise en production d’une application webmapping intégrant des analyses spatiales.
- **Livrables** :
  - Application fonctionnelle avec des interactions avancées.
  - Fichiers **Docker-Compose** pour déploiement.
- **Date de remise** : **8 avril 2025**.

---

## ❓ Questions et échanges
- Retour sur les défis liés aux analyses spatiales et à la mise en production.
- Discussion sur les bonnes pratiques pour optimiser une application de webmapping.


**🚀 À la semaine prochaine pour le cours 14 !**
