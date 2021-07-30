// 1. Crie um script que irá salvar as informações de memória a cada 5 segundos em um arquivo chamado log.txt

// As informações devem ser salvas no seguinte formato:
// {"total_memory":"xx MB", "free_memory":"xx MB", "usage":"xx %"}

// Onde:
//     * total_memory: Quantidade total de memória.
//     * free_memory: Quantidade de memória livre.
//     * usage: Porcentagem de uso da memória.

// */
const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const { EOL } = require("os");
const os = require('os');

(async () => {
    const freemen = ((parseInt(os.freemem() / 1024 / 1024)))
    const totalmem = ((parseInt(os.totalmem() / 1024 / 1024)))
    const usage = (freemen * 100) / totalmem

    const conteudo = `total_memory: ${totalmem + "MB"}${EOL}free_memory: ${freemen + "MB"}${EOL}usage: ${usage + "%"}`;

    try {
        fsPromises.writeFile(path.resolve(__dirname, "log.txt"), conteudo);
        console.log("O arquivo log.txt foi criado com sucesso!");
    } catch(err) {
        console.log(err);
    }
})();

{
    (async () => {
        const novoConteudo = EOL + "Outra linha foi adicionada :)";
        try {
            await fsPromises.appendFile(path.resolve(__dirname, "teste2.txt"), novoConteudo);
            console.log("Novo conteúdo adicionado (Promise)");
        } catch(err) {
            console.log(err.message);
        }
    })();
    
}

