import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RestaurantRequestDto } from '../dtos/restaurant.request.dto';
import { AxiosError } from 'axios';
import { RestaurantDto } from '../dtos/restaurant.dto';
import { catchError, firstValueFrom } from 'rxjs';
import { HistoricService } from '../../historic/services/historic.service';
import User from 'src/user/entities/user.entity';

@Injectable()
export class PlacesApiService {
  private readonly apiUrl: string;
  private readonly apiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly historicService: HistoricService,
  ) {
    this.apiKey = this.configService.get<string>('PLACES_API_KEY');
    this.apiUrl = this.configService.get<string>('PLACES_API_URL');
  }

  async getRestaurantsNearby(
    user: User,
    restaurantRequestDto: RestaurantRequestDto,
  ): Promise<RestaurantDto[]> {
    const { latitude, longitude } = restaurantRequestDto;
    const location = `${latitude},${longitude}`;
    const radius = 1500;
    const type = 'restaurant';
    const url = `${this.apiUrl}/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${this.apiKey}`;

    const { data } = await firstValueFrom(
      this.httpService.get(url).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw new HttpException(error.response.data, error.response.status);
        }),
      ),
    );

    const return_data = data.results.map((restaurant) => ({
      name: restaurant.name,
    }));
    await this.historicService.createHistoric({
      data: JSON.stringify(restaurantRequestDto),
      results: JSON.stringify(return_data),
      user: user,
    });
    return return_data;
  }
}
