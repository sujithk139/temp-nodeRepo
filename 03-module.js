// Module

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./04-firstModule");
const sayHi = require("./05-secondModule");
require("./07-mind-grenade");
// console.log(names);

const data = require("./06-alternativeSyntax");
// console.log(data);

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
