import flowerImage from "../img/pexels-photo-673857.jpeg";
import pineappleImage from "../img/pexels-karolina-grabowska-4195527.jpg";
import colaImage from "../img/pexels-olena-bohovyk-3819969.jpg";
import skyImage from "../img/pexels-soubhagya-maharana-5245865.jpg";

function chooseImage(inputFromPopup){
let toBeAddedImage;
switch(inputFromPopup){
    case("Annanas"):
        toBeAddedImage = pineappleImage;
        break;
    case("Bloemen"):
        toBeAddedImage = flowerImage;
        break;
    case("Cola"):
        toBeAddedImage = colaImage;
        break;
    default:
        toBeAddedImage = skyImage;
}
return toBeAddedImage;
}

export default chooseImage;