Laboratoire #7

****

ArcGIS Online, Dashboard et Experience Builder et intégration de données

****

[**Import dans AGOL ****2**](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.obevib9yx6mf)

[CSV Reader 2](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.j7ityrx72w9k)

[AttributeFilter 2](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.qqurfanc4ilv)

[StatisticsCalculator 3](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.eic7z1m2romu)

[AttributeManager 4](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.ehpp8heg86oj)

[FeatureJoiner 5](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.onmraas8odt0)

[AttributeManager 7](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.cb4tjxg1ufhp)

[Writer 8](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.69efvtz164xk)

[**Visualisation dans AGOL ****9**](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.dqstqds7kjjb)

[Création dossier 9](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.aayizmqhxfyo)

[Mapviewer 11](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.suq8myuqhmb)

[**ESRI Dashboard ****16**](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.qv1fefk9hkpg)

[**ESRI Experience Builder ****31**](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.snf7ukc56jh9)

[**Mise à jour des données avec FME ****46**](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.14qyickzd8g4)

[CSV Reader 46](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.hmedi9fwzw22)

[AGOL Reader 46](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.srjjyuumq9cx)

[ChangeDetector 48](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.8xnmfix0o0jl)

[AttributeManager 48](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.9e72ikq2mal)

[AGOL Writer 49](https://docs.google.com/document/d/1SfLisZeHt6MnFq18O31P7zz6s5sszebyyPxqY6DnNeA/edit#heading=h.hx15v63ygt0x)


# Import dans AGOL

****


## CSV Reader

****

1. Créer un nouveau WB FME

****

2. Ajouter un nouveau CSV Reader

****

3. Utilisez l’url suivante pour le CSV :

<https://sitewebbixi.s3.amazonaws.com/uploads/docs/20220107-donnees-ouvertes-8aa623.zip>


## AttributeFilter

Cela va filtrer les entités qui ne possède pas la propriété (longitude) Parce qu’il y a 2 csv dans le .zip, les stations et les origines et destinations (sans les coordonnées lat long des stations). 

Il faudra alors faire une jointure en amont pour aller chercher les coordonnées de chaque origine/destionation sur la clé primaire (identifiant unique de chaque station)

****

1. Ajoutez-y un attributeFilter comme ceci 

   1. Ajoutez -1 pour filtrer les stations qui ont des mauvaises coordonnées ou des coordonnées éronnées

**![](https://lh7-us.googleusercontent.com/j4CtZGoIZKl0cSzlbLchs8O-XmxcU8SQZJFRDbvOAF88Sm611Yy9cUZQHbEmR4G_F5-mdaUVI0UtxMRDiZYQF0HNgNoqYb636y_F11y5aOne-GJ_FHw_3xwqaXoWqSjb7j9ngvFDVWLi8DRQgP8kCQk)**


## StatisticsCalculator

****

1. Ajoutez-y un StatisticsCalculator sur le port “missing” qui aura pour but de calculer le total des arrivées pour chaque station. ! Attention il faut que ce soit un group processing sur l’attribut emplacement\_pk\_end. Ce qui va nous permettre de faire la somme par station d’arrivée

****

![](https://lh7-us.googleusercontent.com/vLR6PVS8YYT4_Dp9KhB9hdLPwkMqnfTH-5bgRYOZjvuBdgvS5DqFQA2aO-PNUYa81IOcHrEi3HVtevfREZouvM6ktCyjMLjqVRaTiu-cP7HADOgTLwVuMTtRtCvno-AQFQY-XH0x7NanqK0gHDUW-u4)![](https://lh7-us.googleusercontent.com/RRozhWCVyQim0es68la20hh7ElKzU6YsPjgxtctb0f3Y6Q2RawLCaXstOt7ytqwkN7y1_Z3G_t3rJMODtyEH7HTfiELfAWJ6AKdZFSA7aPjnqbc7_EdVpEZfD30gwvuLYR0UGbmYfgZ3VUSe2xs3lsE)

****

1. Puis ajoutez y un autre StatisticsCalculator encore sur le port : “missing” qui aura pour but de calculer le total des départs pour chaque station

**![](https://lh7-us.googleusercontent.com/UJ1lngnF_l3q6vQTR2UVShV5M8WyJLJ8d5P2ca6quLTtp94fFJIVzVD5sC5Zuhp_TK3h8K6MutYFzpMyDdXhgz1wCysvAsOD4HU_4x4sofl-AUdgaz-Lx3YRd8mvU-mXF_NPFNYxu4Xa33cWigEpZ8Y)**


## AttributeManager

1. Puis ajoutez un AttributeManager sur le port “Unfiltered”.

****

Ce sont les stations qui vont sortir ici (le 2eme csv dans le .zip) on supprime les attributs non nécessaires. On garde juste le nom de la station et sa clé primaire (identifiant unique)

****

![](https://lh7-us.googleusercontent.com/nlxU6U8iZar9xjox663B0q7dkhpCY4-0fLZfepxULtTGmadezxl0cE-8455vhz96Q1BjYAR45u-0lOzwBkjr99JNlO-PiYl9MSiUrRK6YGywEx-7srMy4Rwm_I5ZVRdkIrkXboe9FZ3DIF0P2EyOWlc)

****

Rendu après quelques étapes

****

![](https://lh7-us.googleusercontent.com/DqwlvbiFGO0PkPMMHA1eMTUs6_1bTa_d5rl-A23s-72swkXQAlHT2JGwJ9LOaveGCWfCcIy9hAtbEy2iT1IOYGQOrCVvjsslSHDQV5MRvSu98xYSif0eDfnWf57I5sA8fSZWpq42TIqEQJihmzeIcLA)

****


## FeatureJoiner

****

1. Ajoutez un FeatureJoiner pour joindre les attributs (des stations vers les origine/destination) 

****

![](https://lh7-us.googleusercontent.com/wgG8_zZ4luIeiPCvGJqz1bSXuFj0UDWQXOzsTkEYToQt9nw3Z9mBt3TSDQ_tVriU-OH94KvZu9Xhjs593VPpEoEpmT4RNXEFSYBxDpFFIU7SMGMm8M4kB0uSnrgMFxVGmF7cu_ziExRfX6ju1Z_-KyI)

****

2. Puis ajoutez un autre FeatureJoiner enchaîné

****

![](https://lh7-us.googleusercontent.com/_0Ryd_MbSGsPjIlqXD1icfXfTt889UrG7udSOgSdTpPchYsgJtKS8X3PeRgc8J1L1yf6ZdC24PLlCMDQ2OaJ9PsVGmOAJ0NA2PWxqcSemRg2QCgljnisAIWqcNVaEQEKHqt4-nLnYL7eqHqCVWea4yo)

****


## AttributeManager

****

Puis ajoutez un AttributeManager pour faire le ménage et renommer les attributs 

****

![](https://lh7-us.googleusercontent.com/SlSMUlvusz65tyDrsBBakE3SQJeOuzGDg4NlPaZMbnNZ7q3tY1w2fbJGsVz4-6QMdlGBtdaF3uJWFZuDch_FAVL0qQMcbjhmbHmjuF9ALQvMfefA5kDnenGBjETe6fyFzI7JIDvkLLMycUpg359E0Xg)

****

Rendu après quelques étapes

****

![](https://lh7-us.googleusercontent.com/ey4WVedt0rsa_9fuEIcpAztRRrgOwb01tUinzpjVOVdOsmMk0JNHkPgBNf7-YC3gp8g8PnHZliBcA-dGnOMNufh2RTqt3EM23Tad-GZckN_mhiL5DOXH39qIwibu4py3Vn6ZAqFzNNRh3HFtJKtGH1c)


## Writer

****

![](https://lh7-us.googleusercontent.com/nDiNKxDuRIViE9hr7sE91USSf9VAgPO6mahT8BnEoCkhA_Z3M2Mc44lalCOmqKn03NP26hZdsogEsw5R6oYVh6hpl6QhAO-BamqRYxL25BB7VF0qwSFoSBItZpQrKphKVVscNiTdufLvUcSuCEkvlx0)

****

1. Avec connexion avec votre compte AGOL

****

Créer un nouveau Features Service dans le DOSSIER Cours 7 Laboratoire que vous aurez précédemment crée et cocher CREATE IF NEEDED (FME 2022 seulement)

****

![](https://lh7-us.googleusercontent.com/kdIp2hj_J3V7OCS0mG8XJNt7Hf-sHFgD7zgT8w_aKYHYNiZxcKi6N2F1rZcEbo68w1cZXmSY1fI5ent8-_GzSICvqNWQs1hOrJYua6nqPL-1WZl1LhlATlZhNhg0rZg-e-kNTgvkZkra8pFEIIpCamE)

****


# Visualisation dans AGOL

## Création dossier

1. Allez dans votre page de contenu AGOL et créer un nouveau DOSSIER GEO7630

****

<https://www.arcgis.com/index.html>

****

![](https://lh7-us.googleusercontent.com/DZ8WAB-zk0cH9rU96LVh8fG9B8hOvhWNaWlu9YLu0mVgpnBNhGuxFDM3S6BC5jcgHFdKGmqMK8c-hKREJXGvZQOP8NV-FLm6530uYhuxrif0BTL-GfVI6S3cLIUykklVXRPbliNC8ZUSfNz2oMusOf8)

****

1. Déplacer votre nouveau FEATURE SERVICE dans le dossier

****

![](https://lh7-us.googleusercontent.com/6CYNCxKUPh_nX5Javi5zL5ZlSlqHmlYnv7pnXqOqeHE6kMVwo5_SlzvhjkDblVagUc9CfJSAMWUTyRYn7879l2DimUom66wNa87D7XVGQZp5Zn_K24SkUpnB_zmBNLHieeD3uiv1yY1Tj99E3E_E_S0)

![](https://lh7-us.googleusercontent.com/CACMnMK75Ux5quRUYwAGzAC_T6rp2f47sf_yLaj7O0btZHt7vqBEgHncRAu6Gbstise2xizEtsEME7QmljtsKK-_qVonD2lC74nsQiDS6VBnYYN7Ms1GBn1ZbGXK4lc9g0jqUKZYCaVDtX1h686LQ84)

****

1. Allez à la page Contenu

****

2. Maintenant cliquez sur votre Nouveau FeatureLayer

****

3. Et cliquez sur Ouvrir dans MapViewer


## Mapviewer

****

1. Vous avez maintenant la possibilité de jouer avec les différentes propriétés de la couche

2. Cliquez sur Agrégation

![](https://lh7-us.googleusercontent.com/4rbvGDZExeWDZN3mUWD0eZdtJu8VeAcyz8jBgmwEfrB7vkYvTIgq7HctS6LMqB1aMag1HkMeoa2jeZKcTFc4Yzr4adCEQQf6G7GS5CkXfTiEgDPGtCWJTysKew3JMdW6bzB2BAFS6YemlW7-W1kMCTo)

1. Maintenant cliquez sur Styles

2. Cliquez sur “+ Champ” afin d’ajouter “start\_total\_count” et “end\_total\_count”

3. Choisissez Comparer A à B

****

![](https://lh7-us.googleusercontent.com/ejoXCIe_IAxkWJYpVAEUG93kIyQL0WhmIqS4Pejxmajaxu_v6yxC7jygnD03dI-J_wOmTvK5slWEKb0Vs9M8smnQVgQk_utD1mxblOJXR1541Fm7_qsf5ckFza1Qp8l4KKyrLyJtyyzj2xjpdCtQ894)

****

1. Cliquez sur “Options de style”

2. Choisissez dans l’onglet “Étiquettes” “Afficher A comme pourcentage de A et B”

![](https://lh7-us.googleusercontent.com/a6GgkShMG6HHN0ymxvLUrAQlXkkPzvHHIvYX9RElAwTm04yCu0i0osf4VRHmxCxl6Iqmpo175r_cxxRkhHRAeMg93BoU9P2Bt9l265q3mD9S3T-82NoFL-Jtb4llGCrJZ3dMcNJjNjrjOqVwvdq5ZBM)

****

1. Ensuite enregistrer en tant que “CARTE”

****

![](https://lh7-us.googleusercontent.com/03NSSA9ccmPDyHEfw5XcspkWQ7GAzTfEYV1faSm52rIyqrfSNXrg_ARYzjqX-AkmkFMmL5NY3iNC1LVukDq-GMtIhZhPdEjNNPVGU_54sR-X2bMbQPJaH3qTflw551V1mRT7RQ7y8PhSfxtphIfAy1s)

Une fois enregistré, cliquez sur le menu d’applications et choisissez “Dashboards” : 

****

![](https://lh7-us.googleusercontent.com/JrbRTgAtAb91QTk2RvaQK2C12vpUQoPgFsoWlQE-AGJqXdl6LFSL7LkC_WFDBOTgPbibqrAGxxYh9_ccIC8JHoWARmaQtOGv8PHsab4Hd-r9yxCtl2M9AYBwALFlQJrEN064zNnrGXwAoBirs2xMKQg)

****


# ESRI Dashboard

1. Créer un nouveau tableau de bord et choisissez le bon dossier

****

![](https://lh7-us.googleusercontent.com/ROcNYCceScGxbVrkGRzZxeSVhpsUxyQT_GwqXe3Umm11TleX3nU9TA4Yiu1YehUIicsX57lqXhPiVZYKTl1TopllN8ADFTjN3H0zfj1mALbxZsXPEk6UtDwvVWnkOY4EWG8wi-B1tWis9wqmDk5Z3Ts)

****

1. Ajoutez un élément CARTE

![](https://lh7-us.googleusercontent.com/HXqQQDWQJ_yq7nJ_CwEZy69sVw0XixziLkQapQ4wvzl2MCsPkxo1X3GBDDv645J1Yo725yqAS2B8cd-ajnLXUjPm6AR-MTVLor-l925nqa8smCLYgmcpgQjqd4PWxbCuLdkQ72u0iD0pOimmsKQiloE)

****

1. Et choisissez la carte précédemment créer avec les clusters

****

![](https://lh7-us.googleusercontent.com/lM8rvx6zcsKVrUsWn27mz7zEnWe0iyIQLWUVi2Yp2CbITGKMJS8K_YdC4LYoVkkY9IEGr70cS5QkFYnRPOJARbXmIcJwI9d7owfn81pDOiwVBfIek6f47Ev1bD_EaNBDnM5nn4yhL1m0y3OC7YJoKDM)

****

1. Dans réglages, choisissez les options que vous désirez

2. Puis cliquez sur terminé

****

![](https://lh7-us.googleusercontent.com/GM4gVq8TfZ98sWYvmaquY6Yp5v9_gsyK9nBj7OzAsOAfoPD-TpdnNdcVbZuMkdZO2RqbQDLq2ecyogKKmYp8uq0nGLSPmuBQKTp1VwCRhxpwmwtqQSVfiTJWqp26jQs71ijjvhrMt-hA0xG3BgScziY)

****

1. Maintenant dans Mise en page (Version)

2. Ajoutez un en-tête

****

![](https://lh7-us.googleusercontent.com/Dcypb9uC3kzEjS_v0pq8zuPv-qAmqpUkWk0o9iu3inTKg7Jpv-D-zLMp6_F6xdL0HbWO1tywql3HW2tSOZg8rVSdSPCilC1TfSV_yrCJdRzDCt8jlu2edHbaP_9-poXIEZNfpAQKRcD0gfvA_tEN-m8)

****

Exemple d’entête

****

![](https://lh7-us.googleusercontent.com/2XDnHwsmHa9n4Y-ZdiIqnkuoa7KKcLkCvJtj7cc0fHa_6mPijazyjSrOxE0aLewmsKXEPugVV0TwHX_qtG8A5kiBRjTYJCRdyVD-Zaq45fCcdJjfScjvAieewLuo8YPq7zGHJNpid7YLr842hpslYD8)

****

1. Dans CORPS 

2. Ajoutez un élément en de type JAUGE

![](https://lh7-us.googleusercontent.com/xTS0wPHuKVYCzpyO4WInqrZq9jWPzntVwf6gx6zYKHWUzyi8Mhodbh5bX5qG7cP7GMgZW-1HTo0fFZwbZnmJyVB-imnL9ExjeLUZtuC7Q6NGHNfsOwb61qaDQczKopWd24rr8z6zYoS0y4Yu1oPgjVg)

****

1. Avec la somme statistique sur le start

![](https://lh7-us.googleusercontent.com/iTaM15a97n1fmUSgvmd0WNM6cpa1AVGpci0Oc68tMNvg6Ug4Jo2WIvGOX104M3D0Hf6L3_1V9pjAguQD0hMBCVm3kvIhibBWEqkxV-EQfAFu5fSuE_NwEgvZkqcmZTm52NlVRb8AoSuwAomRqnv8XGg)

****

1. Dans généralité changez le Titre (Total des départs) et enregistrer

****

2. Maintenant faites glisser la jauge en bas de la carte

****

![](https://lh7-us.googleusercontent.com/LmSjBmOOvgl5d1rjbuCZZ79shZ2uFPjLKjUdLkGGmdZLnT2pLN9nHn787Y7y8IV37qTP-91vPxOnCXx4DdWkWZWslz4sBARsHW74rOtaShrqQ3mHq1ivix2QlXWJL-499emQt9ymdzWN0M82gKYRmJM)

****

1. Ajoutez une deuxième jauge mais sur la sommes de la fin des déplacements

****

![](https://lh7-us.googleusercontent.com/RpAqDNxMHzl3oVXVYaRjrlIbL4rDO-UuVkYL9dmfJKcpQ8CTOf_ByYzrQlRMjcFm7RzcjmcJiuWAvr5wHC5irq8fpdyzLSTmDEi5DbMJRNp148vEApO_BWhOBLg0jrwkq_QXTtGs4laP1ELHTknDpcA)

****

1. Ajouter maintenant un indicateur

****

![](https://lh7-us.googleusercontent.com/XjyWeJprljkohJmAsttQff-VrBA7tz2HWgAVQ3aIHHQ2VCUQhdVrVPtI3OOGKHY6A1t1qZlhVeCvSZxEmjXpywGCcyal7499MSouzw6y69eg49Xf3J9CxbVtzCG5-FXlS_tuRyoI5A03kpzAHmXC_R4)

****

1. Dans INDICATEUR cliquez sur ACTIVER (mise en forme avancée)

![](https://lh7-us.googleusercontent.com/LwZel8q9ykhviOHGjGmtjJJz2Vv45edOiQG_H9OHGRbGNbADh_OTC5M1uLuHqTvZ9nTWZe6ui5muNljEbrQk6SO6Vu_7q6SXqUERaiF8ee9BbhdaroEgf_Q4LrKXj62pLyeuEnOYQ9Yfju2rhJA9DuU)

![](https://lh7-us.googleusercontent.com/xyuv6VL4xs6ayBQxvLPRbKHeRXvgS_rsjyKOk5w-U5dOgp_XBP3svvS0WpUCCmmYYftsZYhDdCGxMg0_J8yy2tvbPGCatf_kQeqLdsE53mVgdgLGfuGfKMELhyFnHEwmaqSxNPXXoBuZmpGzme_9l80)

****

1. Ajouter TOPTEXT : 

2.   topText: 'Ratio départ / arrivée',

3. et

4.   topTextMaxSize: 'medium',

5. et 

6.   middleText: Round($datapoint.sum\_start\_total\_count/$reference.sum\_end\_total\_count,3),

****

1. Maintenant dans DONNÉES

2. Activer Référence

![](https://lh7-us.googleusercontent.com/rwUyq1-mkAY8mRduY_MnF9JRDJ0QnlfEAg_ByCQC0UDsobJ-dHoWr_o4O5VAfmDyTDpOdV_qvLh-XpjpIdsBeMSYRjY7ijhSKTPxZbNEtVrmBho3Y7IbakAQS7SOENgWOsBuxLLvalYARQCFEhvI0tc)

****

![](https://lh7-us.googleusercontent.com/DhqQzg181IQCcX3GjjD31-xgx64Rh6RSpGopqKrhoIvE2ZILN4dzvJQdHTCyfs3EcUHjXk9QzPadH3J7fNwU37_YP6vgddNfdrc9tBjHalNJIg-ee8ALUr9yKdNnSk5OvwlmvR-gXiULn9Bccew9tBc)

****

1. Maintenant ajouter un nouvel indicateur sur le total de station à l’écran

****

![](https://lh7-us.googleusercontent.com/NYQLR1gy7mBE3J6KYRRLzNU13cPTjUuSaILeJ-Ki8zbdLiw3Q0x7ynH5ITM4vgna8DTJnjl8zjYIHHNW-iz7VjYE5pIi1Li9vUMK5Jz7wNj6tdZAATpyTeJ8PWwjlmoMekq614FwAsmDPiN3tdq7Gbw)

1. Et une légende

![](https://lh7-us.googleusercontent.com/wQdSj8pGjWmGH3Cl1Vf2S9hmSTqFM303JuRDecoE-ihg-_ei9ME-aZafFD3qbuRLZgbm9LubIhWQXrkhXHouPMC8kd1f-K6A3u24wss9PKlVKwX3bsQpFHZ7gOekZy6gnIJaGP7FnUbi2JGS6MjDHjM)

****

****

Voici à quoi votre Dashboard doit ressembler

****

![](https://lh7-us.googleusercontent.com/JovUGdZQYVXy6W9Gw-ZZfMRZBRMouuPNAsg-jbGh21ZgnFc53u71uu472_Bf-SF_xL3p-cEh1QsveEjksYGXJYV7ZXgHT-c3tk8J1AzGGV29HpHV9BgTu5-HzwUfGmWU0x3M0W6ghyg_NSj4bYarfyQ)

****

1. Maintenant on va activer le calcul dynamique sur chacun des widgets

2. Cliquez sur Configurer la carte

![](https://lh7-us.googleusercontent.com/Q1BFd5KQsDU2U28pvxAOOBOQK55TI-qwmmQixjKkvtuMkAHEMsfiN_JTp6cC8r9eaiZAKI0zOP7UAZRmGbWlnHqZNmTAxKEHOWRK6oHS6RyGRjY6tfRZmXR3Dujr5HwEGojybw0YrqGDw6G1qENgx5g)

****

1. Allez dans ACTIONS SUR LA CARTE et activer toutes valeurs de filtre

![](https://lh7-us.googleusercontent.com/sVRh4Yrv05fJtnuOydbNo_J9LeJF-Wlm6ZVjfJvxasqymcbQdUFz9GcT1dFbETTRX4PBm6zSoAW8FlvLJkyqg0nHp2kU4aZcSQJdnfXLE_HOCPjN6smmjmuxVW_dhcOwqPjr08EMOGuMbeEfDBGkLmE)

1. Maintenant vous pouvez personnaliser votre thème de DB

****

![](https://lh7-us.googleusercontent.com/f3HCDs859x8vDTeKxFa_VVH_2AFUl6RjfZyNHJkyTF3uvVkSzy3fN49RxeozY58nkeCJdbtq9JCOEpvfbE942wgw8ZFcKwPfkDutoUHjxNBHyre3N4OBm7wFnMxwRFEFF-CwszH0KHsH5h7EwJ_CXEo)

****

1. Bonus : Fer à cheval avec canal dynamique (si temps en classe le permet)

****

![](https://lh7-us.googleusercontent.com/wCPuNzR9NhgB7MAdg5t2ztc3qgYC8KcCrpxJpIdUTLpfC-3lrrUozrzNiAuGsiX6K9OZ2KNh9G1psfOsWxG5TeflrgwwuRe477sLr_niKRTpFl2FjCnoHgUrSIx6hY3CT_CVjvA82Y37NGsoMXT8XMU)

****

![](https://lh7-us.googleusercontent.com/5IRYtEz_Y027N3SWjmNZcfHdj10DQ_v6HKadudmAjC3R7EqLiVb9Qz1lDunkQaRO3Yn1oZyJLKS48zlc4Pub8garhdhQkXziQ7nBgfTa1qAPc3wcEZOZgAa09zKeHNdLVaPIVK04MtbPAWlqz-RcMlQ)


# ESRI Experience Builder

****

Ouvrir EB

****

![](https://lh7-us.googleusercontent.com/GhVzdF1uXxT8qPORwdfY0HcixFRchgz0Bh6M6aAcL7VvYXpl7mIw5vR-Xh_WqDi6IcGD9HoYJIv_8z1q3DQwsqVXHGlqCTb7yBLmWkIUWU68X8-U7uMiPfAqrvFFSi2DKGalpHQ6wNbtdwN5P4NSC2U)

****

Créer un nouveau EB![](https://lh7-us.googleusercontent.com/k3A1SVEekV2hqHJ1pCowAb4JmAvtPJ3E4wIQNZAdk20M4-EJXNZoh2x21x8KttYMxqrK-6OOqbxvq_tJHhKAZuSvPyx8nM3RRVXbLksqzJrqE3P-LZETLrtXuOgamMCzbcrJOv46wtLUYJgm9LxSie8)

Choisir un template “Grille vierge”

****

![](https://lh7-us.googleusercontent.com/jJBuXVNIKbED0Aaa8RtopGcCUpveZTUrJcIi-ysK0FQ25zeismS2s-jaFnRbo2eRMxZqH25h2bqb4OfHD-nJ5H25zlrbEdChmFjwF2Oepim_GI1raY_yNxHI0ihR_eyqsJSHJVW5o3ciLYKQOAO7e5c)

****

Ajouter une carte

![](https://lh7-us.googleusercontent.com/NRTuiYB9YrpiBs4uB4YkaBZWX9khfn7vcRUnIHT0dl3p_NFGDVnggbi_xIYD2Fe8N3ho7LqdDxZOzdkbmfnc7UJXJyyMxezoMXul1TREMsW2A3mTHMTZzpHJGf9vK-R0vHLOyucH58H6cKzfLuFY72A)

Modifier la carte avec le bouton “Sélectionner une carte sur la droite”

![](https://lh7-us.googleusercontent.com/cE4FjEPYnqlEiGcDj6HRAeKNlpKQL9BBOer-SFK1g5li2iAQQToASOlQ2kQg1zhTgaHUn6xd5OkSz19iquykiW1jEltBzIqadtqh1CRm-QWsivsDMcjt3NyI4KTUXl6TuXPR3PTTGySTQinfH38hO7o)

Cliquez sur ajouter des données en bas

![](https://lh7-us.googleusercontent.com/SUp-kGLW3bB99p0W2ZaFfZwm_VUEB5Q48kzt2qmoP4RDuV3X-iP5perQf0ulfvYcJsG0GuuuN9OqpmSqfPUvqzzGSWTES6pz52yotDGwWClttI1pSaXXGRp-If40JCLSlQQFHszgIAt6dCexYUnbGcM)

Choisissez la bonne carte, puis cliquez sur Terminé

![](https://lh7-us.googleusercontent.com/BCYrm7WFQyJg9kk_a8VbCmLLeRyz5oOo0DA19jDr0nIFq95mWVN92KqQ9MeC6mkLgmqV2jIE9wgU7d0shfdJUs5G02zqJ6wp5vo-CYf3BDOeq--nmL_k9ZgyQCizaGu2Cfv2hNZoNlILXK3qChano3o)

Exemple de rendu (il faut cliquer sur le nom de la carte pour la faire apparaître) 

![](https://lh7-us.googleusercontent.com/P3kcHgmG11UhCB4EsrxtVloCQaACHYFFEZxb5RHmoxz8NhW8l8cI-Ism0T_hd8ZeVMzGYZJ-u2NCAYZoyx1MrCjRbxiZn7D8aS3aULZ-0w68a0mhbTRXv2tfrSAaZwezeFcNADK6szjh_oGO77wKV2E)

****

Insérer la légende en drag and drop

![](https://lh7-us.googleusercontent.com/PIzLD4ZPddutUem0impE9SWXZFW9Youjr5mxKMJNjBdV-3DxuJLNOrk8DqKcVJ7QbrOD03s1wDMgyYl4ur6P65JogfLEDdziLGCGhtJMnHrZ10QhXEFhGO71hAd_4WhvJRPeI6dDRUuBj_RIKXQP3sY)

Puis des Geosignets

![](https://lh7-us.googleusercontent.com/uD6ZncF-Hu0us9qrYkh2Zu2MzIYcTHnuEzdtykcnRcsuhy-WHmJAPt6pWPPPZ2K6ghXgAWHWqmhwX2IPfNGYz_gSfSuKuJdlTX5ZTzBho3Y8CJblOboe7w6Xvm79ja9tzkquR8CNRrnyLSMnwk-a0h8)

Exemple pour ajouter et modifier un geosignet

****

![](https://lh7-us.googleusercontent.com/E4EWJxXd6Z5WAecJIyDqL6FT0-VnQMCZEdYK7lD0mHZPmKyJBuTTTRc_uF29GrOdMt1x0I6yaWqDIRtqPQwwO8qMtz76viFM598bZv6rGlQejPT8xEJaG1vT1SY5uS5DkmOW8MDPTakVcs_onqFYTzw)

Dans le même genre d’idée ajouter une TABLE et 2 éléments de texte comme ci-dessous

![](https://lh7-us.googleusercontent.com/00AjtZCJ3wknQOVz1u89eYVDyuqd9z6XvTDxmBX6qlHO2tSOs0StDUqMvU5Ixks_2KX3NZp_lqsXSnJv8N3C5x2JUfpfen234plK3qI7WvQhvv_x2bV8mUWAl1Zf_vUbrfkl92IZOSuzUNtvWjzCrBg)

****

Table (Cliquez sur “Nouvelle feuille”, puis sélectionner votre donnée

![](https://lh7-us.googleusercontent.com/oJrxYr6vz9vOhw0e92yCeK_mbq2LTmZB3wPVEZ1EZAe3ESUqtqxLI2KBZate-60Y6MkEx-R5grXoaIgajYEPWqecUNf-s56GCy8R5pM58S0_bxnScz2_L2RTwN8IbayekIDgw219PKgpZkZaF3LeKSI)

****

Exemple de configuration de la table

****

![](https://lh7-us.googleusercontent.com/L2MUCldy82YqqGl5T8HV3cZNBBl4gjs4My6sZmrLyO_VX54OeYM8z5ezcRauVHMBk_P8SaPyDcLh6bjxDXWQub7hYg3hWrbdZx2BGbXVhTZbyVG9EbnEE786MXuRmlSg7B0jeWP2o0CZKYDZXCLu6zQ)

****

Rendu après configuration de la table

****

![](https://lh7-us.googleusercontent.com/PnfWpSX93BY6UkqgnlfGatEvQUZKL63ZcHydHKz5z7CPyROrC1Xm8pjhN8x6bGh4DPv12H6vt3xDlDozUiXnwQAQ_NHTy4HDL6Bqr13oRRPF_M3N3Bupabw6wiPvtcMXj5ckIvhM0irCF297Anccpgc)

****

Ajouter au texte une connexion aux données 

![](https://lh7-us.googleusercontent.com/6_9yDGagP78ltUOE_dWpiX7R4uZ3RtBJa46_iLVuw-vPcfHD7jj2Kzf0OjQ17PWgF4L0W5geydpaPeQh4mRrn2T3kJV51l04cxXYrc4NyTTEwxXfUH0roMppwfZ-XTPB4faxwjaBOhjjz7oitJ2ROW4)

Injecter des données statistiques dynamique au texte

Cliquez sur le texte et sur l’icône Base de données au dessus de la boîte de texte

![](https://lh7-us.googleusercontent.com/xep1t4arVnMz61atGh310qNx0GGEfklE3Q_34kqg9DIVauilZ0r_YuC0DE5KEfMpclXHvorXVFneRYB7MQ3KqLwygkxKAhlu7yXL-k0u7-oKgkixD3YOHHWMEKkE0P820ZhwNny3ETHPcErwHKr8LRk)

Ajoutez la somme par départ et arrivée dans les boites respectives

![](https://lh7-us.googleusercontent.com/_1zpLGcUVPsA22Ebcjy1rHD0_bEdc-NPhW2ML6KSq5bkkTRTp2WgiZOwe7FvAf6kIF2h9QUE5HrPHtDiunKuQMJaNM-4uRF5QBpMTnZ-sjjBrso-N4sL9HZcog8gW6Dq1ME2tSN0-484wHBSrUwXp2M)

****

Enregistrer et publier

****

![](https://lh7-us.googleusercontent.com/zt5QDBOA8QPf6e2NsaV4AB9KNbgBkq2T1WG5e4rGjtfibJD_is0llcjGSQkuzAtkRszKpLXFUMA0J3aEBt2R64wzrr1HDCmFFJH0s0WMilcKT67gRLAF-5Ro3jrhdJJLn0nKlNepbnazuh9XlUa0tns)

****


#

# Mise à jour des données avec FME

****

Dans le même FME que précédemment :


## CSV Reader

<https://sitewebbixi.s3.amazonaws.com/uploads/docs/20220108-donnees-ouvertes-816bd4.zip>

****

On remplace la source de juillet par la source d'août (Clic-droit sur le Reader de juillet pour choisir l’option “Disable”)

![](https://lh7-us.googleusercontent.com/TqR3b9Hz7Y0eukVlZXcvwasGyGi82o7cV9bH9H7-B_hpfZCwEXN3qLO1PzebtJDrqYg_DFn6YdgJf5E7Qo6cGCfbsVJv0e8jW-QWhZtQx4KzR6JPsjh_ZIGeANKuBmbEWVZRoYN4W-sbFjlCr72yKlk)


## AGOL Reader

On créer un nouveau Reader pour lire les données de ArcGIS Online de notre mois de Juillet pour faire la comparaison avec les nouvelles données du mois d'août.

![](https://lh7-us.googleusercontent.com/O2Mo_2pZqI3bNdw6R0d_eq2JmQwApvgQNUCL-xkRzpAAFKk4FRM7D1YplLXibk-51svHodxGK5RGoza6WxOd9TpwC0dTVRDaH_p9d3ZaqUf9spbPQQmXA6kYnzmNf8YN5CGQAljVPuyWMVGClyOieJg)

N’exposez que les 4 attributs ci-bas.

![](https://lh7-us.googleusercontent.com/ppVHPdkNCIwNH1cs9Z8m560Mqh--5XZiVVZ2WWhEwB7NnbAaFFPe9YkOUwo4fGLC0hEkqUVZogj4yIGH6z6RCXd617G-A9S3zRVWhO1x5xH7aRS4naJRshRIpNdqZnktuQQ70PHqVgoo9qfs0ZAEn24)


## ChangeDetector

****

Ici le transformer nous permet d’intercepter tous les nouveaux changements entre les 2 mois de données et pose la question : Est-ce que les stations bixi ont changé de place ? Est-ce qu’il y a des nouvelles stations ? etc… On choisit la clé primaire (identifiant unique) (pk) de station pour identifier les changements 

****

![](https://lh7-us.googleusercontent.com/BZv_OZyFXWugztzzjyV_BsaNG-Osgwj6d7TH99cF8PkQqdOHJealPZbXh41g3gCkEmWk3V0J9-wJO8apoUKYeHjWFo8j6YdJtULr3R8TBLTB3lDS3VS9PC23odVbldTDDVMRuOyA8ZrSadgnab6-CH4)

****

Ici on voit qu’entre juillet et août il y a 13 stations disparues et 51 nouvelles qui seront insérées et 722 qui seront mises à jour

**![](https://lh7-us.googleusercontent.com/Ivo1TTa9kvNamgPE3lmLx6GwnSwhnBLDmCxPutS6TVZLXlmXbpGSrJEaotP1FQaxzt1GDE_WzlccLByzNxnlxBBxcWiYOBfsYSiPYIidgbbRPpwjt0RG0UxzEE1NKzwwQh3apOwmnBAhjaWh-rImK98)**


##

## AttributeManager

Faites un peu de ménage des attributs comme suit

****

![](https://lh7-us.googleusercontent.com/WcfTDa6jo7EjsYrj3obynQ593Mow1PdDoLFgGMQIqTRCOKINbAm__wV7j5Rzf0tyxu5LALizRGwO6K15K08L_ZCJr3U-Iv6_WcrcslW5pU_6OBmwGphol4Vscs8pKp7qI6LlzZ17954fF_GNUJoO4rw)


## AGOL Writer

![](https://lh7-us.googleusercontent.com/X5TiTnkW9IUmIbOWE1lU6wvv-Lp2TcsCDn3d_e4v84f4v65cq84kxrpjlEAWHA2xP3WqRv8WVZZOjIUYnpOjCQoYk5gMm0c1iRAHBiJ4c3njbYhnZCbF7xneUZYnreJTQMOWc_Pevq-0OpS-7Fm9frA)

Vous pouvez maintenant aller voir votre Dashboard ou Expérience builder et voir que les données ont été mises à jour sans rien briser (dû au fait qu’il y a 13 stations supprimés et 51 nouvelles stations !)
