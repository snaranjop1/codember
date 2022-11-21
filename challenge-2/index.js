const alphabet =
  "'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[/]^_'abcdefghijklmnopqrstuvwxyz".split(
    ""
  );

const decrypt = (nums) => {
  let decrypted = "";

  nums.split(" ").map((part) => {
    let stack = "";
    part.split("").map((num) => {
      if (stack < 39) {
        stack += num;
      } else {
        stack = num;
      }

      if (stack >= 39) {
        decrypted += alphabet[stack - 39];
      }
    });

    decrypted += " ";
  });

  return decrypted;
};

console.log(
  decrypt(
    "73 107110111119 121111117 121111117 100111 110111116 107110111119 109101 73 97109 1199711699104105110103 121111117 73 97109 102111108108111119105110103 121111117 68111 121111117 11997110116 116111 11210897121 8010897121 119105116104 109101 79107 7610111639115 11210897121 82117110 116104105115 9911110910997110100 11511798109105116 116561181061045651505752561029911097108"
  )
);
