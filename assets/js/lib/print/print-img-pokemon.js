import Print from "./print.js";
export default class PrintImgPokemon extends Print {
    constructor(data) {
        super();
        this.data = data;
    }
    printPokemons() {
        this.data.sprites.forEach((element) => {
            console.log(element.front_default);
        });
    }
}
