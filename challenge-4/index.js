const checkPassword = (pwd) => {
  let has55 = /([0-9]*)55([0-9]*)/g.test(pwd);
  let goet = true;

  pwd.split("").reduce((prev, curr) => {
    goet &&= curr >= prev;
    return curr;
  }, 0);

  return goet && has55;
};

let possiblePwds = [];

for (let index = 11098; index < 98124; index++) {
  if (checkPassword(index.toString())) {
    possiblePwds.push(index);
  }
}

console.log(`submit ${possiblePwds.length}-${possiblePwds[55]}`);
