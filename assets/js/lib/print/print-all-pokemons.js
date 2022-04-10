import Print from "./print.js";
import GetImgPokemon from "../pokemons/get-img-pokemon.js";
export default class PrintAllPokemons extends Print {
    constructor() {
        super();
    }
    printPokemons(data) {
        var _a;
        const dataPokemon = data, $boxPokemons = document.createElement("div");
        let $fragment = document.createDocumentFragment();
        $boxPokemons.setAttribute("id", "pokemon-box");
        $boxPokemons.classList.add("row");
        $boxPokemons.classList.add("row-cols-4");
        dataPokemon.results.forEach((element) => {
            const $articlePokemon = document.createElement("article"), $figurePokemon = document.createElement("figure"), $imgPokemon = document.createElement("img"), $figcaptionPokemon = document.createElement("figcaption"), $textPokemon = document.createTextNode(element.name);
            $articlePokemon.classList.add("col");
            $figcaptionPokemon.classList.add("text-center");
            $imgPokemon.classList.add("img-fluid");
            $imgPokemon.classList.add("rounded");
            $imgPokemon.classList.add("mx-auto");
            $imgPokemon.classList.add("d-block");
            $imgPokemon.setAttribute("alt", element.name);
            $imgPokemon.setAttribute("title", element.name);
            const getImpPokemon = new GetImgPokemon(element.url, $imgPokemon);
            $figcaptionPokemon.appendChild($textPokemon);
            $figurePokemon.appendChild($imgPokemon);
            $figurePokemon.appendChild($figcaptionPokemon);
            $articlePokemon.appendChild($figurePokemon);
            $fragment.appendChild($articlePokemon);
        });
        $boxPokemons.appendChild($fragment);
        (_a = this.htmlElements.$pokemon) === null || _a === void 0 ? void 0 : _a.appendChild($boxPokemons);
    }
    printTypePokemons(data) {
        var _a;
        const dataPokemon = data, $boxPokemons = document.createElement("div");
        let $fragment = document.createDocumentFragment();
        $boxPokemons.setAttribute("id", "pokemon-box");
        $boxPokemons.classList.add("row");
        $boxPokemons.classList.add("row-cols-4");
        dataPokemon.pokemon.forEach((element) => {
            const $articlePokemon = document.createElement("article"), $figurePokemon = document.createElement("figure"), $imgPokemon = document.createElement("img"), $figcaptionPokemon = document.createElement("figcaption"), $textPokemon = document.createTextNode(element.pokemon.name);
            $imgPokemon.setAttribute("alt", element.pokemon.name);
            $imgPokemon.setAttribute("title", element.pokemon.name);
            $articlePokemon.classList.add("col");
            $figcaptionPokemon.classList.add("text-center");
            $imgPokemon.classList.add("img-fluid");
            $imgPokemon.classList.add("rounded");
            $imgPokemon.classList.add("mx-auto");
            $imgPokemon.classList.add("d-block");
            const getImpPokemon = new GetImgPokemon(element.pokemon.url, $imgPokemon);
            $figcaptionPokemon.appendChild($textPokemon);
            $figurePokemon.appendChild($imgPokemon);
            $figurePokemon.appendChild($figcaptionPokemon);
            $articlePokemon.appendChild($figurePokemon);
            $fragment.appendChild($articlePokemon);
        });
        $boxPokemons.appendChild($fragment);
        (_a = this.htmlElements.$pokemon) === null || _a === void 0 ? void 0 : _a.appendChild($boxPokemons);
    }
    printSinglePokemon(data) {
        var _a;
        const dataPokemon = data, $boxPokemons = document.createElement("div");
        let $fragment = document.createDocumentFragment();
        $boxPokemons.setAttribute("id", "pokemon-box");
        const $articlePokemon = document.createElement("article"), $figurePokemon = document.createElement("figure"), $imgPokemon = document.createElement("img"), $figcaptionPokemon = document.createElement("figcaption"), $textPokemon = document.createTextNode(data.name);
        $imgPokemon.setAttribute("alt", data.name);
        $imgPokemon.setAttribute("title", data.name);
        $imgPokemon.setAttribute("src", data.sprites.front_default);
        $figcaptionPokemon.appendChild($textPokemon);
        $figurePokemon.appendChild($imgPokemon);
        $figurePokemon.appendChild($figcaptionPokemon);
        $articlePokemon.appendChild($figurePokemon);
        $fragment.appendChild($articlePokemon);
        $boxPokemons.appendChild($fragment);
        (_a = this.htmlElements.$pokemon) === null || _a === void 0 ? void 0 : _a.appendChild($boxPokemons);
    }
}
