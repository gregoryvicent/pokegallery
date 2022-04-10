import Print from "./print.js";
export default class PrintImgPokemon extends Print {
    constructor(data, imgElement) {
        super();
        this.data = data;
        this.imgElement = imgElement;
    }
    printPokemons() {
        this.imgElement.setAttribute("src", this.data.sprites.front_default);
    }
}
