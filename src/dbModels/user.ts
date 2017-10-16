import { Document, Model, Schema, model } from 'mongoose';

interface IUser {
    name: string;
    email: string;
    signupDate: Date;
}
export interface IUserModel extends IUser, Document { }

export const UserSchema: Schema = new Schema({
    name: String,
    email: String,
    signupDate: Date,
});

UserSchema.pre('save', function(this: IUserModel, next: any) {
    if (!this.signupDate) {
        this.signupDate = new Date();
    }
    next();
});

export const User: Model<IUserModel> = model<IUserModel>('Users', UserSchema);
