const cowsay = require('cowsay');

const message = cowsay.say({
  text: "Bonjour, je suis une vache parlante!",
});

console.log(message);
