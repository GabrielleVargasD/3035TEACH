# Relatório da Tarefa — Checkbox de Filmes

## Enunciado

Utilizando a mesma lista com 6 filmes da tarefa 2, mas agora com um novo parâmetro `checked`, exibir o nome do filme juntamente com um checkbox. Assim que um checkbox for clicado (`checked=true`), deve ser mostrada uma mensagem apresentando o nome do filme que foi selecionado.

## Materiais utilizados

- [How to create a React Checkbox — Robin Wieruch](https://www.robinwieruch.de/react-checkbox/)

## 1ª etapa: Organização dos dados

Utilizei a mesma lista de 6 filmes da tarefa anterior, porém adicionei o parâmetro `checked` em cada objeto do arquivo `filmes.json`.

Inicialmente, todos os filmes possuem:

```json
"checked": false
```

O objetivo é alterar esse valor para `true` quando o usuário selecionar um filme.

## 2ª etapa: Desenvolvimento

Criei um componente chamado `Check.js` e importei o arquivo `filmes.json` para utilizar os dados dos filmes.

Utilizei o `useState` para controlar a lista de filmes:

```js
const [listaFilmes, setListaFilmes] = useState(filmes);
```

Depois, utilizei o método `map()` para percorrer a lista e exibir o nome de cada filme juntamente com um checkbox.

Cada checkbox utiliza o valor `checked` do próprio filme, permitindo que cada item tenha seu estado independente.

Para identificar qual filme foi selecionado, utilizei seu `id`. Quando o checkbox é alterado, o código percorre a lista e modifica somente o filme correspondente, invertendo seu valor de `checked`:

```js
checked: !filme.checked
```

## 3ª etapa: Mensagem de seleção

Após identificar o filme selecionado, utilizei um `alert()` para mostrar uma mensagem contendo seu nome.

Por exemplo:

```text
Filme selecionado: Homem Aranha
```

A mensagem é exibida somente quando o filme está sendo selecionado. Ao desmarcar o checkbox, nenhuma mensagem é exibida.

## 4ª etapa: Resultados e conclusões

A tarefa foi mais simples que a anterior, mas ajudou a compreender melhor o funcionamento do `useState`, dos eventos `onChange` e da manipulação de listas em React.

Também pude entender melhor como trabalhar com diferentes estados dentro de uma lista, fazendo com que cada checkbox altere somente o filme correspondente.

Utilizei o material de apoio de Robin Wieruch para compreender melhor o funcionamento dos checkboxes controlados em React, principalmente a utilização de `useState`, `checked` e `onChange`.
