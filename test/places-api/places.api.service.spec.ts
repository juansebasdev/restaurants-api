import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { HistoricService } from 'src/historic/services/historic.service';
import { PlacesApiService } from 'src/places-api/services/places.api.service';

describe('PlacesApiService', () => {
  let placesApiService: PlacesApiService;

  const mockAxiosInstance = {
    get: jest.fn(),
    post: jest.fn(),
  };

  beforeEach(async () => {
    jest.mock('axios', () => ({
      create: jest.fn(() => mockAxiosInstance),
    }));

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlacesApiService,
        HttpService,
        ConfigService,
        { provide: HistoricService, useValue: {} },
        { provide: 'AXIOS_INSTANCE_TOKEN', useValue: mockAxiosInstance },
      ],
    }).compile();

    placesApiService = module.get<PlacesApiService>(PlacesApiService);
  });

  it('should be defined', () => {
    expect(placesApiService).toBeDefined();
  });
});
