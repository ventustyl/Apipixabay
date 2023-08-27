
# Application de Recherche d'Images

Ce projet est une application web de recherche d'images qui vous permet de rechercher et de visualiser des images à partir de l'API Pixabay. L'application est composée de trois fichiers principaux: `index.html`, `styles.css` et `script.js`.

## Comment Utiliser l'Application

1. Ouvrez le fichier `index.html` dans votre navigateur web.

2. Une fois la page chargée, vous verrez un formulaire de recherche en haut de la page.

3. Entrez un terme de recherche dans la barre de recherche et appuyez sur le bouton "Rechercher" ou appuyez sur la touche "Entrée".

4. Les images correspondantes à votre recherche seront affichées sous forme de vignettes dans la galerie.

5. Cliquez sur une vignette pour ouvrir un aperçu agrandi de l'image dans une fenêtre modale.

6. Pour fermer la fenêtre modale, cliquez en dehors de l'image agrandie ou sur le bouton de fermeture.

## Structure des Fichiers

- **index.html**: Ce fichier contient la structure HTML de base de l'application. Il inclut les éléments nécessaires pour afficher le formulaire de recherche et la galerie d'images.

- **styles.css**: Ce fichier contient les styles CSS qui définissent l'apparence visuelle de l'application. Il contrôle la mise en page, les couleurs, les polices et les animations.

- **script.js**: Ce fichier contient le code JavaScript qui interagit avec l'API Pixabay pour récupérer les images en fonction des termes de recherche saisis par l'utilisateur. Il gère également l'affichage des images dans la galerie et dans la fenêtre modale.

## Fonctionnalités Principales

- Formulaire de recherche: L'application dispose d'un formulaire de recherche permettant aux utilisateurs d'entrer des termes de recherche pour trouver des images spécifiques.

- Affichage de la Galerie: Les images correspondantes à la recherche de l'utilisateur sont affichées sous forme de vignettes dans la galerie.

- Fenêtre Modale: Lorsqu'une vignette est cliquée, une fenêtre modale s'ouvre, affichant l'image agrandie. L'utilisateur peut fermer la fenêtre modale en cliquant en dehors de l'image ou en utilisant le bouton de fermeture.

## Notes

- L'application utilise l'API Pixabay pour récupérer les images. Assurez-vous d'avoir une clé d'API valide et fonctionnelle, et de la renseigner dans le fichier `env.js`.

- Le fichier `env.js` doit contenir une variable `PIXABAY_API_KEY` qui stocke votre clé d'API Pixabay.

- L'application est conçue de manière responsive et s'adapte à différents appareils, y compris les appareils mobiles.

- Le code JavaScript utilise des événements pour interagir avec les éléments du DOM et gérer les actions de l'utilisateur.

---

**Note**: Assurez-vous de consulter la documentation de l'API Pixabay pour en savoir plus sur les fonctionnalités et les paramètres disponibles pour la recherche d'images.
**Auteur**: Eric Venturino
**Date**: Ocotbre 2022
