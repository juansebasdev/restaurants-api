import { Test, TestingModule } from '@nestjs/testing';
import { HistoricService } from 'src/historic/services/historic.service';
import MockHistoricRepository from '../utils/mock/mock.historic.repository';
import MockUserRepository from '../utils/mock/mock.user.repository';

describe('HistoricService', () => {
  let historicService: HistoricService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HistoricService,
        { provide: 'HistoricRepository', useClass: MockHistoricRepository },
        { provide: 'UserRepository', useClass: MockUserRepository },
      ],
    }).compile();

    historicService = module.get<HistoricService>(HistoricService);
  });

  it('should be defined', () => {
    expect(historicService).toBeDefined();
  });

  it('should create a historic', async () => {
    const historic = {
      data: JSON.stringify({
        location: { latitude: -0.180653, longitude: -78.467834 },
      }),
      results: JSON.stringify([
        { name: 'Restaurant 1' },
        { name: 'Restaurant 2' },
      ]),
      user: {
        id: 1,
        email: 'peter.parker@example.org',
        password: 'iamspiderman',
        createdAt: '2024-06-25 02:42:42.625118',
        historics: null,
      },
    };

    const newHistoric = await historicService.createHistoric(historic);
    expect(newHistoric.id).toBe(historic.user.id);
  });
});
