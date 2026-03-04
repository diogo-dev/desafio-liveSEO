import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { EntityNotFoundError, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(email: string): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail({ where: { email } });
      return user;
    } catch (error) {
      // Caso o usuário não seja encontrado, lança uma exceção de not found
      if (error instanceof EntityNotFoundError) {
        throw new NotFoundException(`Usuário com o email: ${email} não encontrado`);
      }
      throw error;
    }
  }
}
