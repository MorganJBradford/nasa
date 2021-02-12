export default class PokeService {
  static async pokePic() {
    try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random() * 898) + 1)}`);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
    } catch(error) {
      return error.message;
    }
  }
}