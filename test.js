const el = document.getElementById('register-form');
el.addEventListener('submit', (event) => {
  event.preventDefault();

  let civility = event.target.female.checked ? 'female' : 'male';
  let name = event.target.name.value;
  let category = event.target.category.value;
  let newsletter = event.target.newsletter.checked;

  // Les variables déclarées ci-dessus contiennent les données du formulaire


let displayCivility = civility === 'female' ? "Mme" : "M";
let newsletterMessage

if (newsletter) {
    newsletterMessage = "Merci de vous etre abonné a notre newsletter ! " ;
} else {
    newsletterMessage = "Abonné vous vite a notre newsletter !";
}

let displayCat;

switch (category){
    case 'starter' :
        displayCat = "entrée froide";
        break;
    case 'soup' :
        displayCat = "soupe";
        break;
    case 'main-course' :
        displayCat = "salade";
        break;
    case 'fruit-dessert' :
        displayCat = "salade de fruit";
        break;
    case 'chocolate-dessert' :
        displayCat = "chocolate" ;
        break;
    default :
    displayCat = "entrée-froide" ;
}
    alert(`Bonjour ${displayCivility} ${name}. ${newsletterMessage}, elle permettra de vous envoyer de délicieuses recettes de votre catégorie préférée, ${displayCat}!`)
});