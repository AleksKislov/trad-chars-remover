const fs = require("fs");
const tradChars = require("./lib/dict");

const str = fs.readFileSync(process.argv[2], "utf-8").toString();
let hi = str;

for (let i = 0; i < str.length; i++) {
  const hex = str.charCodeAt(i).toString(16).toUpperCase();
  if (tradChars[hex]) {
    const re = new RegExp(str[i], "g");
    hi = hi.replace(re, "");
  }
}

fs.writeFileSync("output.txt", hi);
