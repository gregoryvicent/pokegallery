import Print from "./print.js";
import GetImgPokemon from "../pokemons/get-img-pokemon.js";
export default class PrintAllPokemons extends Print {
    constructor(data) {
        super();
        this.data = data;
    }
    printPokemons() {
        var _a;
        const dataPokemon = this.data, $boxPokemons = document.createElement("div");
        let $fragment = document.createDocumentFragment();
        dataPokemon.results.forEach((element) => {
            const $articlePokemon = document.createElement("article"), $figurePokemon = document.createElement("figure"), $imgPokemon = document.createElement("img"), $figcaptionPokemon = document.createElement("figcaption"), $textPokemon = document.createTextNode(element.name);
            $imgPokemon.setAttribute("alt", element.name);
            $imgPokemon.setAttribute("title", element.name);
            const getImpPokemon = new GetImgPokemon(element.url);
            $figcaptionPokemon.appendChild($textPokemon);
            $figurePokemon.appendChild($figcaptionPokemon);
            $figurePokemon.appendChild($imgPokemon);
            $articlePokemon.appendChild($figurePokemon);
            $fragment.appendChild($articlePokemon);
        });
        $boxPokemons.appendChild($fragment);
        (_a = this.htmlElements.$pokemon) === null || _a === void 0 ? void 0 : _a.appendChild($boxPokemons);
    }
}
