import { htmlElementInterface } from "../interfaces";

export default abstract class Print {
  protected htmlElements: htmlElementInterface = {
    $pokemon: document.getElementById("pokemon"),
  };

  public abstract printPokemons(): void;

  erasePokemons(): void {}
}
