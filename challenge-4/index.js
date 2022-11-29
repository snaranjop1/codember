const checkPassword = (pwd) => {
  if (!pwd.toString().includes("55")) return false;
  let goet = true;

  pwd.split("").reduce((prev, curr) => {
    goet &&= curr >= prev;
    return curr;
  }, 0);

  return goet;
};

let possiblePwds = [];

for (let index = 11098; index < 98124; index++) {
  if (checkPassword(index.toString())) {
    possiblePwds.push(index);
  }
}

console.log(`submit ${possiblePwds.length}-${possiblePwds[55]}`);
