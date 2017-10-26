# JS Ecrire des tests

Le but est d'écrire les tests et les fonctionnalités.

N'oubliez pas de bien tout faire dans l'ordre :

1. On écrit les tests et les faits échouer
2. On écrit le code pour faire passer les tests en vert
3. On optimise notre code si nécessaire

## Pré-requis

* Installer Node.js et NPM
  * [Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
  * [Mac OS](http://blog.teamtreehouse.com/install-node-js-npm-mac)
  * [Linux](http://blog.teamtreehouse.com/install-node-js-npm-linux)


* Installer Jasmine en global `npm install -g jasmine`

Attention : les tests que vous allez écrire sont en nodejs, d'où l'utilisation de jasmine en ligne de commande et des `require`

## Organisation

Les tests devront se trouver dans le dossier **tests** et le code dans le dossier **src**.

## Lancer les tests

Exécuter les tests avec `jasmine tests/NOM_SERIE.spec.js`

À faire dans l'ordre les séries suivantes : 

1. IsMyAnimal.spec.js
2. FizzBuzz.spec.js
3. Panier.spec.js

# Ressources 

* [Les matchers jasmine](https://jasmine.github.io/api/2.8/matchers.html)
* [Test Driven Developpement](https://openclassrooms.com/courses/tester-l-interface-de-son-site/apprenez-le-test-driven-development-tdd)