const workers = [
  {name: 'Benjamin', age: 25, nbHour: 35, alert : function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
  {name: 'Luc', age: 45, nbHour: 36, alert : function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
  {name: 'Marie', age: 23, nbHour: 35, alert : function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
  {name: 'Jeanne', age: 36, nbHour: 30, alert : function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
  {name: 'Jean', age: 37, nbHour: 34, alert : function () {return `employé: ${this.name}, heures: ${this.nbHour}`}}
]

let alerte = '';

for (let i = 0; i < workers.length; i++) {
if (workers[i].nbHour !== 35) {
// On ajoute le message d'alerte à la variable alerte
alerte += `${workers[i].alert()} \n`;
}
}

alert(alerte); 
