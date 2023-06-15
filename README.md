# Biblioteca para verificação de links em arquivos .md

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## Descrição

Esse projeto faz parte do primeiro curso de node.js da Alura, neste curso criamos uma bibliote que é executada a partir do terminal, passando o arquivo a ser verificado e o parâmetro de validação.
O algoritimo percorre o arquivo atribuindo à um objeto os links encontrados por meio do REGEX construído, após esse passo o algoritimo envia uma requisição HTTP para os links por meio da função fetch e nos dá um retorno, indicando se o link continua ou não funcionando.
Como parâmetro pode ser passado tanto um arquivo, quanto um diretório, caso seja passado um diretório o algoritimo fará a verificação de todos os arquivos dentro do diretório.

---

## Aprendizados

Nesse curso eu tive o primeiro contato com o Node.js apesar de já utilizar javascript há algum tempo, consegui compreender melhor o funcionamento de funções assíncronas, leitura de arquivos utilizando a biblioteca "fs", utilização de bibliotecas externas com a biblioteca "chalk" utilizada, recebimento de argumentos pelo terminal, tratamento de erros e também aprimorei meus conhecimentos em REGEX.
