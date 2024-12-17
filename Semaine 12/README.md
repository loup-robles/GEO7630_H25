# 📚 GEO 7630 - Semaine 12 : Webmapping et architecture informatique

## 🗓️ Date
- **25 mars 2025**

## 🎯 Objectifs du cours 12
1. Comprendre les **principes d’architecture dorsale** (backend) pour les applications de webmapping.
2. Explorer les **conteneurs et bases de données spatiales** (PostGIS).
3. Utiliser des **API géospatiales dorsales** pour le traitement et la diffusion des données.
4. Développer des composants backend pour un webmapping avancé.

---

## 📋 Contenu du cours

### **1. Principe d’architecture dorsale (backend)**
- **Conteneurs et machines virtuelles (VMs)** :
  - Définition et différences entre conteneurs et VMs.
  - **Avantages** :
    - Réduction des coûts et des risques.
    - Rapidité d’exécution.
    - Collaboration facilitée.
  - **Désavantages** :
    - Complexité.
    - Montée en compétence nécessaire.

#### **Infrastructure as Code (IaC)**
- Automatisation de l’infrastructure avec des outils comme **Docker** et **Docker-Compose**.
- **Dockerfile** : Création d’images pour des environnements reproductibles.
- **Exemple pratique** :
  ```yaml
  version: "3.4"
  services:
    my_service:
      image: postgis/postgis:14-3.3
      ports:
        - "8434:5432"
      environment:
        - POSTGRES_PASSWORD=password
      volumes:
        - pgdata:/var/lib/postgresql/data
  volumes:
    pgdata:
      name: installation_pgdata
  ```

---

### **2. Atelier d’introduction aux conteneurs**
- **Concepts clés** :
  - **Images** : Systèmes d’exploitation légers.
  - **Conteneurs** : Instances exécutables d’images.
  - **Docker-Compose** : Orchestration d’applications multi-conteneurs.
- **Commandes essentielles** :
  - `docker build`, `docker run`, `docker-compose up`, `docker-compose down`.

---

### **3. Bases de données spatiales avec PostGIS**
- **Introduction à PostGIS** : Extension spatiale pour PostgreSQL.
- **Composants clés** :
  - **pg_tileserv** : Diffusion de tuiles vectorielles MVT.
  - **pg_featureserv** : Fourniture de services GeoJSON.
- **Atelier pratique** :
  - Importer des données GeoJSON dans une base PostGIS :
    ```bash
    docker compose run --rm ogr ogr2ogr -f PostgreSQL \
    PG:"dbname='geo7630' host='localhost' port='8434' user='admin' password='password'" \
    ./data/garage.geojson
    ```

---

### **4. Revue des API géospatiales dorsales**
- **GDAL/OGR** : Conversion et manipulation de données géospatiales.
- **pg_tileserv** :
  - Diffusion de tuiles vectorielles pour clients interactifs.
  - Exposition des données PostgreSQL sous forme de tuiles MVT.
- **pg_featureserv** :
  - Diffusion de services GeoJSON pour l’accès aux entités vectorielles.
- **Exemples pratiques** :
  - Configuration d’un **pg_tileserv** et visualisation via MapLibre GL.
  - Consommation des services **pg_featureserv** pour récupérer des entités GeoJSON.

---

### **5. Atelier : Composants backend pour webmapping avancé**
#### **Configuration Docker-Compose**
- Mise en place d’une architecture multi-services avec **PostGIS**, **pg_tileserv**, et **pg_featureserv** :
  ```yaml
  version: "3.4"
  services:
    pg_lab11:
      image: postgis/postgis:14-3.3
      ports:
        - "8434:5432"
      environment:
        - POSTGRES_PASSWORD=password
    pg_tileserv:
      image: pramsey/pg_tileserv:latest
      ports:
        - "8801:7800"
      environment:
        - DATABASE_URL=postgresql://admin:password@pg_lab11/geo7630
    pg_featureserv:
      image: pramsey/pg_featureserv:latest
      ports:
        - "9000:9000"
      environment:
        - DATABASE_URL=postgresql://admin:password@pg_lab11/geo7630
  ```

#### **Création d’un serveur web**
- Utilisation de **Nginx** pour héberger l’application web :
  ```yaml
  server-web:
    image: nginx
    ports:
      - "8000:80"
    volumes:
      - ./:/usr/share/nginx/html
  ```
- Accès à l’application : http://localhost:8000/app/

---

## 🧪 Laboratoire
### **Thème : Webmapping intermédiaire et avancé**
1. **Ajouter une couche de tuiles vectorielles** avec **pg_tileserv**.
2. **Ajouter une couche WFS** via **pg_featureserv**.
3. **Interactions avancées** :
   - Contrôle de carte : Zoom, filtrage, et événements (Click, Hover).
   - **Popup** pour afficher les propriétés des entités.
   - **Heatmaps** et clusters avec MapLibre GL.
4. **Visualisation 3D** :
   - Intégration de bâtiments 3D et tuiles LiDAR.

---

## 📂 Ressources et liens utiles
- **Docker Documentation** : [Docker Hub](https://hub.docker.com/)
- **GDAL/OGR** : [GDAL Documentation](https://gdal.org/)
- **pg_tileserv & pg_featureserv** :
  - [pg_tileserv GitHub](https://github.com/CrunchyData/pg_tileserv)
  - [pg_featureserv GitHub](https://github.com/CrunchyData/pg_featureserv)
- **MapLibre GL JS** : [MapLibre Docs](https://maplibre.org/maplibre-gl-js-docs/)

---

## 📝 Devoir
- **Travail pratique 5 (TP5)** : Développement d’un backend pour la diffusion de tuiles et entités vectorielles.
- **Livrables** :
  - Fichiers **Docker-Compose** pour configuration backend.
  - Application consommant les services **pg_tileserv** et **pg_featureserv**.
- **Date de remise** : **1 avril 2025**.

---

## ❓ Questions et échanges
- Retour sur les défis rencontrés dans la configuration des services backend.
- Discussion sur l’intégration des tuiles vectorielles et entités GeoJSON dans une carte interactive.

---

**🚀 À la semaine prochaine pour le cours 13 !**
