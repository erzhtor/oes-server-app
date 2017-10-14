import { Document, Model, Schema, model } from 'mongoose';

interface IOrder {
    title: string;
    description: string;
    authorId: string;
    creationDate: Date;
}
export interface IOrderModel extends IOrder, Document { }

export const OrderSchema: Schema = new Schema({
    title: String,
    description: String,
    authorId: String,
    creationDate: Date,
});

OrderSchema.pre('save', function(this: IOrderModel, next: any) {
    if (!this.creationDate) {
        this.creationDate = new Date();
    }
    next();
});

export const Order: Model<IOrderModel> = model<IOrderModel>('Orders', OrderSchema);
