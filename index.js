module.exports = value => {
  value = Date.parse(value);

  if (!value) {
    console.error("Birthdate is empty.");
    return undefined;
  }

  var today = new Date();
  var birthDate = new Date(value);

  if (!birthDate) {
    console.error("Wrong format of selected birthdate.");
    return undefined;
  }

  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;
  }

  if (age < 0) {
    console.error("Age by birthdate is less than 0");
    return 0;
  }

  return age;
};
