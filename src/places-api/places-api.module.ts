import { Module } from '@nestjs/common';
import { PlacesApiController } from './controllers/places.api.controller';
import { PlacesApiService } from './services/places.api.service';
import { HttpModule } from '@nestjs/axios';
import { HistoricModule } from 'src/historic/historic.module';

@Module({
  imports: [HttpModule, HistoricModule],
  controllers: [PlacesApiController],
  providers: [PlacesApiService],
})
export class PlacesApiModule {}
