/**
 * Test de la fonction FizzBuzz.
 * 
 * Cette fonction accepte un tableau de nombre en paramètre. 
 * Elle doit afficher chaque nombre, à l'aide de console.log.
 * Mais il y a certaines spécificités : 
 * - Si le nombre est multiple de 3 afficher "Fizz" à la place de celui-ci
 * - Si le nombre est multiple de 5 afficher "Buzz" à la place de celui-ci
 * - Si le nombre est multiple de 15 afficher "FizzBuzz" à la place de celui-ci
 * 
 * Exemple:
 * ========
 * Pour un tableau de nombres qui vont de 1 à 15, le résultat sera : 
 * 1 
 * 2 
 * Fizz 
 * 4 
 * Buzz 
 * Fizz 
 * 7 
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz 
 * 13 
 * 14 
 * Fizz Buzz
 * =========
 * 
 * Vous devez écrire tous les tests pour tous les cas 
 */

 //Importation de la fonctionnalité à tester
 var fizzBuzz = require('../src/fizz-buzz');