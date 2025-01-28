import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import Joi from 'joi';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        DATABASE_URL: Joi.string().required(),
        SECRET_KEY: Joi.string().required(),
        useFactory: async (configService: ConfigService) => ({
          uri: `mongodb://${configService.get('MONGO_DB_USER')}:${configService.get('MONGO_DB_PASSWORD')}@${configService.get('MONGO_DB_HOST')}:${configService.get('MONGO_DB_PORT')}/${configService.get('MONGO_DB_NAME')}`,
          authSource: 'admin'
        }),
        inject: [ConfigService],
      }),
    }),
    UsersModule,
  ],
})
export class AppModule {}
