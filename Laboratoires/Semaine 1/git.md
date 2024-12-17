# 📚 GEO 7630 - Laboratoire GitHub : Prise en main pour débutants

## 🎯 Objectif du laboratoire
Ce laboratoire vise à **initier les étudiants à l’utilisation de GitHub** pour la gestion de projets collaboratifs et le suivi de version. À la fin de ce laboratoire, vous serez capables de :
1. Créer un **compte GitHub** et configurer un dépôt.
2. Cloner un dépôt existant.
3. Ajouter, modifier et **pousser des fichiers** vers GitHub.
4. Comprendre les concepts de **commit**, **pull** et **push**.
5. Travailler avec des branches et créer des **pull requests**.

Durée prévue : **1h30**

---

## 📝 Pré-requis
- Un ordinateur avec une connexion internet.
- **Git** installé sur votre machine : [Télécharger Git](https://git-scm.com/).
- Un éditeur de texte (ex. Visual Studio Code).

---

## 📝 Tâches à réaliser

### **1. Créer un compte GitHub** (10 minutes)
1. Rendez-vous sur [GitHub](https://github.com/) et créez un compte si ce n’est pas déjà fait.
2. Configurez votre profil (nom, photo, bio).
3. Activez la **vérification en deux étapes** pour sécuriser votre compte.

---

### **2. Créer un dépôt GitHub** (15 minutes)
1. Sur votre page d’accueil GitHub, cliquez sur **New repository**.
   - Nom du dépôt : `geo7630-lab-github`.
   - Description : "Prise en main de GitHub pour GEO 7630".
   - **Initialisez le dépôt** avec un fichier **README.md**.
2. Copiez l’URL du dépôt (elle sera utilisée pour le cloner dans l’étape suivante).

---

### **3. Cloner un dépôt localement** (15 minutes)
1. **Ouvrez votre terminal ou invite de commande**.
2. Positionnez-vous dans le répertoire où vous souhaitez cloner le dépôt :
   ```bash
   cd Documents/geo7630/
   ```
3. Clonez le dépôt créé précédemment :
   ```bash
   git clone https://github.com/votre_nom_utilisateur/geo7630-lab-github.git
   ```
4. Accédez au dossier cloné :
   ```bash
   cd geo7630-lab-github
   ```
5. Ouvrez le répertoire dans **Visual Studio Code** ou un autre éditeur de texte.

---

### **4. Ajouter et modifier des fichiers** (20 minutes)
1. **Créez un nouveau fichier texte** `hello_github.txt` :
   - Contenu du fichier : `Bonjour, ceci est mon premier fichier GitHub.`
2. Enregistrez les modifications et retournez dans le terminal.
3. Vérifiez l’état du dépôt avec :
   ```bash
   git status
   ```
4. **Ajoutez le fichier au suivi Git** :
   ```bash
   git add hello_github.txt
   ```
5. **Créez un commit** pour enregistrer vos modifications localement :
   ```bash
   git commit -m "Ajout du fichier hello_github.txt"
   ```
6. **Poussez les modifications** vers votre dépôt GitHub :
   ```bash
   git push origin main
   ```
7. Rafraîchissez votre dépôt sur GitHub pour vérifier l’ajout du fichier.

---

### **5. Travailler avec des branches** (20 minutes)
1. **Créez une nouvelle branche** appelée `ajout-description` :
   ```bash
   git checkout -b ajout-description
   ```
2. Modifiez le fichier **README.md** pour ajouter une description du laboratoire.
3. Enregistrez vos modifications, puis ajoutez-les et créez un commit :
   ```bash
   git add README.md
   git commit -m "Ajout d'une description au README"
   ```
4. **Poussez la nouvelle branche** vers GitHub :
   ```bash
   git push origin ajout-description
   ```
5. Sur GitHub, créez une **Pull Request** :
   - Cliquez sur **Pull Request** > **New Pull Request**.
   - Comparez `ajout-description` avec `main` et soumettez la pull request.
6. Fusionnez la branche dans `main` et supprimez-la localement :
   ```bash
   git checkout main
   git pull origin main
   git branch -d ajout-description
   ```

---

## 🧾 Résumé des commandes essentielles
| Commande                          | Description                                     |
|----------------------------------|-------------------------------------------------|
| `git clone <url>`                 | Cloner un dépôt GitHub localement.              |
| `git status`                      | Vérifier l'état du répertoire local.            |
| `git add <fichier>`               | Ajouter un fichier pour le prochain commit.     |
| `git commit -m "message"`        | Créer un commit avec un message descriptif.     |
| `git push origin <branche>`       | Pousser les modifications vers GitHub.          |
| `git checkout -b <nom-branche>`   | Créer une nouvelle branche et s'y positionner.  |
| `git branch -d <nom-branche>`     | Supprimer une branche locale.                   |
| `git pull origin <branche>`       | Récupérer les dernières modifications.          |

---

## 🎥 Présentation rapide de votre dépôt
Pour terminer le laboratoire :
1. **Présentez votre travail** en créant une **Pull Request** sur GitHub.
2. Incluez dans le fichier **README.md** :
   - Votre nom.
   - Les étapes réalisées.
   - Une capture d’écran de votre dépôt avec les fichiers ajoutés.

---

## 📝 Matériel à remettre
- Un dépôt GitHub nommé `geo7630-lab-github` avec :
   - Un fichier **README.md** complet.
   - Le fichier **hello_github.txt**.
   - Une Pull Request créée et fusionnée.
- **Capture d’écran** de l’état final du dépôt sur GitHub.

---

## 🚀 Conseils pour réussir
1. **Suivez les commandes pas à pas** pour éviter les erreurs.
2. **Documentez vos étapes** dans le fichier `README.md` pour bien comprendre votre progression.
3. **Demandez de l'aide** si vous rencontrez des difficultés lors des commandes Git.

---

## 📂 Ressources utiles
- **GitHub** : [Documentation officielle](https://docs.github.com/)
- **Guide Git** : [Git - Documentation](https://git-scm.com/doc)
- **Markdown Guide** : [Guide Markdown](https://www.markdownguide.org/)
- **Visual Studio Code** : [Télécharger VS Code](https://code.visualstudio.com/)

---

**Bonne prise en main de GitHub ! Vous êtes prêts pour les prochains laboratoires ! 🚀**