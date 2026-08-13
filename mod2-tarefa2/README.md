# Relatório da Tarefa — Tabela de Filmes com Filtro

## Enunciado

Utilizando o JSON anexado, exibir os filmes em formato de tabela e criar um campo de pesquisa para filtrar o valor digitado e mostrar em tela o item localizado. O link do GitHub com a tarefa deve ser postado nos comentários.

**Vídeo utilizado para a realização da tarefa:**

- [Tutorial de React Table](https://www.youtube.com/watch?v=hson9BXU9F8&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=4)

## 1ª etapa: Organização do ambiente e primeiros erros

Organizei as pastas e criei um projeto React pelo terminal. Após abrir o projeto no VS Code, encontrei alguns erros. O primeiro estava relacionado ao import do arquivo `App.css` no `App.tsx`. Para resolver, criei um arquivo chamado `declarations.d.ts` e adicionei `declare module "*.css";`, informando ao TypeScript que arquivos `.css` são válidos.

Também limpei o código inicial do projeto, removendo partes que não seriam necessárias para a tarefa.

Além disso, criei uma pasta chamada **components**, dentro dela uma pasta **Table**, onde organizei os arquivos relacionados à construção da tabela.

## 2ª etapa: Organização dos passos necessários

Defini os seguintes passos para realizar a tarefa:

1. Definir as colunas da tabela com base nos dados do arquivo `filmes.json`.
2. Utilizar o `react-table` para criar a tabela com os dados.
3. Criar uma estrutura básica utilizando HTML/JSX.
4. Organizar os dados da tabela nessa estrutura.
5. Ajustar o CSS da tabela.
6. Criar um campo de pesquisa para filtrar os filmes.

## 3ª etapa: Desenvolvimento da tarefa

### 1. Definição das colunas

Primeiro, analisei os dados do arquivo `filmes.json` e identifiquei as principais chaves: `id`, `nome`, `genero` e `imagem`.

Criei o arquivo `columns.js` para organizar esses dados em um array de objetos chamado `COLUMNS`. Também tratei o campo das imagens para que os links fossem exibidos como imagens na tabela.

### 2. Utilização do `react-table`

Criei o arquivo `BasicTable.js`, responsável pela estrutura e funcionamento da tabela.

Nele, fiz os imports necessários e utilizei os dados de `COLUMNS` e `filmes.json` para criar o `tableInstance`. Também utilizei funções disponibilizadas pelo `react-table`, como `getTableProps`, `getTableBodyProps`, `headerGroups`, `rows` e `prepareRow`.

### 3. Estrutura básica da tabela

Dentro do `return`, criei a estrutura da tabela utilizando HTML/JSX. Também adicionei um campo de pesquisa e utilizei o `setGlobalFilter` para permitir que o usuário filtre os dados exibidos.

### 4. Organização dos dados

Utilizei as funções do `react-table` para relacionar os dados do JSON à estrutura da tabela, organizando as colunas e as linhas de acordo com os dados recebidos.

Essa foi uma das partes mais confusas da tarefa, mas consegui compreender melhor como os dados são relacionados à estrutura da tabela.

### 5. Estilização

Depois de finalizar a estrutura e o funcionamento da tabela, fiz a estilização utilizando CSS. Para essa etapa, utilizei como base um template disponibilizado pela W3Schools.

### 6. Filtro de pesquisa

Para o filtro, pesquisei diferentes formas de realizar essa funcionalidade e optei pelo uso do `globalFilter` disponibilizado pelo `react-table`.

Dessa forma, a tabela inicialmente exibe todos os filmes e, conforme o usuário digita no campo de pesquisa, os resultados são filtrados e apenas os itens correspondentes são exibidos.

## 4ª etapa: Resultados e conclusões

Achei essa tarefa relativamente complexa, principalmente pela parte de relacionar os dados da tabela com o HTML utilizando as funções do `react-table`. Foi minha primeira vez trabalhando com uma estrutura desse tipo, mas consegui compreender melhor seu funcionamento ao longo do desenvolvimento.

Em alguns momentos em que tive dúvidas, utilizei agentes de IA para esclarecer conceitos e resolver problemas específicos. Também busquei tutoriais para entender melhor o funcionamento do `react-table` e do filtro de pesquisa.

No geral, considero que a tarefa contribuiu para aumentar minha familiaridade com React, principalmente com a organização de componentes, utilização de bibliotecas e manipulação de dados para exibição em uma tabela.
