# Application NestJS avec MongoDB (Utilisateurs et Commandes)

Ce projet est une application NestJS simple utilisant MongoDB comme base de données. Il gère deux collections : `Users` et `Orders` ( pour les recettes).

## Prérequis

* Node.js (version >= 18)
* npm (ou yarn)
* MongoDB installé et en cours d'exécution

## Installation


  Installez les dépendances :

    ```bash
    npm install

    N'oubliez pas de run "npm run seed" pour accéder à la base de donnée pré-établie
    ```

## Schémas des Collections

### User

```typescript
import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
});

export interface User extends Document {
  _id: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  username: string;
}