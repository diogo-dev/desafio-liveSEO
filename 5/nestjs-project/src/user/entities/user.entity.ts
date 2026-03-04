import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {

  @PrimaryGeneratedColumn('identity')
  id: string;

  @Column()
  name: string;

  // O email deve ser único para buscar melhor um usuário
  // Gera um índice único no banco de dados para a coluna email.
  @Column({ unique: true })
  email: string;
}
