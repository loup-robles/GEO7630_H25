# 📚 GEO 7630 - Cours 5 : Intégration et visualisation des données 3D

## 🗓️ Date
- **4 février 2025**

## 🎯 Objectifs du cours 5
1. Rétrospective du cours précédent et révision des acquis.
2. Introduction aux **données vectorielles 3D** et leurs caractéristiques.
3. Explorer les techniques d'**intégration** et de **visualisation** des données **LiDAR**.
4. Présentation des défis et des bonnes pratiques pour l'intégration des données 3D.
5. Atelier pratique : intégration de nuages de points, vecteurs et rasters.

---

## 📋 Contenu du cours

### **1. Rétrospective semaine 4**
- Retour sur les concepts d'intégration et visualisation des données matricielles.
- Discussion des défis rencontrés et des solutions appliquées.

### **2. Introduction aux données LiDAR**
- **Définition** : Technologie permettant de capturer des informations spatiales en 3D grâce à des lasers.
- **Types de plateformes** :
  - **Aéroporté** : Avion, hélicoptère, drone.
  - **Spatial** : Satellite.
  - **Terrestre** : Véhicule ou piéton.
  - **Marin** : Bateaux ou sondes.
- **Applications des données LiDAR** :
  - **Topographie** : MNT, MNS, MNC.
  - **Planification urbaine** : Modèles 3D des villes et BIM.
  - **Environnement** : Suivi des forêts et catastrophes naturelles.
  - **Transport** : Navigation autonome et détection d’obstacles.
  - **Géologie** : Analyse des glissements et risques sismiques.
  - **Archéologie** : Détection et cartographie de sites historiques.

### **3. Formats et attributs des données LiDAR**
- **Formats courants** :
  - **LAS**, **LAZ**, **BIN**, **E57**, **PTX**, **ZLAS**.
- **Attributs principaux** :
  - **XYZ** : Coordonnées spatiales.
  - **Intensité** : Réflectivité du signal.
  - **Nombre de retours** : Quantité de retours par impulsion.
  - **Classification** : Type de sol, végétation, bâtiments, infrastructures.

### **4. Techniques d'intégration des données 3D**
- **Fusion et intégration** : Méthode ICP (Iterative Closest Point).
- **Modélisation de surface** :
  - **Triangulation de Delaunay**.
  - **Interpolation de Kriging**.
  - **Modélisation TIN** et **grille**.
- **Filtrage et nettoyage** :
  - **PointCloudThinner** : Réduction de la densité des points.
  - **PointCloudCombiner** : Fusion de plusieurs nuages.
  - **ComponentSetter** : Alignement et ajustement des composants.

### **5. Techniques de visualisation des données 3D**
- **Nuages de points** : Visualisation par altitude, classification, et couleurs vraies.
- **Profils en transect** : Extraction et affichage des profils transversaux.
- **Modèles de canopée** :
  - Création de MNC.
  - Suivi de la biomasse et de la croissance forestière.
- **Visualisation des bâtiments** : BIM pour architecture, urbanisme et construction.

---

## 🧪 Laboratoire
### **Thème : Intégration de nuages de points, vecteurs et rasters**
1. Importation et nettoyage des données LiDAR.
2. Fusion des nuages de points via **ICP**.
3. Création de modèles de surface avec **FME** :
   - Triangulation, interpolation et modélisation TIN.
4. Visualisation des données :
   - Nuages de points avec classification et couleurs vraies.
   - Profils en transect.
   - Modèles de canopée.

---

## 📂 Ressources et liens utiles
- **LiDAR Basics** : [Guide LiDAR Drone](https://escadrone.com/publication/guide-lidar-drone/)
- **Méthode ICP** : [Iterative Closest Point (YouTube)](https://www.youtube.com/watch?v=AoYtTiUoGQw)
- **Modélisation de surface avec FME** :
  - [SurfaceModeller](https://docs.safe.com/fme/html/FME-Form-Documentation/FME-Transformers/Transformers/surfacemodeller.htm)
  - [SurfaceDrapper](https://docs.safe.com/fme/html/FME-Form-Documentation/FME-Transformers/Transformers/surfacedraper.htm)
- **Visualisation LiDAR** : [Mapbox Dynamic Hillshading](https://blog.mapbox.com/dynamic-hill-shading-in-the-browser-28de243d9989)
- **Outils supplémentaires** : [Awesome-Geospatial](https://github.com/sacridini/Awesome-Geospatial#lidar)

---

## 📝 Devoir
- **Travail pratique 2 (TP2)** : Intégration et visualisation des données 3D.
- **Livrables** :
  - Exemple de fusion des nuages de points.
  - Création d'un modèle de canopée et visualisation des bâtiments.
- **Date de remise** : **4 mars 2025**.

---

## ❓ Questions et échanges
- Retour sur les défis d'intégration des données LiDAR.
- Discussion sur les solutions pour visualiser et exploiter les données 3D.

---

**🚀 À la semaine prochaine pour le cours 6 !**
