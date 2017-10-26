/**
 * Vous devez développer les fonctionnalités qui répondent à la demande ci-dessous
 * 
 * Dans le cadre du développement d'un site e-commerce vous devez développer la partie panier ("Cart" en anglais)
 * Celui-ci doit permettre :
 * - l'ajout d'un produit et de sa quantité. Un produit possède les propriétés suivantes : prix hors taxe, poids, nom, catégorie.
 * - de récupérer le prix total Hors Taxes(HT) du panier en additionnant tous les produits
 * - de récupérer les frais de port du panier. En sachant qu'un panier qui pèse moins de 1kg n'aura pas de frais de port
 *   un panier qui pèse entre 1kg et 5kg aura 25€ de frais de port et un panier qui pèse plus de 5kg aura 35€ de frais de port
 * - de définir une taxe qui sera appliquée à tous les produits du panier.
 * - de récupérer le prix total du panier. Ce qui comprend les prix de tous les produits en TTC + les frais de port
 * - d'ajouter une réduction qui sera effective sur le prix total du panier en TTC + frais de port.
 * 
 * Vous devez écrire tous les tests 
 */

 var cart = require('../src/cart.js');