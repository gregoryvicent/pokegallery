export default abstract class FetchPokemon {
  constructor(url: string, htmlElement?: HTMLElement) {
    fetch(url)
      .then((res) => {
        if (!res.ok)
          throw new Error(
            `Error with fetch petition, status code: ${res.status}`
          );

        return res.json();
      })
      .then((res) => {
        // Function Ejecution
        this.ejecute(res);
      })
      .catch((err) => {
        // Handle Error
        console.log(err);
      });
  }

  protected abstract ejecute(response: object): void;
}
