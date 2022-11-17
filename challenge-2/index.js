const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const decrypt = (nums) => {
  let decrypted = "";

  nums.split(" ").map((part) => {
    let stack = "";
    part.split("").map((num) => {
      if (stack < 97) {
        stack += num;
      } else {
        stack = num;
      }

      if (stack >= 97) {
        decrypted += alphabet[stack - 97];
      }
    });

    decrypted += " ";
  });

  return decrypted;
};

console.log(
  decrypt(
    "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101"
  )
);
