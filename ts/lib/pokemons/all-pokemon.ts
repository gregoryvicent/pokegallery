import FetchPokemon from "./fetch-pokemon.js";
import PrintAllPokemons from "../print/print-all-pokemons.js";
import { dataInterface } from "../interfaces.js";

export default class AllPokemon extends FetchPokemon {
  constructor(url: string) {
    super(url);
  }

  protected ejecute(response: dataInterface): void {
    const printAllPokemons: PrintAllPokemons = new PrintAllPokemons(response);

    printAllPokemons.printPokemons()
  }
}
