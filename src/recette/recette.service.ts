import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Order } from './recette.schema';

@Injectable()
export class RecetteService {
    constructor(@InjectModel('Order') private orderModel: Model<Order>) {}

    async find() {
        return await this.orderModel.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user'
                },
            },
        ]);
    }

    async findById(id: string) {
        const orders = await this.orderModel.aggregate([
            { $match: { _id: new Types.ObjectId(id) } },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user'
                }
            },
        ]);
        return orders[0];
    }

    async create(dto) {
        return await this.orderModel.create(dto);
    }

    async update(id: string, dto) {
        return await this.orderModel.findByIdAndUpdate(id, dto, { new: true });
    }

    async delete(id: string) {
        return await this.orderModel.findByIdAndDelete(id);
    }
}
