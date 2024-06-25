import { RestaurantDto } from 'src/places-api/dtos/restaurant.dto';
import { RestaurantRequestDto } from 'src/places-api/dtos/restaurant.request.dto';
import { UserDto } from 'src/user/dtos/user.dto';

export interface HistoricDto {
  id: number;
  data: RestaurantRequestDto;
  results: RestaurantDto;
  createdAt: string;
  user: UserDto;
}
