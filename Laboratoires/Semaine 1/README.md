# 📚 GEO 7630 - Laboratoire 1 : Prise en main des outils

## 🎯 Objectif du laboratoire
- Ce premier laboratoire vise à vous familiariser avec les outils essentiels pour le cours **GEO 7630**. 
- Vous apprendrez à créer un environnement de travail collaboratif, accéder à une base de données, manipuler des données géospatiales, et visualiser ces données dans un SIG.

---

## 📝 Tâches à réaliser

### **1. Lancer FME Desktop**
- **FME Desktop** est un outil ETL (Extract, Transform, Load) pour le traitement des données géospatiales.
- **Tâche** :
  1. Ouvrez **FME Workbench**.
  2. Créez un nouveau projet.

---

### **2. Lire une adresse depuis un fichier CSV hébergé avec lat/long**
- **Fichier d'entrée** : [Établissements alimentaires Mtl](https://donnees.montreal.ca/dataset/c1d65779-d3cb-44e8-af0a-b9f2c5f7766d/resource/28a4957d-732e-48f9-8adb-0624867d9bb0/download/businesses.csv)
  - **Adresse**
  - **Latitude**
  - **Longitude**

#### **Étapes dans FME** :
1. Utilisez le **Reader** pour importer les données CSV.
   ![Importer le CSV](image.png)
2. Choisissez l'option **web - URL** et copiez-collez l'adresse ci-dessus.
   ![Choisir URL dans FME](image-1.png)
3. Si vous cliquez sur **Paramètre**, vous pourrez pré-inspecter le modèle de données et constater qu'il existe 4 colonnes de coordonnées géographiques.

---

### **5. Injecter la table dans votre schéma PostgreSQL**
- **Processus** :
  1. Configurez un **Writer** dans FME pour PostgreSQL.
  2. Spécifiez la connexion à votre base de données **Amazon**.
   ![Configurer le Writer PostgreSQL](image-2.png)
   `geo7630h25.cvwywmuc8u6v.us-east-1.rds.amazonaws.com`
  3. Ajoutez un **TRANSFORMER VertexCreator** pour transformer les colonnes lat/long en géométrie.
   ![Ajouter un Transformer](image-4.png)
  4. Choisissez les bonnes informations de transformation.
   ![Paramétrage du Transformer](image-5.png)
  5. Injectez la table CSV en tant que nouvelle table dans le schéma `public`.
   ![Injection dans PostgreSQL](image-3.png)
  6. Vérifiez que votre table est bien présente.
   ![Vérification dans PostgreSQL](image-6.png)

#### **Bonnes pratiques** :
- Utilisez des noms de tables en **minuscules** et avec **underscores** (ex : `lab1_points_adresses`).
- Vérifiez que les géométries sont correctement reconnues.

---

### **6. Visualiser la table dans QGIS**
- **Ouvrez QGIS** et connectez-vous à votre base PostgreSQL :
  1. Ajoutez une nouvelle connexion à la base de données.
   ![Connexion QGIS](image-7.png)
   ![Paramètres de connexion QGIS](image-8.png)
  2. Visualisez la table importée.
   ![Visualisation QGIS](image-9.png)

#### **Validation** :
- Assurez-vous que les points sont correctement positionnés selon les coordonnées **lat/long**.
- Prenez une capture d’écran de la carte avec la couche affichée.

---

## 📝 Matériel à remettre
1. **Dépôt GitHub** :
   - Incluez un **README.md** documentant les étapes effectuées.
2. **Capture d’écran QGIS** montrant la table importée et visualisée sur la carte.

---

## 🧾 Grille d'évaluation

| Critère                                      | Pondération   |
|--------------------------------------------|--------------:|
| **Création et configuration du compte GitHub** | 10%          |
| **Connexion réussie à la base PostgreSQL**   | 20%          |
| **Importation des données CSV dans FME**     | 20%          |
| **Injection dans PostgreSQL**                | 20%          |
| **Visualisation dans QGIS avec symbologie**  | 20%          |
| **Documentation dans le README.md**          | 10%          |

---

## 🚀 Conseils pour réussir
1. **Suivez chaque étape** avec attention pour éviter les erreurs de connexion ou de format de données.
2. **Nommez correctement vos fichiers et tables** selon les conventions.
3. **Testez la connexion** entre les outils pour valider votre processus.
4. Documentez bien les étapes dans votre **README.md**.

---

## 📂 Ressources utiles
- **FME Documentation** : [FME Docs](https://docs.safe.com/)
- **QGIS Documentation** : [QGIS Docs](https://qgis.org/en/docs/)
- **DBeaver Community** : [DBeaver](https://dbeaver.io/)
- **GitHub** : [Créer un compte GitHub](https://github.com/)
- **Markdown Guide** : [Guide Markdown](https://www.markdownguide.org/)

---

**Bon début de session et bon laboratoire !** 🚀

---

### **1. Créer un compte GitHub**
- Rendez-vous sur [GitHub](https://github.com/) et créez un compte si ce n'est pas déjà fait.
- **Configurer un Codespace** (environnement de développement dans GitHub).

#### **Étapes pour lancer un Codespace**
1. Connectez-vous à votre compte GitHub.
2. Créez un nouveau repository (nommez-le `geo7630-lab1`).
3. Accédez à l’onglet **Codespaces** dans votre repository.
4. Lancez un nouvel environnement Codespace.

### **2. Se connecter avec DBeaver à la base de données Amazon**
- **Télécharger et installer DBeaver** : [DBeaver Community](https://dbeaver.io/download/)
- **Paramètres de connexion** :
  - **Type de base de données** : PostgreSQL
  - **Host** : (Adresse fournie en classe)
  - **Port** : 5432
  - **Utilisateur** : (Identifiant fourni)
  - **Mot de passe** : (Mot de passe fourni)
  - **Base de données** : `geo7630`

- **Objectif** : Vérifiez que la connexion à la base de données est fonctionnelle et que vous pouvez visualiser les tables existantes.

---
