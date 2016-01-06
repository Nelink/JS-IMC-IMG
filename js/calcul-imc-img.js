/* 
Calculer son IMC (Indice de Masse Corporelle) et IMG (Indice de Masse Graisseuse)

Notes : 
- Formule IMC : Poids(kg)/(Taille(m)²)
- Formule IMG : IMG(%)=(1.20∗IMC)+(0.23∗Age)−(10.8∗Sexe*)−5.4
* : homme = 1 et femme = 0
*/

// Création du profil utilisateur :
var Profil = {
	init: function (nom, prenom, sexe, age, poids, taille) {
		this.nom = nom;
		this.prenom = prenom;
		this.sexe = sexe;
		this.age = age;
		this.poids = poids;
		this.taille = taille;
	},
	describe: function () {
		var description = this.prenom + " " + this.nom + ", " + this.age + "ans.";
		return description;
	},
	calculIMC: function () {
		tailleMetre = this.taille / 100;
		var IMC = this.poids / Math.pow(tailleMetre, 2);
		return IMC;
	},
	calculIMG: function () {
		valueIMC = this.calculIMC();
		if (this.sexe === "F") {
			var IMG = (1.20 * valueIMC) + (0.23 * this.age) - 5.4;
			return IMG;
		}
		else {
			var IMG = (1.20 * valueIMC) + (0.23 * this.age) - 10.8 - 5.4;
			return IMG;
		}
	}
}

// Début du programme :
var choix = -1; // On force l'entrée dans la boucle des options
console.log("Bienvenue dans cette version bêta du programme de calcul de votre IMC et IMG !");
var nomSaisi = prompt("Indiquez votre nom :");
var prenomSaisi = prompt("Indiquez votre prénom :");
var sexeSaisi = prompt("Indiquez votre sexe (M ou F) :");
var ageSaisi = prompt("Indiquez votre âge :");
var poidsSaisi = prompt("Indiquez votre poids en kg :");
var tailleSaisi = prompt("Indiquez votre taille en cm :");

profil1 = Object.create(Profil);
profil1.init(nomSaisi, prenomSaisi, sexeSaisi, ageSaisi, poidsSaisi, tailleSaisi);

while (choix !== 0) {
	console.log(); // Saut de ligne pour la lisibilité de l'affichage*
	console.log("1 : Afficher votre IMC");
	console.log("2 : Afficher votre IMG");
	console.log("3 : Nouveau profil");
	console.log("0 : Quitter");
	console.log(); // *
	choix = Number(prompt("Saisissez un choix :"));
	
	switch (choix) {
		case 1:
			console.log(profil1.describe() + " Voici votre IMC : " + profil1.calculIMC());
			var valeurIMC = profil1.calculIMC();
			
			if (valeurIMC < 16) {
				console.log("Vous êtes anorexique !");
			}
			else if ((valeurIMC >= 16) && (valeurIMC <= 18.5)) {
				console.log("Vous êtes un peu maigre...");
			}
			else if ((valeurIMC > 18.5) && (valeurIMC <= 25)) {
				console.log("Vous êtes très bien comme ça !");
			}
			else {
				console.log("Vous êtes en surpoids !");
			}
			break;
		case 2:
			console.log(profil1.describe() + " Voici votre IMG (%) : " + profil1.calculIMG());
			var valeurIMG = profil1.calculIMG();
			
			// Pour les femmes :
			if (profil1.sexe === "F") {
				if (valeurIMG < 25) {
					console.log("Vous êtes trop maigre...");
				}
				else if ((valeurIMG >= 25) && (valeurIMG <= 30)) {
					console.log("Bravo ! Vous avez un pourcentage normal.");
				}
				else {
					console.log("Il va falloir faire du sport ! Trop de graisse !");
				}
			}
			// Pour les hommes :
			else {
				if (valeurIMG < 15) {
					console.log("Vous êtes trop maigre...");
				}
				else if ((valeurIMG >= 15) && (valeurIMG <= 20)) {
					console.log("Bravo ! Vous avez un pourcentage normal.");
				}
				else {
					console.log("Il va falloir faire du sport ! Trop de graisse !");
				}
			}
			break;
		case 3:
			console.log("Fonctionnalité à venir... Soyez patient :)");
			break;
		case 0:
			console.log("A bientôt, et faites du sport ;-)");
			break;
		default:
			console.log("Veuillez saisir une option valide...");
	}
}
// Fin du programme