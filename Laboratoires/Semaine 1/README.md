# 📚 GEO 7630 - Laboratoire 1 : Prise en main des outils

## 🎯 Objectif du laboratoire
Ce premier laboratoire vise à vous familiariser avec les outils essentiels pour le cours **GEO 7630**. Vous apprendrez à créer un environnement de travail collaboratif, accéder à une base de données, manipuler des données géospatiales, et visualiser ces données dans un SIG.

---

## 📝 Tâches à réaliser

### **1. Créer un compte GitHub**
- Rendez-vous sur [GitHub](https://github.com/) et créez un compte si ce n'est pas déjà fait.
- **Configurer un Codespace** (environnement de développement dans GitHub).

#### **Étapes pour lancer un Codespace**
1. Connectez-vous à votre compte GitHub.
2. Créez un nouveau repository (nommez-le `geo7630-lab1`).
3. Accédez à l’onglet **Codespaces** dans votre repository.
4. Lancez un nouvel environnement Codespace.

---

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

### **3. Lancer FME Desktop**
- **FME Desktop** est un outil ETL (Extract, Transform, Load) pour le traitement des données géospatiales.
- **Tâche** :
  1. Ouvrez **FME Workbench**.
  2. Créez un nouveau projet.

---

### **4. Lire une adresse depuis un fichier CSV avec lat/long**
- **Fichier d'entrée** : Préparez un fichier CSV contenant :
  - **Adresse**
  - **Latitude**
  - **Longitude**

#### **Étapes dans FME** :
1. Utilisez le **Reader** pour importer le fichier CSV.
2. Vérifiez que les colonnes **lat** et **long** sont correctement reconnues comme attributs.
3. Convertissez ces données en **données vectorielles** (points).

---

### **5. Injecter la table dans votre schéma PostgreSQL**
- **Processus** :
  1. Configurez un **Writer** dans FME pour PostgreSQL.
  2. Spécifiez la connexion à votre base de données **Amazon**.
  3. Injectez la table CSV en tant que nouvelle table dans le schéma `public`.

#### **Bonnes pratiques** :
- Utilisez des noms de tables en **minuscules** et avec **underscores** (ex : `lab1_points_adresses`).
- Vérifiez que les géométries sont correctement reconnues.

---

### **6. Visualiser la table dans QGIS**
- **Ouvrez QGIS** et connectez-vous à votre base PostgreSQL :
  1. Ajoutez une nouvelle connexion à la base de données.
  2. Visualisez la table importée.
  3. Ajoutez une symbologie simple pour les points afin d'afficher les adresses sur la carte.

#### **Validation** :
- Assurez-vous que les points sont correctement positionnés selon les coordonnées **lat/long**.
- Prenez une capture d’écran de la carte avec la couche affichée.

---

## 📝 Matériel à remettre
1. **Dépôt GitHub** :
   - Incluez un **README.md** documentant les étapes effectuées.
   - Déposez le fichier **FME Workbench (.fmw)**.
   - Ajoutez le fichier **CSV d'entrée** utilisé.
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
