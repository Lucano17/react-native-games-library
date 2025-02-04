const baseURL = `https://www.giantbomb.com/api/games/`;
const apiKey = "fc3c5bd9d4229d5351c3c540d088a77e1a2012be";
const limit = 1;

export async function fetchGames() {
  try {
    const url = `${baseURL}?api_key=${apiKey}&limit=${limit}&format=json`;
    console.log("Fetcjing URL:", url);

    const response = await fetch(url);
    const data = await response.json();

    const games = data.results.map((game) => ({
      slug: game.guid, // Giant Bomb usa "guid" en lugar de "slug"
      title: game.name,
      image: game.image?.screen_large_url || "",
      description: game.deck || "No description available",
      score: game.original_game_rating?.[0]?.name || "No rating",
    }));

    console.log("Juegos obtenidos:", games);
    return games;
  } catch (error) {
    console.log("No se pudo recuperar la API", error);
    return [];
  }
}

// const response = {id, image.screen_large_url, name, original_game_rating.game_rating, description}
// const imageRes = 1280 x 720
