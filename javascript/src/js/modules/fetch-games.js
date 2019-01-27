export default function initFetchGames() {
  function createTeam(team) {
    const element = document.createElement('div');
    element.classList.add('game-team');
    element.innerHTML = `<img src="${team.logo}"><h4>${team.alternateName}</h4><span>${team.name}</span>`;
    return element;
  }

  function createInfo(name, time) {
    const element = document.createElement('div');
    element.classList.add('game-info');
    element.innerHTML = `<h3>${name}</h3><h5>${time}</h5>`;

    return element;
  }

  function createGame(game) {
    const element = document.createElement('li');
    element.classList.add('games-element');
    element.appendChild(createInfo(game.name, game.startDate.time.full));
    element.appendChild(createTeam(game.teams.homeTeam));
    element.appendChild(createTeam(game.teams.awayTeam));
    return element;
  }

  async function fetchGames(url) {
    try {
      const gamesResponse = await fetch(url);
      const gamesJSON = await gamesResponse.json();
      const gamesList = document.querySelector('.games-list');
      const currentTime = Math.round(new Date().getTime() / 1000) || 0;
      gamesJSON.forEach((game) => {
        if (game.startDate.timestamp > currentTime) {
          const gameElement = createGame(game);
          gamesList.appendChild(gameElement);
        } else {
          console.log('nao', game.startDate.timestamp, currentTime);
        }
      });
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchGames('http://localhost/apiGe.php');
}
