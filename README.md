# DEVinPharmacy - Projeto em React com TypeScript
### [DEVinHouse - [CLAMED]v2 - Módulo 1]
##
Este é um ponto de partida para começar a desenvolver o projeto web de forma rápida e eficiente. Aqui estão algumas informações importantes para você começar:

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (gerenciadores de pacotes)

## Configuração

1. Clone este repositório para o seu sistema ou baixe-o como um arquivo ZIP.
2. Abra o terminal e navegue até o diretório do projeto:

```bash
cd caminho/para/o/projeto
```

3. Instale as dependências do projeto:

```bash
npm install   # Se estiver usando npm
# ou
yarn install  # Se estiver usando Yarn
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm run dev   # Se estiver usando npm
# ou
yarn dev      # Se estiver usando Yarn
```

Isso irá iniciar o Vite e configurar automaticamente um ambiente de desenvolvimento com recarga rápida (hot-reloading). Você pode acessar o aplicativo em seu navegador em `http://localhost:3000`.

## Estrutura do Projeto

O projeto possui a seguinte estrutura de diretórios:

```
/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── package.json
├── tsconfig.json
└── vite.config.js
```

- A pasta `public` contém o arquivo `index.html` que serve como o ponto de entrada do aplicativo.
- A pasta `src` contém os arquivos-fonte do projeto, como `App.tsx` que é o componente principal da aplicação, e `main.tsx` que inicia o aplicativo.
- O arquivo `package.json` lista as dependências do projeto e contém scripts para tarefas comuns.
- O arquivo `tsconfig.json` é o arquivo de configuração do TypeScript.
- O arquivo `vite.config.js` é o arquivo de configuração do Vite.

## Personalização

Sinta-se à vontade para personalizar este projeto de acordo com suas necessidades. Você pode adicionar mais componentes, estilos, ou qualquer outra funcionalidade que desejar.

## Produção

Para criar uma versão otimizada do aplicativo para produção, execute o seguinte comando:

```bash
npm run build   # Se estiver usando npm
# ou
yarn build      # Se estiver usando Yarn
```

Os arquivos otimizados serão gerados na pasta `dist`, prontos para serem implantados em um servidor web.

## Conclusão

Este projeto inicial em React com TypeScript usando Vite deve ajudar você a começar a desenvolver rapidamente aplicativos da web modernos. Divirta-se codificando e experimentando!

Se você tiver alguma dúvida ou encontrar problemas, sinta-se à vontade para abrir uma [issue](https://github.com/seu-usuario/seu-projeto/issues) neste repositório.

Happy coding! 🚀