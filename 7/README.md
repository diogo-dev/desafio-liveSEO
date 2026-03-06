# Desafio 7
Você está desenvolvendo uma aplicação e percebe que a tela de login está demorando muito para
carregar.

## Quais seriam as primeiras verificações que você faria para identificar o problema?

A primeira verificação que eu faria seria abrir o dev tools do navegador (F12) e verificar a aba Network para identificar os recursos que estão demorando para carregar, visto que é importante identificar se o problema está relacionado com o front-end ou com o back-end.

Depois, dependendo do resultado da primeira verificação, eu analizaria o código fonte para identificar possíveis gargalos de performance:
- Front-end: Verificar o bundle size da aplicação e, mediante a isso, buscar por elementos estáticos pesados, componentes desnecessários, código mal estruturado, bibliotecas desnecessárias, entre outros.

- Back-end: Verificar o tempo de resposta da API, verificar como o banco de dados está fazendo a busca do usuário (comando `EXPLAIN`: de forma sequencial ou utilizando o algoritmo b-tree, por exemplo). Caso o sistema já esteja em produção, é importante verificar os logs do servidor para identificar possíveis erros ou lentidões.

## Cite duas possíveis soluções para melhorar a performance.

### Front-end:

Diminuir o bundle do JavaScript com o uso de técnicas de refatoração de código, remoção de código inutilizado (ex: estilos CSS não usados e importações de bibliotecas desnecessárias). 

Caso a tela de login tenha muitos elementos estáticos pesados, como imagens ou vídeos, é possível otimizar o tempo de carregamento fazendo a compressão desses arquivos para formatos mais leves e responsivos.

Além disso, dependendo do framework utilizado, é possível utilizar técnicas próprias para otimizar o carregamento:
- Next.js: é possível diminuir o bundle com o uso de server components, que permitem que parte do código seja executado no servidor, reduzindo o tamanho do bundle enviado para o cliente.
- Vue.js: é possível diminuir o bundle com o uso de componentes assíncronos, que permitem que parte do código seja carregado somente quando necessário, reduzindo o tamanho do bundle enviado para o cliente.

E fazer uso de Lazy loading e Code spliting para carregar os recursos somente quando necessário, o que pode melhorar a performance da página.

Um exemplo seria carregar o recursos da tela de Dashboard somente quando o usuário fizer login, evitando que o navegador gaste tempo processando esses recursos enquanto o usuário ainda está no login.
```ts
const routes = [
  {
    path: "/login",
    component: () => import("../views/LoginView.vue")
  },
  {
    path: "/dashboard",
    component: () => import("../views/DashboardView.vue")
  }
];
```

### Back-end

No back-end, a possível solução para melhorar a performance seria criar um índice no banco de dados da tabela de `users`, criando esse índice no campo de `email/username`. Isso otimizaria a busca do usuário em uma tabela com uma quantidade grande de registros, pois o algoritmo de busca mudaria de uma busca sequencial para uma busca utilizando o algoritmo b-tree, que é muito mais eficiente.

Uma forma de analizar o impacto dessa mudança seria utilizando o comando `EXPLAIN` para comparar o tempo de resposta da consulta antes e depois da criação do índice, verificando se houve uma melhoria significativa na performance.

A complexidade da busca mudaria de `O(n)` (Seq Scan) para `O(log n)` (B-Tree), o que pode chegar a ser 100x mais veloz dependendo do tamanho da tabela de `users`.


