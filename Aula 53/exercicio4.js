// 1) Crie uma função obterArquivos(path) que receba como parâmetro o path de um diretório
// e retorne um vetor com todos os arquivos presentes naquele diretório.

// Obs.: Diretórios não devem ser incluídos.
const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

(async () => {
    const nomeNovaPasta = path.resolve(__dirname, "novaPasta");
    try {
        await fsPromises.mkdir(nomeNovaPasta, { recursive: true });
    } catch (err) {
        console.log(err.message);
    }    
})();

function obterArquivos(path){
    const nomePasta = path.resolve(__dirname, "novaPasta");
fs.readdir(nomePasta, (err, files) => {
    if (err) {
        return console.log(err.message);
    }
});
}
obterArquivos(path)