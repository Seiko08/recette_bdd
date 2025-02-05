import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model,Types } from 'mongoose';
import { User } from './user.schema';


@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private userModel: Model<User>) { }

    async find() {
        return await this.userModel.aggregate([
            {
                $lookup: {
                  from: 'recette',
                  localField: '_id',
                  foreignField: 'userId',
                  as: 'recette'
                },
              },
        ]);
    }
    async findById( id: string) {
        const users = await this.userModel.aggregate([
            {$match: {_id: new Types.ObjectId(id)}},
            {
                $lookup: {
                  from: 'recette',
                  localField: '_id',
                  foreignField: 'userId',
                  as: 'recette'
                }
              },
        ]);
        return users[0]
        // return await this.userModel.findOne( {_id: id});
    }
async create(dto) {
    return await this.userModel.create(dto);
}

async update(id: string, dto) { 
    return await this.userModel.findByIdAndUpdate(id,dto,{new: true});
}
async delete(id: string){
    return await this.userModel.findByIdAndDelete(id);
}

}
