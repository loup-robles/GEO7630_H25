# 📚 GEO 7630 - Révision pour l'examen final : Notions à revoir (Cours 8 à 14)

## 🗓️ Date de l'examen final
- **15 avril 2025**

## 🎯 Objectif de l'examen
L'examen final portera sur les **notions enseignées après la relâche** (Cours 8 à 14). Il est important de bien maîtriser les concepts théoriques et pratiques, ainsi que les exercices réalisés en laboratoire.

---

## 📋 Notions à réviser

### **1. Webmapping avancé et analyses spatiales (Cours 8 à 10)**
- **Bases HTML, CSS et JavaScript** :
  - Structure des pages web et stylisation avec CSS.
  - Manipulation du DOM avec **JavaScript**.
- **JSON et GeoJSON** :
  - Création et utilisation de fichiers GeoJSON pour stocker des données spatiales.
- **APIs cartographiques** :
  - MapLibre GL, Leaflet, OpenLayers.
  - Exercice pratique : Ajouter des couches GeoJSON interactives.
- **Analyses spatiales avec TurfJS** :
  - **Buffer**, **Distance**, **Intersect**, **Dissolve**.
  - Utilisation des fonctions avancées de TurfJS pour les analyses spatiales.

#### **Exemples à revoir :**
- Création d'une carte interactive avec des couches vectorielles.
- Application des buffers et intersections autour de points ou lignes.

---

### **2. Architectures backend pour le webmapping (Cours 11 à 12)**
- **Architecture client-serveur** :
  - Composants : client, serveur, protocole, couches de traitement.
  - Avantages et inconvénients.
- **Conteneurisation avec Docker** :
  - Création de **Dockerfile** pour déploiement d'applications.
  - Orchestration avec **Docker-Compose** pour multi-services.
- **Bases de données spatiales avec PostGIS** :
  - **pg_tileserv** : Diffusion de tuiles vectorielles (MVT).
  - **pg_featureserv** : Services GeoJSON pour requêtes vectorielles.

#### **Exercices à revoir :**
- Configurer et lancer un environnement **PostGIS** avec Docker.
- Créer et diffuser des tuiles vectorielles via **pg_tileserv**.
- Intégrer des services GeoJSON avec **pg_featureserv**.

---

### **3. Visualisation 3D et 3D Tiles (Cours 13 à 14)**
- **Introduction aux 3D Tiles** :
  - Définition et avantages des **3D Tiles**.
  - Applications : Modélisation urbaine, nuages de points, visualisation 3D.
- **Technologies associées** :
  - **CesiumJS** : Streaming et rendu de modèles 3D.
  - **Itowns** : Bibliothèque open source pour affichage de scènes 3D.
- **Formats compatibles** :
  - **glTF** pour les modèles 3D.
  - **CityGML** et **LiDAR** pour les données complexes.

#### **Exercices à revoir :**
- Intégrer des **3D Tiles** dans une scène avec **Itowns**.
- Créer des scènes 3D interactives pour les bâtiments ou les nuages de points.
- Optimiser le rendu des niveaux de détail (LOD).

---

## 🧪 Conseils pour la révision
1. **Pratiquez les laboratoires** :
   - Reprenez les exercices de TurfJS, MapLibre GL, et Docker pour vous familiariser avec les concepts.
2. **Testez vos connaissances** :
   - Développez une application simple combinant des couches vectorielles et 3D Tiles.
   - Déployez l’application localement avec **Docker-Compose**.
3. **Révisez les notions clés** :
   - Architecture applicative (frontend/backend).
   - Utilisation des services OGC (WMS, WFS, WMTS).
   - Analyse spatiale et rendu 3D.
4. **Pratiquez avec des exemples** :
   - Visualisation interactive avec MapLibre GL.
   - Diffusion des données avec **pg_tileserv** et **pg_featureserv**.
   - Création d’une scène 3D avec Itowns ou CesiumJS.

---

## 📂 Ressources pour réviser
- **Documentation officielle** :
  - [MapLibre GL Docs](https://maplibre.org/maplibre-gl-js-docs/)
  - [TurfJS Docs](https://turfjs.org/)
  - [Itowns Documentation](https://www.itowns-project.org/)
  - [Docker Docs](https://docs.docker.com/)
- **Ressources complémentaires** :
  - [CesiumJS Documentation](https://cesium.com/docs/)
  - [pg_tileserv GitHub](https://github.com/CrunchyData/pg_tileserv)

---

## 📝 Rappels importants
- **Maîtrisez les commandes Docker** : `docker build`, `docker-compose up`, etc.
- **Reprenez les concepts d’interactions avancées** dans MapLibre GL : événements `click`, `hover`, `queryRenderedFeatures`.
- **Connaissez les étapes de mise en production** d’une application :
  - Développement → Test → Déploiement → Maintenance.

---

## 🚀 Bonnes révisions !
N'hésitez pas à poser vos questions par email ou pendant les heures de disponibilité. **Bonne chance pour l'examen final !**