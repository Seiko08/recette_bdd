import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RecetteModule } from './recette/recette.module';
import * as Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        // DATABASE_URL: Joi.string().required(),
        // SECRET_KEY: Joi.string().required(),
      })
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('MONGO_DB_USER')}:${configService.get('MONGO_DB_PASSWORD')}@${configService.get('MONGO_DB_HOST')}:${configService.get('MONGO_DB_PORT')}/${configService.get('MONGO_DB_NAME')}`,
        authSource: 'admin'
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    RecetteModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
