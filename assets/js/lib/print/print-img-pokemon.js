import Print from "./print.js";
export default class PrintImgPokemon extends Print {
    constructor(imgElement) {
        super();
        this.imgElement = imgElement;
    }
    printPokemons(data) {
        this.imgElement.setAttribute("src", data.sprites.front_default);
    }
}
