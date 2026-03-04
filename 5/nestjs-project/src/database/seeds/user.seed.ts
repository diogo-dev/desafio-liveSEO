import { CreateUserDto } from "src/user/dto/create-user.dto";
import { UserService } from "src/user/user.service";

export default async function seedUser(userService: UserService) {

  const existingUsers = await userService.findAll();

  if (existingUsers.length > 0) {
    console.log('Users já existem, pular seeding.');
    return;
  }

  const users: CreateUserDto[] = [
    { name: 'João Silva', email: 'joao.silva@email.com' },
    { name: 'Maria Santos', email: 'maria.santos@email.com' },
    { name: 'Pedro Oliveira', email: 'pedro.oliveira@email.com' },
    { name: 'Ana Costa', email: 'ana.costa@email.com' },
    { name: 'Carlos Souza', email: 'carlos.souza@email.com' },
    { name: 'Juliana Lima', email: 'juliana.lima@email.com' },
    { name: 'Ricardo Alves', email: 'ricardo.alves@email.com' },
    { name: 'Fernanda Pereira', email: 'fernanda.pereira@email.com' },
    { name: 'Bruno Martins', email: 'bruno.martins@email.com' },
    { name: 'Camila Rodrigues', email: 'camila.rodrigues@email.com' }
  ];

  for (const user of users) {
    try {
      await userService.create(user);
      console.log(`User ${user.name} criado com sucesso.`);
    } catch (error) {
      console.error(`Error ao criar user ${user.name}:`, error);
    }
  }

  console.log(`${users.length} users criados com sucesso.`);
}