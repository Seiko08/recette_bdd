import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './recette.schema';
import { RecetteService } from './recette.service';
import { RecetteController } from './recette.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'Order',
        useFactory: () => {
          const schema = OrderSchema;
          return schema;
        },
      },
    ]),
  ],
  controllers: [RecetteController],
  providers: [RecetteService],
})
export class RecetteModule {}
