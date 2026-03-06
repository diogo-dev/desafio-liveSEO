# Desafio 2

Antes de começar explicar como eu implementei esse desafio com Vue.js, que compartilhar que esse desafio foi o que me tomou mais tempo, pois nunca tinha trabalhado com Vue.js antes. Então um peguei o dia para aprender Vue.js antes de começar a implementação.

Fiquei bem empolgado com o framework, pois fui aprendendo e comparando suas funcionalidades com as do React. Como, por exemplo, `computed() ~ useMemo()`, `watch() ~ useEffect()` e `ref() ~ useState()`. Isso me ajudou bastante a entender o framework e a implementar o desafio.

Depois que peguei o jeito com as diretivas `v-for`, `v-if`, `v-else`, `v-model`, `v-bind` (:) e `v-on` (@) e então consegui deixar os componentes mais dinâmicos.

Sem mais delongas, vamos para a explicação do código.

## Explicação

O projeto foi inicializado com o Vite, com o comando: `npm create vite@latest todo-list`. O Vue.js como framework e TypeScript como linguagem.

A estrutura de pasta está organizada da seguinte forma:
```src
├── components
│   ├── TodoCard.vue
│   ├── TodoForm.vue
│   └── TodoList.vue
├── App.vue
├── main.ts
├── style.css
└── types.ts
```

- App.vue: Componente principal da aplicação, onde estão as variáveis reativas, computed properties e funções para manipular os dados.
- main.ts: Ponto de entrada da aplicação, onde o componente App.vue é montado.
- style.css: Estilos globais da aplicação.
- types.ts: Definição dos tipos utilizados na aplicação, como o tipo `Todo` e o tipo `FilterType`.
- components/: Pasta onde estão os componentes criados para a aplicação.

## Componentes

### TodoForm.vue
Esse é o componente onde tem o `input` para criar novas tarefas.

Eu aprendi que em Vue.js a melhor prática não é passar funções como props, mas sim emitir eventos para o componente pai. Então, nesse componente, eu emito um evento `addTodo` com o título da nova tarefa quando o formulário é submetido.

No Componente pai `App.vue`, que é onde eu declaro o array de tarefas, eu escuto esse evento com `<TodoForm @add-todo="addTodo"/>` e adiciono a nova tarefa ao array através da função `addTodo`.

### TodoList.vue e TodoCard.vue
Esse componente renderiza a lista de tarefas que recebeu como `prop`. Ele itera por cada tarefa com o uso da diretiva `v-for` e renderiza um componente `TodoCard` para cada tarefa. 

Esse componente emite dois eventos para o componente pai `App.vue`, sendo que esses eventos são disparados no componente mais interno `TodoCard`, onde tem o checkbox para marcar a tarefa como feita e o botão para deletar a tarefa.

Os eventos são:
- `toggleDone`: Emite o id da tarefa para alternar a propriedade `done` (feito) da tarefa quando o checkbox é selecionado ou desselecionado. 
- `deleteTodo`: Emite o id da tarefa para remover a tarefa da lista quando o botão de exclusão é clicado.

No componente `App.vue`, eu escuto esses eventos com `<TodoList @toggle-done="toggleTodo" @delete-todo="deleteTodo"/>` e implemento as funções `toggleTodo` e `deleteTodo` para manipular o array de tarefas de acordo com a ação realizada.

### App.vue
Esse é o componente principal da aplicação, onde eu importo todos os outros componentes. É neste componente que eu:
- Declarei o array de tarefas: `const todos = ref<Todo[]>([]);`
- Implementei as funções que manipula esse array: `addTodo`, `toggleTodo` e `deleteTodo`.
- Declarei as variáveis que usam `computed()` para calcular o total de tarefas feitas e a lista filtrada de tarefas com base no filtro selecionado. Assim, eu consegui exibir uma mensagem dinâmica que mostra a quantidade de tarefas feitas em relação ao total e, também, passei a lista filtrada de tarefas para o componente `TodoList` para renderizar apenas as tarefas de acordo com o filtro selecionado.

A filtragem ocorre quando o usuário clica em um dos botões de filtro (Todos, Pendente, Feito). O estado do filtro é atualizado (ex: `@click="filter = 'done'"`) e a lista de tarefas é filtrada dinamicamente com base nesse estado.

A filtragem das tarefas não estava na especificação do desafio, mas é uma funcionalidade interessante que eu aprendi fazendo o tutorial da própria documentação do Vue.js, então decidi implementar para deixar a aplicação mais completa.

## Estilos
Eu usei CSS puro dentro da tag `<style scoped>` para estilizar os componentes. As cores do projeto foi inspirada nas cores da logo da empresa liveSEO.

O uso do `scoped` garante que os estilos definidos dentro do componente não afetem outros componentes, evitando conflitos de estilos.

## Como rodar a aplicação?

- Depois de clonado o projeto, navegue até a pasta do projeto: `cd todo-list`
- Instale as dependências: `npm install`
- Inicie a aplicação: `npm run dev`
- Abra seu navegador em `http://localhost:5173/`



