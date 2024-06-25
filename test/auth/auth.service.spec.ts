import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from 'src/auth/services/auth.service';
import MockUserRepository from '../utils/mock/mock.user.repository';
import MockJwtService from '../utils/mock/mock.jwt.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useClass: MockJwtService },
        { provide: 'UserRepository', useClass: MockUserRepository },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should create and return a token', async () => {
    const token = await authService.signUp({
      email: 'clark.kent@example.org',
      password: 'iamsuperman',
    });
    expect(token).toHaveProperty('token');
  });

  it('should return a token', async () => {
    await authService.signUp({
      email: 'clark.kent@example.org',
      password: 'iamsuperman',
    });
    const token = await authService.login({
      email: 'clark.kent@example.org',
      password: 'iamsuperman',
    });
    expect(token).toHaveProperty('token');
  });

  it('should throw an error if the user is not found', async () => {
    try {
      await authService.login({
        email: 'bruce.wayne@example.org',
        password: 'iamthebat',
      });
    } catch (error) {
      expect(error.response).toBe('User not found');
      expect(error.status).toBe(404);
    }
  });
});
