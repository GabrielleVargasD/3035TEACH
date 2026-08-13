Enunciado
Utilizando o json anexado abaixo, exibir os filmes em formato de tabela e criar um campo de pesquisa para filtrar o valor digitado e mostrar em tela o item localizado.O link do github com a tarefa deve ser postado nos comentários.
Vídeos utilizados para realização da tarefa:
https://www.youtube.com/watch?v=hson9BXU9F8&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=4 
1ª etapa: Organização do ambiente e primeiros erros
Organizei as pastas e criei um projeto React pelo terminal. Logo após, abri meu VS Code e percebi que havia alguns erros. O primeiro erro era no import do arquivo “App.css” no arquivo “App.tsx”. Para resolver isso, precisei criar um novo arquivo chamado “declarations.d” e, dentro dele, definir declare module "*.css";. Esse comando basicamente diz ao TypeScript que caminhos com .css são válidos e que não é necessário procurar um módulo TypeScript dentro deles.
Também dei uma limpada no código, retirando algumas coisas que eu não iria precisar para essa tarefa.
Além disso, criei uma pasta chamada components onde coloquei uma outra pasta chamada Table, nela irei colocar todos os arquivos relacionados a construção da tabela.
2ª etapa: Organizar os passos necessários para a resolução da tarefa

1. Definir as colunas da tabela com base nos dados do arquivo filmes.json
2. Utilizar react-table para criar uma tabela utilizando os dados contidos nas colunas
3. Definir uma estrutura básica utilizando html
4. Organizar os dados da tabela no html
5. Ajustar o css da tabela

3ª etapa: colocar em prática a resolução da tarefa
 Definir as colunas da tabela com base nos dados do arquivo filmes.json
Primeiro, analisei os dados contidos no arquivo filmes.json, e determinei que minhas chaves principais são id, nome, genero e imagem. Dessa forma, criei um arquivo chamado “columns.js” para poder tratar esses dados.  Separei cada chave contida no arquivo fiomes.js em um array de objetos chamado COLUMNS. Também tratei o link das imagens para poderem ser visíveis na tabela. 


Utilizar react-table para criar uma tabela utilizando os dados contidos nas colunas
Criei um arquivo chamado BasicTable.js, que será o arquivo “mãe” de toda a nossa funcionalidade da tabela. Fiz os imports necessários e criei conts para armazenam os dados do arquivo COLUMNS.js e filmes.js, dessa forma consegui criar um objeto tableInstance e passei os dados das colunas e do filme para ele. Também instanciei algumas variáveis que eu irei usar mais pra frente como getTableProps, getTableBodyProps, entre outros…

3. Definir uma estrutura básica utilizando html
Depois disso, criei dentro do return um formato de tabela em html além de um local para o input, onde utilizei o setGlobalFilter para poder funcionar como um filtro de pesquisa para os dados da tabela.
4. Organizar os dados da tabela no html
Depois disso, comecei a utilizar diferentes variáveis para poder relacionar os dados da tabela ao html, utilizando várias funções… Apesar dessa parte ser confusa, consegui entender um pouco o seu funcionamento. 
5. Ajustar o css da tabela
Depois da estrutura da tabela totalmente pronta, fui para a parte da estilização, onde não dei um foco muito grande e apenas utilizei um template disponibilizado na w3schools. 

3ª etapa: Resultados e conclusões
Achei essa tarefa relativamente complexa, a parte que mais me deixou confusa foi a questão de relacionar os dados da tabela com o html utilizando as funções do react-table, foi minha primeira vez fazendo um projeto assim mas acredito que com a prática posso melhorar bastante. Em partes em que eu me senti presa ou confusa, procurei algums agentes de IA para poder me esclarecer as dúvidas. Tentei fazer o máximo sozinha, mas por ser uma estrutura complicada para alguem que recem começou a aprender react agr, busquei um tutorial e consegui segui-lo e entendê-lo bem. Busquei varias formas que fazer o filtro de pesquisas també, e acabei escolhendo a forma mais fácil que era usando  o globalFilter…. Em geral, sinto que aprendi bastante de react e adquiri mais familiaridade com a sua estrutura. 