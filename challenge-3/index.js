fetch("https://codember.dev/colors.txt")
  .then((response) => response.json())
  .then((data) => {
    let colorForZebra;
    let max = [];
    let zebra = [];

    data.reduce((prev, curr) => {
      if (colorForZebra === curr && prev !== curr) {
        zebra.push(curr);
      } else {
        zebra = prev === curr ? [prev] : [prev, curr];
      }

      if (zebra.length >= max.length) {
        max = zebra;
      }

      colorForZebra = prev;

      return curr;
    });

    console.log(`submit ${max.length}@${max.pop()}`);
  });
