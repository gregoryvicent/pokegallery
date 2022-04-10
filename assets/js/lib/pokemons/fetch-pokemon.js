export default class FetchPokemon {
    constructor(url, htmlElement) {
        fetch(url)
            .then((res) => {
            if (!res.ok)
                throw new Error(`Error with fetch petition, status code: ${res.status}`);
            return res.json();
        })
            .then((res) => {
            this.ejecute(res);
        })
            .catch((err) => {
            console.log(err);
        });
    }
}
