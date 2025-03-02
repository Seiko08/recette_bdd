import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users/user.schema';
import { Order } from './recette/recette.schema';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const userModel = app.get<Model<User>>('UserModel');
  const OrderModel = app.get<Model<Order>>('OrderModel');

  console.log('Suppression des anciennes données...');
  await userModel.deleteMany({});
  await OrderModel.deleteMany({});

  console.log('Insertion des utilisateurs...');
  const users = await userModel.insertMany([
    {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      password: 'password667',
      username: 'jonyd',
    },
    {
        firstname: 'bob',
        lastname: 'dylan',
        email: 'bob.dylan@example.com',
        password: 'password555',
        username: 'bobydee',
    },
  ]);

  console.log('Insertion des recettes...');
  const recettes = await OrderModel.insertMany([
    {
      name: 'Pizza Margherita',
      description: 'Une pizza classique avec sauce tomate, mozzarella et basilic.',
    },
    {
      name: 'Salade César',
      description: 'Salade fraîche avec poulet grillé, parmesan et sauce César.',
    },
  ]);

  console.log('Seeding terminé avec succès !');
  await app.close();
}

seed().catch((error) => {
  console.error('Erreur lors du seeding :', error);
  process.exit(1);
});
