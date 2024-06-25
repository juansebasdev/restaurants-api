import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from 'src/user/services/user.service';
import MockUserRepository from '../utils/mock/mock.user.repository';

describe('AuthService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: 'UserRepository', useClass: MockUserRepository },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('should create an user', async () => {
    await userService.createUser({
      email: 'peter.parker@example.org',
      password: 'iamspiderman',
    });
    expect(await userService.getUsers()).toContainEqual({
      id: 1,
      email: 'peter.parker@example.org',
    });
  });
});
