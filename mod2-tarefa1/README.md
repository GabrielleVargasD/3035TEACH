# Documentação da tarefa – Contador de Cliques

## Enunciado

> “Criar uma tela com um botão e mostrar a quantidade de vezes que ele está sendo clicado pelo usuário. O link do GitHub com a tarefa deve ser postado nos comentários.”

## Passos para resolução da tarefa

### 1ª etapa: Organização do ambiente e primeiros erros

Organizei as pastas e criei um projeto React pelo terminal. Logo após, abri meu VS Code e percebi que havia alguns erros. O primeiro erro era no import do arquivo `App.css` no arquivo `App.tsx`. Para resolver isso, precisei criar um novo arquivo chamado `declarations.d` e, dentro dele, definir:

```ts
declare module "*.css";
```

Esse comando basicamente diz ao TypeScript que caminhos com `.css` são válidos e que não é necessário procurar um módulo TypeScript dentro deles.

Também dei uma limpada no código, retirando algumas coisas que eu não iria precisar para essa tarefa.

### 2ª etapa: Criação da `function App`, `increase` e `decrease`

Criei uma `function App` para guardar minhas constantes `count` e `setCount`, sendo `count` o número atual e `setCount` a função responsável por alterar o valor de `count` de acordo com as funções `increase` ou `decrease`.

Depois disso, criei as funções `increase` e `decrease`, que servem, respectivamente, para aumentar e diminuir o valor de `count`.

Dentro do `return`, chamo o meu `count` para mostrar o número atual na tela. Logo abaixo, crio dois botões: um com o sinal de `+`, que chama a função `increase` quando clicado, e outro com o sinal de `-`, que chama a função `decrease`.

Dessa forma, fiz meu contador simples utilizando o `useState` e algumas funções.
