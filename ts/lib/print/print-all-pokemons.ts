import Print from "./print.js";
import GetImgPokemon from "../pokemons/get-img-pokemon.js";
import {
  dataInterface,
  typePokemon,
  pokemonInterface,
  singlePokemonInterface,
} from "../interfaces.js";

export default class PrintAllPokemons extends Print {
  constructor() {
    super();
  }

  public printPokemons(data: dataInterface): void {
    const dataPokemon = data,
      $boxPokemons: HTMLElement = document.createElement("div");

    let $fragment: Node = document.createDocumentFragment();

    $boxPokemons.setAttribute("id", "pokemon-box");
    $boxPokemons.classList.add("row");
    $boxPokemons.classList.add("row-cols-4");

    dataPokemon.results.forEach((element: pokemonInterface) => {
      const $articlePokemon: HTMLElement = document.createElement("article"),
        $figurePokemon: HTMLElement = document.createElement("figure"),
        $imgPokemon: HTMLElement = document.createElement("img"),
        $figcaptionPokemon: HTMLElement = document.createElement("figcaption"),
        $textPokemon: Node = document.createTextNode(element.name);

      $articlePokemon.classList.add("col");
      $figcaptionPokemon.classList.add("text-center");
      $imgPokemon.classList.add("img-fluid")
      $imgPokemon.classList.add("rounded")
      $imgPokemon.classList.add("mx-auto")
      $imgPokemon.classList.add("d-block")

      $imgPokemon.setAttribute("alt", element.name);
      $imgPokemon.setAttribute("title", element.name);

      const getImpPokemon: GetImgPokemon = new GetImgPokemon(
        element.url,
        $imgPokemon
      );

      $figcaptionPokemon.appendChild($textPokemon);
      $figurePokemon.appendChild($imgPokemon);
      $figurePokemon.appendChild($figcaptionPokemon);
      $articlePokemon.appendChild($figurePokemon);

      $fragment.appendChild($articlePokemon);
    });

    $boxPokemons.appendChild($fragment);
    this.htmlElements.$pokemon?.appendChild($boxPokemons);
  }

  public printTypePokemons(data: typePokemon): void {
    const dataPokemon = data,
      $boxPokemons: HTMLElement = document.createElement("div");

    let $fragment: Node = document.createDocumentFragment();

    $boxPokemons.setAttribute("id", "pokemon-box");
    $boxPokemons.classList.add("row");
    $boxPokemons.classList.add("row-cols-4");

    dataPokemon.pokemon.forEach((element: any) => {
      const $articlePokemon: HTMLElement = document.createElement("article"),
        $figurePokemon: HTMLElement = document.createElement("figure"),
        $imgPokemon: HTMLElement = document.createElement("img"),
        $figcaptionPokemon: HTMLElement = document.createElement("figcaption"),
        $textPokemon: Node = document.createTextNode(element.pokemon.name);

      $imgPokemon.setAttribute("alt", element.pokemon.name);
      $imgPokemon.setAttribute("title", element.pokemon.name);

      $articlePokemon.classList.add("col");
      $figcaptionPokemon.classList.add("text-center");
      $imgPokemon.classList.add("img-fluid")
      $imgPokemon.classList.add("rounded")
      $imgPokemon.classList.add("mx-auto")
      $imgPokemon.classList.add("d-block")

      const getImpPokemon: GetImgPokemon = new GetImgPokemon(
        element.pokemon.url,
        $imgPokemon
      );

      $figcaptionPokemon.appendChild($textPokemon);
      $figurePokemon.appendChild($imgPokemon);
      $figurePokemon.appendChild($figcaptionPokemon);
      $articlePokemon.appendChild($figurePokemon);

      $fragment.appendChild($articlePokemon);
    });

    $boxPokemons.appendChild($fragment);
    this.htmlElements.$pokemon?.appendChild($boxPokemons);
  }

  public printSinglePokemon(data: singlePokemonInterface): void {
    const dataPokemon = data,
      $boxPokemons: HTMLElement = document.createElement("div");

    let $fragment: Node = document.createDocumentFragment();

    $boxPokemons.setAttribute("id", "pokemon-box");

    const $articlePokemon: HTMLElement = document.createElement("article"),
      $figurePokemon: HTMLElement = document.createElement("figure"),
      $imgPokemon: HTMLElement = document.createElement("img"),
      $figcaptionPokemon: HTMLElement = document.createElement("figcaption"),
      $textPokemon: Node = document.createTextNode(data.name);

    $imgPokemon.setAttribute("alt", data.name);
    $imgPokemon.setAttribute("title", data.name);
    $imgPokemon.setAttribute("src", data.sprites.front_default);

    $figcaptionPokemon.appendChild($textPokemon);
    $figurePokemon.appendChild($imgPokemon);
    $figurePokemon.appendChild($figcaptionPokemon);
    $articlePokemon.appendChild($figurePokemon);

    $fragment.appendChild($articlePokemon);

    $boxPokemons.appendChild($fragment);
    this.htmlElements.$pokemon?.appendChild($boxPokemons);
  }
}
