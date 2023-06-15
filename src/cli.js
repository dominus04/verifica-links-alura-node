import pegaArquivo from "./index.js";
import chalk from "chalk";
import fs from 'fs';
import listaValidada from "./http-validacao.js"

const caminho = process.argv;

async function imprimeLista(valida, resultado, nomeArquivo) {

    if(valida){
        console.log(
            chalk.yellow(`Lista de links de ${nomeArquivo} `),
            await listaValidada(resultado));
    }else{
        console.log(
            chalk.yellow(`Lista de links de ${nomeArquivo} `),
            resultado);
    }
}

async function processaTexto(argumentos){
    const caminho = argumentos[2];
    const valida = argumentos[3] === "valida";

    try {
        fs.lstatSync(caminho);
    } catch (error) {
        if(error.code === 'ENOENT')
            console.log("Arquivo ou diretório não existente.");
            return;
    }

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(caminho);
        const caminhoArquivo = caminho.split('/');
        imprimeLista(valida, resultado, caminhoArquivo[caminhoArquivo.length - 1]);
    }else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach( async (arquivo) => {
            const resultado = await pegaArquivo(`${caminho}/${arquivo}`);
            imprimeLista(valida, resultado, arquivo);
        })
    }

}

processaTexto(caminho);
