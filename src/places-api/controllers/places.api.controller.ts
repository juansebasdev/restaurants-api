import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { RestaurantDto } from '../dtos/restaurant.dto';
import { RestaurantRequestDto } from '../dtos/restaurant.request.dto';
import { PlacesApiService } from '../services/places.api.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('places')
export class PlacesApiController {
  constructor(private readonly placesApiService: PlacesApiService) {}

  @Get('/restaurants')
  @UseGuards(AuthGuard('jwt'))
  async getRestaurantsNearby(
    @Req() req,
    @Query() restaurantRequestDto: RestaurantRequestDto,
  ): Promise<RestaurantDto[]> {
    return this.placesApiService.getRestaurantsNearby(
      req.user,
      restaurantRequestDto,
    );
  }
}
