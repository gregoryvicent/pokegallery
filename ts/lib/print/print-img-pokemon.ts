import Print from "./print.js";
import { singlePokemonInterface } from "../interfaces.js";

export default class PrintImgPokemon extends Print {
  private data: singlePokemonInterface;
  
  constructor(data: singlePokemonInterface) {
    super();
    this.data = data;
  }

  public printPokemons(): void {
    this.data.sprites.forEach((element) => {
      console.log(element.front_default)
    })
  }
}