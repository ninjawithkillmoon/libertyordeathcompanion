import fetch from 'node-fetch';

export default {

  newGame: () => {
    return fetch("http://localhost:3001/api/Games/newGame", {
        method: "POST"
      })
      .then(function(response) {
        return response.json();
      });

  }
}