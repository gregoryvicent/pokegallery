import Print from "./print.js";
import GetImgPokemon from "../pokemons/get-img-pokemon.js";
import { dataInterface, pokemonInterface } from "../interfaces.js";

export default class PrintAllPokemons extends Print {
  private data: dataInterface;
  constructor(data: dataInterface) {
    super();
    this.data = data;
  }

  public printPokemons(): void {
    const dataPokemon = this.data,
      $boxPokemons: HTMLElement = document.createElement("div");

    let $fragment: Node = document.createDocumentFragment();

    dataPokemon.results.forEach((element: pokemonInterface) => {
      const $articlePokemon: HTMLElement = document.createElement("article"),
        $figurePokemon: HTMLElement = document.createElement("figure"),
        $imgPokemon: HTMLElement = document.createElement("img"),
        $figcaptionPokemon: HTMLElement = document.createElement("figcaption"),
        $textPokemon: Node = document.createTextNode(element.name);

      $imgPokemon.setAttribute("alt", element.name);
      $imgPokemon.setAttribute("title", element.name);

      const getImpPokemon: GetImgPokemon = new GetImgPokemon(element.url);

      $figcaptionPokemon.appendChild($textPokemon);
      $figurePokemon.appendChild($figcaptionPokemon);
      $figurePokemon.appendChild($imgPokemon);
      $articlePokemon.appendChild($figurePokemon);

      $fragment.appendChild($articlePokemon);
    });

    $boxPokemons.appendChild($fragment);
    this.htmlElements.$pokemon?.appendChild($boxPokemons);
  }
}
