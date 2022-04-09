import FetchPokemon from "./fetch-pokemon.js";
import PrintImgPokemon from "../print/print-img-pokemon.js";
export default class GetImgPokemon extends FetchPokemon {
    constructor(data) {
        super(data);
    }
    ejecute(response) {
        const printImgPokemon = new PrintImgPokemon(response);
        printImgPokemon.printPokemons();
    }
}
