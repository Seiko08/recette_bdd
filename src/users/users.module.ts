import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import * as bcrypt from 'bcrypt';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
	    name: 'User', 
	    useFactory: () => {
          const schema = UserSchema;
          schema.pre('save', async function (next) {
            const user = this as any;

					  if (!user.isModified('password')) {
					    return next();
					  }
					  
					  try {
					    const salt = await bcrypt.genSalt(10);
					    user.password = await bcrypt.hash(user.password, salt);
					    next();
					  } catch (err) {
					    next(err);
					  }
          });
          
          return schema;
        },
      }
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
