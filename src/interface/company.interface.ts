import { Document } from 'mongoose';


export interface ICompany extends Document {

    readonly companyName: string;
    readonly personName: string;
    readonly email: string;
    readonly phone: string;
}