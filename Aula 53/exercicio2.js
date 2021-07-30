// 1) Crie um script que leia o arquivo exercioNomes.txt e mostra todos os nomes que começam com a letra A
// presentes no arquivo.
const { kMaxLength } = require("buffer");
const fs = require("fs");
const fsPromises = require("fs/promises");
const { EOL } = require("os");
const path = require("path");

// let vetor = []

fs.readFile(path.resolve(__dirname, "exercicioNomes.txt"), (err, data) => {
    if (err) {
        return console.log(err.message);
    }
    let nomes = data.toString("utf-8");
    console.log(nomes)
    let a = nomes.split(EOL)
    var string = a.toString;
    console.log(string)
    console.log(string.startsWith(0, 1));  

})


const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));