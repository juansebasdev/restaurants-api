import { IsNumberString } from 'class-validator';

export class RestaurantRequestDto {
  @IsNumberString()
  latitude: number | string;

  @IsNumberString()
  longitude: number | string;
}
