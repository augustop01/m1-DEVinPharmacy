
![Logo](/public/img/pharm-logo-sm2.png)

## Índice

* [Aprasentação do Projeto](#apresentação-do-projeto)
* [Tecnologias](#tecnologias)
* [Configuração e pré-requisitos](#configuração-e-pré-requisitos)
* [Descrição do sistema](#descrição-do-sistema)
* [Funcionalidades da aplicação](#funcionalidades-da-aplicação)
## Apresentação do Projeto
Bem-vindo ao PharmArea, um sistema para gestão de redes de farmácias. Com essa plataforma, buscamos auxiliar e simplificar todo o processo de gerenciamento de uma rede através do registro em sistema das lojas, seus endereços, e dos produtos disponíveis. 
## Tecnologias
O sistema foi desenvolvido com a linguagem TypeScript, aliada às tecnologias ReactJS, React Leaflet e consumo de API para acesso a informações através de CEP.
## Configuração e Pré-requisitos

1. Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

    - [Node.js](https://nodejs.org/) (versão 14 ou superior)

    - [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

2. Faça um clone local do repositório no seu ambiente de desenvolvimento.
3. No terminal, abra o diretório raiz do seu clone local:
    ```bash
    cd disco/caminho/ambiente/raiz-do-projeto
    ```
4. Execute o comando `npm-install` para instalar as dependências.
5. Inicie a o servidor de desenvolvimento executando o comando `npm run dev`.
## Descrição do Sistema

- Página de login de usuário por **e-mail** e **senha** (no momento não requer cadastro prévio).

- Página de cadastro de farmácias (lojas físicas) através de dados comerciais e de localização

- Página com mapa global, renderizando dinamicamente o posicionamento de cada loja cadastrada através de leitura do localStorage, com base em geolocalização (latitude e longitude).
  > Caso nenhuma farmácia tenha sido cadastrada, será exibido uma tela informando o usuário, contendo um hiperlink para a página de cadastro de farmácias.

- Página de medicamentos através de seus dados comerciais e farmacêuticos.

- Página com listagem dinâmica dos medicamento cadastrados através de leitura do localStorage, contando com:
  - Filtragem de medicamentos por:
    - Tipo (comum ou controlado)
    - Ordem alfabética
    - Preço (crescente e decrescente)
  - Pesquisa de medicamento cadastrado por nome específico.

  - Modal dinâmico contendo informações adicionais de cada medicamento ao clicar no card do respectivo produto.

  - Ilustrações próprias para ambos os tipos de medicamento.

  > Caso nenhum medicamento tenha sido cadastrado, será exibido uma tela informando o usuário, contendo um hiperlink para a página de cadastro de medicamentos.

- Botão para alteração dinâmica entre dois temas: `Modo claro` e `Modo escuro`.

- Botão de logout dinâmico do usuário.

## Funcionalidades da Aplicação
- **Login de usuário**: para acessar as demais funcionalidades do sistema, o usuário deve realizar login através de:

    - **e-mail:** formato padrão.

    - **senha:** contendo entre 8 e 20 caracteres, precisando contar com pelo menos 1 letra e 1 número.

- **Cadastro de farmácia:** para cadastrar uma nova farmácia o usuário deve preencher um formulário fornecendo: 

  - **Dados comerciais da loja**:
    - Razão social,
    - CNPJ (somente números, contém auto-formatação),
    - Nome fantasia,
    - E-mail,
    - Telefone fixo [**opcional**] - (somente números, contém auto-formatação),
    - Telefone celular (somente números, contém auto-formatação).

   **Dados de endereço**:
    - CEP (somente números, contém auto-formatação),
    - Logradouro/rua,
    - Número,
    - Bairro,
    - Cidade,
    - Estado (Unidade Federal - UF),
    - Complemento [**opcional**],
    - Latitude,
    - Longitude.
  - **OBS:** Ao declarar o CEP, a plataforma tentará preencher as demais informações de endereço (salvo número e complemento), através do consumo de uma API especializada.

- **Mapa:** Ao cadastrar uma ou mais farmácias, a plataforma se encarregará de renderizar dinamicamente novos marcadores indicando a localização de cada loja.

  - Ao clicar em um marcador, será exibido um pop-up contendo todas as informações cadastradas da respectiva farmácia.

- **Cadastro de medicamento:** para cadastrar um novo medicamente, o usuário deve preencher um formulário fornecendo as seguintes informações do produto:

  - Nome,
  - Laboratório responsável,
  - Dosagem,
  - Descrição [**opcional**],
  - Preço unitário (somente números, contém auto-formatação),
  - Tipo (medicamento comum ou controlado).

- **Lista de medicamentos:** Ao cadastrar um ou mais produtos, a plataforma se encarregará de renderizar dinamicamente um card para artigo cadastrado.
  - Ao clicar no campo de "Forma de exibição", o usuário poderá filtrar ou reorganizar os medicamentos por: tipo, ordem alfabética, e preço.
  - Ao escrever na barra de pesquisa, o usuário poderá filtrar os medicamentos pelos seus nomes.
  - Ao clicar em um card específico, um modal contendo todas as informações de um medicamento surgirá na tela, contando também com botões interatíveis para alterar o produto que está sendo expandido e para fechar o modal.

- **Botão de troca de tema:** Ao clicar no botão localizado na ponta esquerda do cabeçalho, todo o visual do sistema será alterado entre os modos claro e escuro.
  - Caso o usuário esteja utilizando o `Modo Claro`, o botão terá o formato de uma meia lua.
  - Caso esteja no `Modo Escuro`, o botão terá o formato de um sol.

- **Botão de logout:** Ao clicar no botão localizado na ponta direita do cabeçalho, o usuário poderá deslogar e voltar automaticamente para a tela de login.