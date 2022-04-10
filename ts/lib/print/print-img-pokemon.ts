import Print from "./print.js";
import { singlePokemonInterface } from "../interfaces.js";

export default class PrintImgPokemon extends Print {
  private data: singlePokemonInterface;
  private imgElement: HTMLElement;
  
  constructor(data: singlePokemonInterface, imgElement: HTMLElement) {
    super();
    this.data = data;
    this.imgElement = imgElement;
  }

  public printPokemons(): void {
    this.imgElement.setAttribute("src", this.data.sprites.front_default);
  }
}