let userFields = ["usr:", "eme:", "psw:", "age:", "loc:", "fll:"];

fetch("https://codember.dev/users.txt")
  .then((response) => response.text())
  .then((data) => {
    let separatedUsers = saparateUsers(data);
    console.log(separatedUsers);
    let cleanedUsers = cleanSpaces(separatedUsers);
    console.log(cleanedUsers);
    let splittedUsers = splitUserFields(cleanedUsers);
    console.log(splittedUsers);
    let validUsers = filterValidUsers(splittedUsers);

    console.log(validUsers.length, validUsers[validUsers.length - 1]);
  });

const saparateUsers = (users) => {
  return users.split("\n\n");
};

const cleanSpaces = (users) => {
  return users.map((user) => user.replace(/\n/g, " "));
};

const splitUserFields = (users) => {
  return users.map((user) => user.split(" "));
};

const filterValidUsers = (users) => {
  return users.filter((user) => {
    return userFields.every((field) =>
      user.some((usrField) => usrField.startsWith(field))
    );
  });
};
