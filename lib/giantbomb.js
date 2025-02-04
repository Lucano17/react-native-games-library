const baseURL = `https://www.giantbomb.com/api/games/`;
const apiKey = "fc3c5bd9d4229d5351c3c540d088a77e1a2012be";
const limit = 10;

export async function fetchGames() {
  const url = `${baseURL}?api_key=${apiKey}&limit=${limit}&format=json`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    const games = data.results.map((game) => ({
      slug: game.guid,
      title: game.name,
      image: game.image?.screen_large_url || "",
      description: game.deck || "No description available",
      score: game.original_game_rating?.[0]?.name || "No rating",
    }));

    return games;
  } catch (error) {
    console.log("No se pudo recuperar la API", error);
    return [];
  }
}

export async function fetchGameDetails(slug) {
  const gameDetailsUrl = `https://www.giantbomb.com/api/game/${slug}/?api_key=${apiKey}&format=json`;
  try {
    const response = await fetch(gameDetailsUrl);
    const data = await response.json();
    if (!data.results) {
      console.error("No se encontraron detalles para el juego.");
      return null;
    }

    const game = data.results;

    return {
      title: game.name,
      image: game.image?.screen_large_url || "",
      description: game.deck || "No description available",
      score: game.original_game_rating?.[0]?.name || "No rating",
    };
  } catch (error) {
    console.log(error);
    return;
  }
}

// const imageRes = 1280 x 720
