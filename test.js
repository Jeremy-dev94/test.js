let message ;
let chaineTv = 1;

switch (chaineTv){
    case 1 :
        message = "TF1";
        break;
    case 2 :
        message = "France2";
        break;
    case 3 :
        message = "France3";
        break;
    case 4 :
        message = "Canal+";
        break;
    case 5 : 
        message = "France5";
        break;
    case 6 : 
        message = "M6";
        break;
    case 7 : 
        message = "Arte";
    break;
    default : 
        message = "chaine-inconnue";
}
console.log(message);