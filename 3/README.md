# Desafio 3

## Como eu declarei os tipos
- Primeiro: Eu analisei a estrutura do array de objetos em `users`. Então, criei uma `interface` que correspondia a esse objeto e dei o nome de `User`. Os tipos dos campos do objeto foram declarados com base em seus valores no array users. Ao final a interface ficou assim:

```typescript
interface User {
  id: number;
  name: string;
  age: number;
}
```

Em typescript também existe a keyword `type` que poderia ser utilizado no lugar de `interface`. No contexto desse exercício não teria diferença em utilizar um ou o outro, mas a própria documentação fala que `interface` é mais robusto quando se trabalho no contexto de Programação Orientada a Objetos.

> **Referência:**: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

> **Note**: Não deixei nenhum campo como opcional (?) para obrigar o User ter sempre os 3 campos declarados.

- Segundo: Eu pensei no `input` e `output` da função que eu deveria construir.
```bash
input: Um array do tipo User (users: User[])

output: Um array de strings com os nomes dos users filtrados (: string[])
```

- Terceiro: Então declarei a função `filterNamesOver23` com esse pensamento e depois printei no console o resultado:

<table align="center">
  <tr>
    <td align="center">
      <img src="/desafio3.png" alt="Home Page" width="400" />
    </td>
  </tr>
</table>

> **Note:** A declaração de uma `interface` ajuda a manter o código com segurança de tipos, uma vantagem do typescript sobre o javascript e isso é muito bom quando temos de dar manutenção no código.


