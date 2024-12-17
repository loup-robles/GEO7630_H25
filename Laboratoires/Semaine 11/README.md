Laboratoire 10 - GEO7630H24

Configuration Geoserver et mise en place de service WMS, WFS

[**Étape 1 Configuration et lancement d’une instance de Geoserver ****2**](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.d1nzl2zi4y2v)

[**Étape 2 ****3**](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.2ljf5rr9ygjh)

[**Étape 3 Les contrôles de carte ****7**](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.il4btunf4o2a)

[**Étape 4 Charger des données depuis un serveur de tuiles vectorielles ****9**](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.g9x6d457902c)

[**Etape 5 Stylisation ****12**](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.nhwo0n35nrim)

[**Étape 6 style avancé ****13**](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.18puux48he9g)

[**Étape 7 Ajouter une couche WFS ****14**](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.90hqh0oxgjrv)


## Étape 1 Configuration et lancement d’une instance de Geoserver

Ouvrez github (assurez vous d’être connecté)  : <https://github.com/Captain-Oski/GEO7630_H24>

Lancer un codespace à partir de Main : 

![](https://lh7-us.googleusercontent.com/fu519ubJYYGBTDg7RSBfSecdjLEM6hQmfvPRXx9PP-up3wXO0bO8pS4DfFOtiMD83PDzPI-geJhtqoc0KAwDSHpROijVPALZWpscVPcboZ-vmrQOoSDQg6jYvOBuIv48myIJc8RCSyF4jXRBnkTKGMY)

Cela va démarrer une instance du projet github dans un environnement virtuel cloud dans lequel vous pourrez modifier et tester du code, mais aussi démarrer des services et applications informatiques et cartographiques.

![](https://lh7-us.googleusercontent.com/R0ArEQ968JVov6E206tSAdqU2Ou6sXsG8YC-CNjojYY6b7noZYFUP-AqIppHFm4jFjcbNL4gMRGnfvyfrbJtE9BONBHYi-YMLVVtZRbS7J2xFy0MxLsp0tyfLoQEIuX7Z9o9NwkBEwikZvBO5iWRrDU)


## Étape 2

1. Copier-coller le fichier .env.example 

2. Renommer le .env

3. Modifier la variable d’environnement pour y insérer votre codeMs et votre mot de passe

4) DB\_USER=CODEMS

5) DB\_PASSWORD=VOTREMOTDEPASSE

6) DB\_HOST=geo7630h24.cvwywmuc8u6v.us-east-1.rds.amazonaws.com

7) DB\_NAME=GEO7630H24

Ensuite, pour démarrer les applications de service cartographiques

Allez dans le dossier Atlas, puis cliquez droit sur le fichier docker-compose.yml 

(prononcez YAMEUL ;-)

\
![](https://lh7-us.googleusercontent.com/wgminja-GxFLR_0lU-4B8fIqMYQFz9aE1QISpUl3LWYeznAiE1RRQf4JOa9hNCEkxhMsSAh0aJvvOESQUyyhVwJbjZbAcJzn6-b8Fm53B7XmAkiep0rtV1-zbHTU3kBuXzON9Djv_IRGQoWPqLBkn90)

Si ‘‘Compose Up’’ n'apparaît pas, il faut installer préalablement l'extension Docker 

![](https://lh7-us.googleusercontent.com/np1UVfgQUSwlEA_56fZgHSUswAw8zP8gpFz28Sj7B6gvD0Rn3WVeUzdHFpUcIDZw0qo9EPxe9R7prfGezUkVDXF_0AcWr3H6vTgE5JihGLvHFf97DGkFNuWWbeI1ZlFE2-T1PiLVOupa_tn0-Vu9sto)

Cliquez sur la baleine à gauche pour voir que le container roule bien comme il faut.

Soit des triangles verts et non des carrés rouges ( ;-) )

![](https://lh7-us.googleusercontent.com/0RicUHl5hLqH_WY1FKmLPBC0RLb79R0HhPBaOqfGMVbftK6gMW_xa5Hj6F7ZoOXr6KP7mtIymeH1f1UV7iZXQDnx0kN-RmNLkwRvo1-4JcSEJCZk6fIrHhNoJWX2-zebgn6ZAzX6WNA51pJVddYp7qk)

Vérifier que l’application roule correctement en allant voir la page d’accueil ex : 

Ouvrez un terminal (CTRL+J) ou via l’interface comme ci-dessous.

![](https://lh7-us.googleusercontent.com/c4VOGteBP9TJk2umNhjvCnjtR8NekX4KsKTunsIsW_LQ434bdD0oJD7Y4b3bttcECM06CkEcaK_JGcEquITG5l8AphlXO76K9nd64eS24kWQD_u3bBwWy5Y8x4MKsC6MFPVU26K2xtiZgYFhXHfzw3M)

![](https://lh7-us.googleusercontent.com/8aYnWhE3ifbw_7I_tMR1bxwqKZROgbJVWbiPssjKuYLY9O6KqlXIYkoDJHlixxEnPonfss4nBBnctOuaTTAfFNpd7h7z4ZSZ7cokm0Hi4k2HfRKGnVIfzljRak3U85Lhd8QMb9nw1icHsF2F8rDuNh0)

Vous devriez voir apparaître l'Atlas Urbain Interactif dans votre navigateur

![](https://lh7-us.googleusercontent.com/-MPnIcWGGSju6wI99crBNIbYp9dexhWTK36U4VL8cS-BGqKA6RD1Puwc_ciuiBdm_nbbywIpRMzsMmWqn1OnLDFHYpN6HjSAW_I-zBbg6K844HXF3VNo1O41LC0vQYTpnBIn8iwFxtNUIFo6yvifaAA)

********


## Étape 3 Les contrôles de carte

[Class: NavigationControl - MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/API/classes/NavigationControl/)

**Ajoutez un contrôle de Navigation en haut à droite**

Dans le fichier **/Atlas/app/app.js** qui est le fichier javascript qui contrôle toute notre application cartographique maplibre comme nous l’avons vu la semaine dernière

Vous pouvez jouer avec l’ajout et la suppression des différents contrôleurs

 ****

**// création du contrôle de navigation**

**var nav = new maplibregl.NavigationControl({**

    **showCompass: true, // affichage de la boussole**

    **showZoom: true, // affichage des boutons de zoom**

    **visualizePitch: true // affichage de l'angle d'inclinaison**

**});**

**// Finalement on ajoute le contrôleur à la carte**

**map.addControl(nav, 'top-right'); // ajout du contrôle en haut à droite de la carte**

**Ajoutez un contrôle de Géolocalisation en bas à droite**

// création du contrôle de géolocalisation

var geolocateControl = new maplibregl.GeolocateControl({

    positionOptions: {

        enableHighAccuracy: true // activation de la géolocalisation précise

    },

    trackUserLocation: true // suivi automatique de la position de l'utilisateur

})

map.addControl(geolocateControl, 'bottom-right'); // ajout du contrôle en bas à droite de la carte

**Ajoutez un contrôle d’échelle**

// création du contrôle d'échelle

var scale = new maplibregl.ScaleControl({

    unit: 'metric' // utilisation de l'unité métrique

});

map.addControl(scale); // ajout du contrôle en bas à gauche de la carte

Une fois que vous avez enregistré votre fichier (ctrls+s) vous pouvez recharger la page web de l’application pour voir apparaître les contrôleurs comme ci dessous

![](https://lh7-us.googleusercontent.com/LlW3yvHhif_NjCqgXSAE5lHbWVUkXibV07JSB-6HRveDkblN_EzzOf2A46Zh9-XplbPa1KG70Pyqp5Zy-JW9WxQvMOSgcFZIY1nSXKq9EprRdUyVltyIByed_uiIHQiRbQkntO55eHXlyMKkjIReUDI)


##

## Étape 4 Charger des données depuis un serveur de tuiles vectorielles

[Class: VectorTileSource - MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/API/classes/VectorTileSource/)

Toujours dans app.js

Ajouter une méthode map.onLoad() qui permet d’écouter l’évènement de chargement de la carte et qui exécute les fonctions que vous voulez lors du chargement

Ce que nous cherchons à faire ici est de charger automatiquement des données cartographique au chargement de l’application

Néanmoins avant de procéder il faudra ouvrir publiquement le serveur de tuile pour que notre application puisse lire les tuiles depuis le serveur de tuiles (private pour le moment)

![](https://lh7-us.googleusercontent.com/7VJlHbR9_5PneJk8h9SLRWhiS5OuxuH8QDFb9l8DGrmn-PcLzPqWh1unYKLS83tHEL4_5MdyY-hPZWaKOAkgPbhdbDKmYcEt0vYoTQBZd5uCicGZxpEl9yx5y5ZfCxGRLtbPLP4HERwRamCl3aTKlP4)

![](https://lh7-us.googleusercontent.com/R6Hr04XrYfpE1dOt1KZgF_v7UdVXe-s0AkUC8wb8QlQqe06KcKVHMy3KqsOeVGkWF_te7PSdcHYDzr38ohjMEWGSO-Frsqcfh8ohXc6B4ZKtgbmLFZSLAFWGRXUtlrHxH-YgxoDkGpKLNwOI7HwI9As)

Vous avez désormais accès à tous les services (OUVERTS) dans la base de données postGIS du cours

![](https://lh7-us.googleusercontent.com/6gSld-bMr63cw_xCrGE6WPgNTZrnGQ3cuPUGr0x6jznwDvoswudGft1HiuCa7uLUwJBwT-QaffpwO0ZAnG7WC7MnxdRgV_dVkAB2TEKm5GRgSe-I00ZgcglIiBVvIxiGRKrA8vIsuwrlYn4Clf9Pg5A)

Ensuite vous allez devoir trouver l’url et les informations liées à votre service de tuiles vectorielles pour ce faire il faut aller dans l’interface du serveur de tuile

Cliquez sur le lien JSON

![](https://lh7-us.googleusercontent.com/26qajaX0aPyvP2ru4yK5xET3k4fI707FzAyKLUns-iRN7viocyJZOiydSTGE5kjmjjok6HeY7Nlh3lE6S85tY2ect7n2iAMnW3l6ccf9DlY-UL5l0cNSyOLVzZUv9AYpd-BR1SCUYuKpIe5EKE5aDqY)

Puis trouvez l’URL du service, et le id du service qui serviront dans Maplibre pour charger les données 

![](https://lh7-us.googleusercontent.com/8t94qQHXq1afr-TQAEh6cL0qP8h1WMr0SOI6sXKgOjb_QLaYrJW4qNeeAZS7lA8YjzRMX4-sa4qEKgNW285oPYJkfcw_nYKUEdICjccEyUe8NBf9GBVY4_6UItE3Vr6TtyYCjDsWwME0aO_MLPoonYs)

Voici un exemple fonctionnel pour charger les données dans le app.js

// Fonction qui écoute l'événement de fin de chargement de la carte au démarrage de l'app

// ajout des sources et des couches de la carte

map.on('load', function () {

    // ajout de la source des garages

    map.addSource('indice\_emv\_hex\_200m\_result-source', {

        type: 'vector', // https\://maplibre.org/maplibre-style-spec/sources/

        tiles: \['https\://**solid-robot-66qj67v4535v7g-8801**.app.github.dev/geo7630.indice\_emv\_hex\_200m\_result/{z}/{x}/{y}.pbf

'] // URL des tuiles vectorielles attention à bien mettre là votre

    })

    // ajout de la couche des garages

    map.addLayer({

        'id': 'indice\_emv\_hex\_200m\_result', // identifiant de la couche

        'type': 'fill', // type de géométrie de la couche

        'source': 'indice\_emv\_hex\_200m\_result-source', // source des données de la couche

        'source-layer': 'geo7630.indice\_emv\_hex\_200m\_result', // source des données de la couche (id dans le JSON de pgtileserv), majoritairement nom du schéma.nomdelatable

    })

});

Si vous recharger la carte (après avoir sauvegarder app.js) Vous devriez voir une carte avec des hexagones comme celle-ci

![](https://lh7-us.googleusercontent.com/6YvBhiJvxg0JlFRnI5eP4BTbkRb0njPzHTkjf7Y4VdFFQhPuldtc5Ejov0f2unUiqV56vi7BnH2BUESguXncYvM2c9-QVg8wrQFfLEvT-7uqEB6EE7eAt4pPQZpEYSnLY6IrZhUEabV6q35PJM7FjX4)


## Etape 5 Stylisation

Ajouter à votre layer une propriété paint simple pour modifier le rendu cartographique

  'paint': {

            'fill-color': '#FF0000', // Couleur de remplissage (rouge)

            'fill-opacity': 0.5 // Opacité du remplissage (50%)

        }

\
![](https://lh7-us.googleusercontent.com/40tUZoXaDN6L2Ad0teXDDxSd1YSXvnT9CbBmVmFpXJGobKWYbia3izm_mvFAEgQQqVhign-E9Jr1ieW3AQ2Plw7HCqpbcrGSNAYWseb3w-oJAQYBZMsCqrjXR_3wKOewoc7tH9ZkVefxYArXQxuLd9w)


##

## Étape 6 style avancé

À la place du style précédent modifier pour appliquer un style un peu plus avancé qui va montrer l’intensité de la composante environnementale dans les inéquités sociales à Montréal

        'paint': {

            'fill-color': \[  // Définition de la couleur de remplissage

                'interpolate',  // Utilisation de la fonction interpolate pour créer un dégradé de couleur

                \['linear'],  // Spécification de l'interpolation linéaire

                \['get', 'acp\_sociale'],  // Récupération de la valeur de la propriété 'acp\_sociale' de la couche

                0, 'rgb(255, 255, 255)', // Pour une valeur de 0 de 'acp\_sociale', utiliser la couleur blanche (RGB 255, 255, 255)

                1, 'rgb(0, 0, 255)' // Pour une valeur de 1 de 'acp\_sociale', utiliser la couleur bleue (RGB 0, 0, 255)

            ],

            'fill-opacity': 0.7 // Définition de l'opacité de remplissage à 0.7 (70%)

        }

![](https://lh7-us.googleusercontent.com/7AVWnEd9bxTxzfdHdau1T-j5H-l99idvh6Ra6C-wl1Q4Bw52n5R_k-M0SqZBTyNngd5usmMOb_3Ks-Kudkqm7vT39HnQIEQC9AmBxMcadT7eOIaFds18jGm16VaxeeLxV-a5UxbwE8mkE-mRJStl0tc)


## Étape 7 Ajouter une couche WFS

**Mettez le port 9000 (pg\_featureserv) à public**

Ensuite dans ajouter dans le app.js une nouvelle fonction distincte de toutes les autres qui va s’occuper de charger (addsource + addLayer) une couche WFS

J’ai mis une petite fonction sympas qui calcule une couleur au hasard ca pourra vous aider +tard.

/\*\*

 \* Fonction qui génère une couleur aléatoire en format hexadécimal.

 \* @returns {string} Couleur générée au format hexadécimal.

 \*/

function getRandomColor() {

    // Définition des caractères hexadécimaux possibles

    var letters = '0123456789ABCDEF';

    // Initialisation de la couleur avec le préfixe hexadécimal (#)

    var color = '#';

    // Boucle pour générer chaque caractère de la couleur (6 caractères)

    for (var i = 0; i < 6; i++) {

        // Sélection aléatoire d'un caractère hexadécimal

        color += letters\[Math.floor(Math.random() \* 16)];

    }

    // Retourne la couleur générée au format hexadécimal

    return color;

}

/\*\*

 \* Fonction qui charge une couche WFS depuis pgFeatureServ et l'ajoute à la carte MapLibre.

 \* Cette fonction ajoute une source de données GeoJSON à partir d'une URL pgFeatureServ

 \* et ajoute une couche de remplissage ('fill') à la carte MapLibre en utilisant cette source de données.

 \*/

function loadWFS() {

    // Ajout de la source de données des arrondissements depuis pgFeatureServ

    map.addSource('arrondissements-source', {

        type: 'geojson', // Type de source de données

        data: 'https\://solid-robot-66qj67v4535v7g-9000.app.github.dev/collections/geo7630.arrondissements/items.json?limit=10000' // URL pgFeatureServ GeoJSON

    });

    // Ajout de la couche des arrondissements à la carte MapLibre

    map.addLayer({

        'id': 'arrondissements', // Identifiant de la couche

        'type': 'fill', // Type de géométrie de la couche (remplissage)

        'source': 'arrondissements-source', // Source des données de la couche

        'paint': {

            'fill-outline-color': 'black',

            'fill-color': getRandomColor(), // Si la condition est vraie, utilisez une couleur aléatoire

            'fill-opacity': 0.3 // Opacité de remplissage (30%)

        }

    });

}

Ici nous allons procéder autrement, nous allons créer un bouton dans le HTML pour charger une source WFS, car si vous l’avez remarqué correctement, rien ne se passe si vous faites juste recharger la carte, c’est normal la fonction loadWFS() n’est exécuté par aucun déclencheur (chargement map.onLoad ou autre …)

Idéalement après l’équipe 7 autour de la ligne 170++

![](https://lh7-us.googleusercontent.com/eZcbgIYPkMbS96XUn1BswPsIjp2tY6BVfyWmz8kyH88B6nm1DL6ZNR0xhLavJt1EBLNnjTOcMYd3qWdZ_MWwlXPdm-OBU1syqhvWXqaHnt3B-wU8NztiWyKUmKhcqbZoiVNlT8h_A_QzGa42imNQfMM)

Code ici : 

    \<button type="button" class="btn btn-primary" onclick="loadWFS()">Load WFS Data\</button>

![](https://lh7-us.googleusercontent.com/J8t6kRu16GnHP_cuHl1ETLK7SFrIvz1USvBSD06EgFuFZKF9aZ4xwC5SOJHvYiFBMkshWLqaRHzwpTGDaYAFG7WNnrk8SdHr89MVEHe7W_lZxupcYc7sUoo_PTsFftToKW_ty5rce8hB7AsPK0DyQBw)

Maintenant cliquez sur le bouton est la magie opère (si vous êtes un bon magicien ;-) héhé )

![](https://lh7-us.googleusercontent.com/mpXZ0i4tG23q0TFcI064jURBJ3dvd1rggt9sPKWVlb6YW7OBkuoDy3EZZ7E0KUoqO6ketgcq9GpOwuSG6Qv-076yATEtXc9UXGE65Yh0ROngoGhwVsoidA_aFxOonEjNfzy_iCypo9UjOR9XOjV5RCI)

Bravo semaine prochaine on monte le niveau encore un peu

- Filtres dynamique

- Déplacement automatisé

- Événements de souris (popup et autres)

- Visualisation avancée
