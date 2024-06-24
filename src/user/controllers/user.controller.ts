import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create.user.dto';
import { UserDto } from '../dtos/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<UserDto[]> {
    return this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
