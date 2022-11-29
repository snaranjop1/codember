fetch("https://codember.dev/mecenas.json")
  .then((response) => response.json())
  .then((data) => {
    const hungerGames = data.map((usr, index) => {
      return { name: usr, index };
    });

    while (hungerGames.length > 1) {
      for (let index = 0; index < hungerGames.length; index++) {
        if (!hungerGames[index + 1]) {
          hungerGames.splice(0, 1);
        } else {
          hungerGames.splice(index + 1, 1);
        }
      }
    }

    console.log(`submit ${hungerGames[0].name}-${hungerGames[0].index}`);
  });
