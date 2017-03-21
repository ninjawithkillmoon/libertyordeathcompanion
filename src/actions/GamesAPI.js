import fetch from 'node-fetch';

export default {

  newGame: () => {
    return fetch("https://ec2-13-54-124-87.ap-southeast-2.compute.amazonaws.com/api/Games/newGame", {
        method: "POST"
      })
      .then(function(response) {
        return response.json();
      });

  }
}