<p align="center" style="background: #5429cc; border: 1px solid">
  <img width=200px height=200px src="/src/assets/logo.svg" alt="Project logo">
</p>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/Matheus-Chaves/dtmoney.svg)](https://github.com/Matheus-Chaves/dtmoney)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Matheus-Chaves/dtmoney.svg)](https://github.com/Matheus-Chaves/dtmoney/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">
  Sistema para cadastro e visualização transações.
</p>

## 📝 Sumário

- [Sobre](#sobre)
- [Iniciando o projeto](#getting_started)
- [Utilização](#utilizacao)
- [Construído com](#construido_com)
- [Autores](#autores)

## 🧐 Sobre <a name = "sobre"></a>

O :sparkles: dt money :sparkles: é um sistema de controle financeiro, onde é possível realizar o cadastro e visualização de entradas e saídas, além de separá-las em categorias.

É um projeto inteiramente frontend, que foi desenvolvido através das aulas de ReactJS do curso Ignite, da [Rocketseat](https://rocketseat.com.br/).

## 🏁 Iniciando o projeto <a name = "getting_started"></a>

As instruções abaixo irão servir para que o projeto seja corretamente instalado e utilizado em seu dispositivo.

### Pré-requisitos

É necessário ter as tecnologias abaixo instaladas em sua máquina para poder seguir os próximos passos.

- Um navegador para que o sistema rode (Google Chrome, Firefox, Edge, etc.)
- [Node.js](https://nodejs.org/pt-br/)
- [Git](https://git-scm.com/download/windows)
- (Opcional) - Editor de código para edição e visualização do script. Recomendado: [Visual Studio Code](https://code.visualstudio.com/download)

### ⚙️ Instalação e uso

Siga o passo a passo abaixo para instalar corretamente o aplicativo e rodá-lo no seu próprio dispositivo.

Para seguir as instruções abaixo corretamente, abra o terminal do seu sistema operacional e execute os seguintes comandos:

```bash
# Clone o repositório deste projeto
$ git clone https://github.com/Matheus-Chaves/dtmoney.git

# Acesse a pasta do projeto pelo terminal
$ cd dtmoney

# Instale as dependências
$ yarn

# Execute a aplicação no modo de desenvolvimento
$ yarn start

# O servidor rodará na porta:3000 - acesse <http://localhost:3000>
```

Após as instruções acima, o sistema já poderá ser utilizado.
Caso deseje encerrar/parar a aplicação, basta fechar o terminal ou encerrar o comando utilizando `Ctrl + C`.

## 🎈 Utilização <a name="utilizacao"></a>

A utilização do sistema é simples e a interface é bem intuitiva.

### Cadastrando uma transação

- Clique no botão "Nova transação"
- Insira as informações solicitadas
- Clique no botão "Cadastrar"
- A nova transação aparecerá na última linha da tabela
- A quantia de entradas, saídas e o total (soma dos valores anteriores), estão na parte superior da página

<div align="center">
  <img src="../dtmoney/.github/home.png" alt="Imagem do projeto"/>
  <img src="../dtmoney/.github/modal.png" alt="Imagem do projeto"/>
  <img src="../dtmoney/.github/dtmoney_demo.gif" alt="Gif do projeto"/>
</div>

## ⛏️ Construído com <a name = "construido_com"></a>

- [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação
- [React](https://reactjs.org/) - Biblioteca para desenvolvimento Web
- [Styled-components](https://styled-components.com/) - Biblioteca de estilização
- [Mirage JS](https://miragejs.com/) - Biblioteca para testes de API sem backend
- [Axios](https://axios-http.com/ptbr/docs/intro) - Cliente HTTP que trata requisições
- [react-modal](https://www.npmjs.com/package/react-modal) - Componente modal com acessibilidade
- [Polished](https://polished.js.org/) - Biblioteca que oferece estilizações prontas

## ✍️ Autores <a name = "autores"></a>

- Feito com :heart: by [@matheus-chaves](https://github.com/matheus-chaves)
- Projeto idealizado by [Rocketseat](https://rocketseat.com.br/) :purple_heart:
