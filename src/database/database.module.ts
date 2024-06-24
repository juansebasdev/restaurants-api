import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigType } from '@nestjs/config';
import config from 'src/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => ({
        type: configService.database.type as any,
        host: configService.database.host,
        port: configService.database.port,
        username: configService.database.user,
        password: configService.database.password,
        database: configService.database.name,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
