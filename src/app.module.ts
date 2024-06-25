import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { PlacesApiModule } from './places-api/places-api.module';
import { HistoricModule } from './historic/historic.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    CommonModule,
    PlacesApiModule,
    HistoricModule,
  ],
})
export class AppModule {}
