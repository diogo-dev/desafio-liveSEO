# Desafio 4

## Query para listar os usuários ordenados por "created_at" em order descendente:

```sql
SELECT * FROM "users" ORDER BY "created_at" DESC;
```

## Explicação da query:
- `SELECT *`: Seleciona todas as colunas da tabela "users". Caso a tabela tivesse muitas colunas e não fosse necessário selecionar todas (questão de performance), poderíamos especificar apenas as colunas necessárias, por exemplo: `SELECT id, name, created_at`.

- `FROM "users"`: Especifica a tabela de onde os dados serão selecionados, que é a tabela "users".

- `ORDER BY "created_at" DESC`: Ordena os resultados com base na coluna "created_at" em ordem descendente (do mais recente para o mais antigo). Isso garante que os usuários criados mais recentemente vão aparecer primeiro na lista retornada pela query.

> **Note:** O padrão de ordenação é ASC (ascendente), então se quiséssemos ordenar do mais antigo para o mais recente, poderíamos usar `ORDER BY "created_at" ASC` ou simplesmente `ORDER BY "created_at"`. Entretanto, é uma boa prática ser explícito sobre a ordem de ordenação para evitar confusões.