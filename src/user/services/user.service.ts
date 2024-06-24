import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create.user.dto';
import { UserDto } from '../dtos/user.dto';

export class UserService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<UserDto[]> {
    const users = await this.UserRepository.find();
    return users;
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    const newUser = this.UserRepository.create(createUserDto);
    await this.UserRepository.save(newUser);
    return newUser;
  }
}
