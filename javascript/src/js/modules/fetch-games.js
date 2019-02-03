export default function initFetchGames(url, parent) {
  // Cria cada div individual
  // de cada time
  function createTeam(team) {
    const element = document.createElement('div');
    element.classList.add('game__team');
    element.innerHTML = `<img src="${team.logo}"><h4>${team.alternateName}</h4><span>${team.name}</span>`;
    return element;
  }

  // Cria a div com o nome
  // e horario do jogo
  function createInfo(name, time) {
    const element = document.createElement('div');
    element.classList.add('game__info');
    element.innerHTML = `<h3>${name}</h3><h5>${time}</h5>`;
    return element;
  }

  // Cria o elemento da lista
  // para cada jogo e o retorna
  function createGame(game) {
    const element = document.createElement('li');
    element.classList.add('game');
    element.dataset.startDate = game.startDate.timestamp;
    element.appendChild(createInfo(game.name, game.startDate.time.full));
    element.appendChild(createTeam(game.teams.homeTeam));
    element.appendChild(createTeam(game.teams.awayTeam));
    return element;
  }

  // Insere um jogo na lista
  const gamesList = document.querySelector(parent);
  function insertGames(game) {
    const gameElement = createGame(game);
    gamesList.appendChild(gameElement);
  }

  async function createGames() {
    try {
      // Espera a resposta e transforma em json
      const gamesResponse = await fetch(url);
      const gamesJSON = await gamesResponse.json();

      // (Variavel removida) Pega o horario atual
      // const currentTime = Math.round(new Date().getTime() / 1000) || 0;

      // Executa as funcoes para cada jogo
      gamesJSON.forEach(game => insertGames(game));
    } catch (error) {
      console.log(error);
    }
  }

  return createGames();
}
