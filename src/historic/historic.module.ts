import { Module } from '@nestjs/common';
import { HistoricService } from './services/historic.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Historic from './entities/historic.entity';
import { HistoricController } from './controllers/historic.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Historic])],
  controllers: [HistoricController],
  providers: [HistoricService],
  exports: [HistoricService],
})
export class HistoricModule {}
