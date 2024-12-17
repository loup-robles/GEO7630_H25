# 📚 GEO 7630 - Cours 4 : Intégration et visualisation des données matricielles

## 🗓️ Date
- **28 janvier 2025**

## 🎯 Objectifs du cours 4
1. Rétrospective du cours précédent et révision des acquis.
2. Comprendre les **données matricielles** et leurs caractéristiques.
3. Explorer les techniques d'**intégration** et de **visualisation** des données raster.
4. Appliquer des **bonnes pratiques** pour l'intégration des rasters dans des SIG.
5. Atelier pratique avec **FME** pour l'intégration matricielle.

---

## 📋 Contenu du cours

### **1. Rétrospective semaine 3**
- Retour sur les concepts d'intégration et visualisation des données vectorielles.
- Discussion des défis rencontrés et des solutions adoptées.

### **2. Introduction aux données matricielles**
- **Définition** : Données organisées en grille (pixels).
- **Types de données matricielles** :
  - **Imagerie aérienne et satellite**.
  - **Modèles numériques d'élévation (DEM)**.
  - **Utilisation des terres / Occupation des sols (LULC)**.
- **Sources de données matricielles** :
  - Open-source : **Landsat**, **Sentinel**.
  - Commercial : **DigitalGlobe**, **GeoEye**.
  - Agences gouvernementales : **USGS**, **NASA**.
  - Outils en ligne : **Google Earth Engine**.

### **3. Techniques d'intégration des données matricielles**
- **Géoréférencement** : Alignement spatial des rasters.
- **Orthorectification** : Correction géométrique pour réduire les distorsions.
- **Projection et reprojection** : Transformation des coordonnées.
- **Mosaicking** : Fusionner plusieurs rasters pour créer une image continue.
- **Resampling** : Changement de résolution pour optimisation des performances.
- **Masking & Clipping** : Extraction de portions spécifiques des rasters.

### **4. Assurance qualité (QA) des données matricielles**
1. **Évaluation de la qualité** : Détection des valeurs manquantes, bruit, et anomalies.
2. **Correction des données** : Interpolation et suppression des valeurs erronées.
3. **Amélioration des données** : Optimisation de la résolution et du contraste.
4. **Standardisation** : Conversion des formats et projection standardisée.
5. **Validation** : Vérification des données nettoyées.
6. **Documentation** : Traçabilité des étapes et corrections appliquées.

### **5. Techniques de visualisation des données matricielles**
- **Color Mapping** : Attribution de couleurs pour révéler des modèles.
- **Ombrage (Hillshading)** : Ajout de profondeur et texture en fonction de l'altitude.
- **Overlaying** : Superposition de rasters pour des analyses combinées.
- **Dynamic Display Scaling (DDS)** : Ajustement de la résolution en fonction du zoom.
- **Visualisation interactive** : Diagrammes dynamiques avec des outils web.
- **Animation** : Représentation des changements spatio-temporels (ex. météo).

---

## 🧪 Laboratoire
### **Thème : Utilisation des méthodes d'intégration matricielles avec FME**
1. **Géoréférencement** et projection des rasters.
2. Fusion de plusieurs rasters via **Mosaicking**.
3. Optimisation des données avec **Resampling**.
4. Application de techniques de visualisation : **Color Mapping** et **Ombrage**.
5. Extraction de zones spécifiques avec **Masking** et **Clipping**.

---

## 📂 Ressources et liens utiles
- **Sources de données matricielles** :
  - [Landsat Data](https://landsat.gsfc.nasa.gov/data/where-to-get-data/)
  - [Sentinel Data Access](https://sentinel.esa.int/web/sentinel/sentinel-data-access)
  - [NASA Worldview](https://worldview.earthdata.nasa.gov/)
- **Techniques d'intégration** :
  - [ArcGIS Mosaic Datasets](https://doc.arcgis.com/en/imagery/workflows/resources/using-mosaic-datasets-to-manage-imagery.htm)
  - [FME Raster Resampler](https://docs.safe.com/fme/html/FME_Desktop_Documentation/FME_Transformers/Transformers/rasterresampler.htm)
- **Visualisation avancée** :
  - [Mapbox Hillshading](https://blog.mapbox.com/dynamic-hill-shading-in-the-browser-28de243d9989)
  - [ArcGIS Animated Flow Renderer](https://www.esri.com/arcgis-blog/products/arcgis-online/mapping/flow-renderer/)

---

## 📝 Devoir
- **Travail pratique 2 (TP2)** : Intégration et traitement des données matricielles.
- **Livrables** :
  - Résultat des opérations de mosaicking et resampling.
  - Exemple de visualisation appliquant **Color Mapping** et **Hillshading**.
- **Date de remise** : **4 mars 2025**.

---

## ❓ Questions et échanges
- Retour sur les défis d'intégration des rasters.
- Discussion des méthodes de visualisation avancée pour des projets applicatifs.

---

**🚀 À la semaine prochaine pour le cours 5 !**
