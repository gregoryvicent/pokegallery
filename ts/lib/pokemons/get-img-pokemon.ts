import FetchPokemon from "./fetch-pokemon.js";
import PrintImgPokemon from "../print/print-img-pokemon.js";
import { singlePokemonInterface } from "../interfaces.js";

export default class GetImgPokemon extends FetchPokemon {
  constructor(data: string) {
    super(data);
  }

  protected ejecute(response: singlePokemonInterface): void {
    const printImgPokemon: PrintImgPokemon = new PrintImgPokemon(response);
    
    printImgPokemon.printPokemons();
  }
}