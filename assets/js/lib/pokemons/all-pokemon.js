import FetchPokemon from "./fetch-pokemon.js";
import PrintAllPokemons from "../print/print-all-pokemons.js";
export default class AllPokemon extends FetchPokemon {
    constructor(url) {
        super(url);
    }
    ejecute(response) {
        const printAllPokemons = new PrintAllPokemons(response);
        printAllPokemons.printPokemons();
    }
}
