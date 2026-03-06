# Desafio 6

## Quais pastas e arquivos você criaria para organizar o frontend (Vue.js)?

Começando o projeto do zero, eu estruturaria o projeto da seguinte forma:
```src
frontend/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/         
│   │
│   ├── components/      
│   │   ├── ui/
│   │   │   ├── Button.vue
│   │   │   └── Input.vue
│   │   └── layout/
│   │       ├── Navbar.vue
│   │       └── Footer.vue
│   │
│   ├── views/           
│   │   ├── Home.vue
│   │   ├── Login.vue
│   │   └── Dashboard.vue
│   │
│   ├── router/          
│   │   └── index.ts
│   │
│   ├── services/        
│   │   └── api.ts
│   │
│   ├── composables/     
│   │   └── useAuth.ts
│   │
│   ├── utils/           
│   │   └── formatDate.ts
│   │
│   ├── types/           
│   │   └── user.ts
│   │
│   ├── App.vue          
│   └── main.ts          
│
├── .env                
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

- **assets**: Para armazenar arquivos estáticos como imagens, fontes e estilos globais.
- **components**: Para componentes reutilizáveis da aplicação, podendo ser organizados em subpastas de acordo com a função (UI, layout, etc).
- **views**: Para as páginas da aplicação, cada arquivo representando uma rota.
- **router**: Para a configuração das rotas da aplicação utilizando o Vue Router.
- **services**: Para arquivos relacionados à comunicação com APIs, como configuração do Axios ou funções para fazer requisições. Assim, a lógica de comunicação com o backend fica centralizada centralizada em um único lugar, facilitando seu uso e manutenção.
- **composables**: Para lógica reutilizável utilizando a Composition API do Vue 3, como hooks personalizados. Um exemplo seria um hook de autenticação (`useAuth.ts`) que fornece funções para login, logout e status de autenticação.
- **utils**: Para funções auxiliares da aplicação, como validação, formatação de dados, etc.
- **types**: Para definir tipos e interfaces TypeScript utilizadas na aplicação.

## Quais pastas e arquivos você criaria para organizar o backend (NestJS)?

Começando o projeto do zero, eu utilizaria a CLI para iniciar o projeto com o comando:
```bash
nest new project-name
```
Isso criaria a estrutura básica do projeto, com as seguintes pastas e arquivos:
```src
├─src
├── app.controller.ts
├── app.controller.spec.ts
├── app.module.ts
├── app.service.ts
├── app.service.spec.ts
├── main.ts
```

Depois eu criaria a pasta `database` para organizar os arquivos relacionados ao banco de dados:
```src
├─src
├── database/
├───── migrations/
├───── seeds/
├── data-source.ts
```

A pasta `migrations` armazena as migrations geradas para criar/modificar o banco de dados

A pasta `seeds` armazena os arquivos de seed para popular o banco de dados com dados iniciais (caso necessário)

O arquivo `data-source.ts` é responsável por configurar a conexão com o banco de dados utilizando o TypeORM, definindo as entidades, migrations e seeds.

Caso eu utilize outro ORM, como o Prisma, a organização para a configuração com o banco de dados seria diferente, mas a ideia de ter uma pasta específica para isso se mantém.

Depois, eu criaria a pasta `modules` para organizar os módulos da aplicação, seguindo a arquitetura modular do NestJS:
```src
├─src
├── modules/
├───── auth/
├───── users/
```

É nesta pasta onde são criadas as entidades do banco de dados e, também, os controllers, services e DTOs. Essa criação de recursos é facilitada pela CLI do NestJS, utilizando os comandos:
```bash
nest g resource modules/auth
nest g resource modules/users
```

É interessante manter os recursos dentro da pasta `modules` para manter a organização em projetos maiores, evitando que a pasta `src` fique muito poluída com muitos arquivos e pastas.

Lembrando que ao criar um recurso usando a CLI, o NestJS já organiza os arquivos e pastas de acordo com a seguinte estrutura:
```src
├─src
├── modules/
├───── user/
├───────── dto/
├──────────── create-user.dto.ts
├──────────── update-user.dto.ts
├───────── entities/
├──────────── user.entity.ts
├───── user.controller.ts
├───── user.controller.spec.ts
├───── user.module.ts
├───── user.service.ts
├───── user.service.spec.ts
```

Eu particularmente gosto dessa organização, pois mantém agrupados todos os arquivos relacionados a um recurso em uma pasta, facilitando a navegação dentro da app.

> **Note**: No Desafio 5, eu não criei a pasta `modules`, pois o desafio era somente com uma entidade, então a criei a pasta `src` mesmo.

Eu também criaria a pasta `common` para armazenar arquivos comuns que podem ser utilizados em toda a aplicação, como `custom decorators`, `exception filters`, `pipes`, `guards`, `interceptors` e etc:
```src
├─src
├── common/
├───── decorators/
├───── filters/
├───── guards/
├───── interceptors/
├───── pipes/
```

