import Print from "./print.js";
import { singlePokemonInterface } from "../interfaces.js";

export default class PrintImgPokemon extends Print {
  private imgElement: HTMLElement;
  
  constructor(imgElement: HTMLElement) {
    super();
    this.imgElement = imgElement;
  }

  public printPokemons(data: singlePokemonInterface): void {
    this.imgElement.setAttribute("src", data.sprites.front_default);
  }
}