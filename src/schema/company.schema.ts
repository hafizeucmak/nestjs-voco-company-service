import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Photos {
    @Prop()
    photoUrl: string;
}

const photosDocumentSchema = SchemaFactory.createForClass(Photos);

@Schema()
export class Company {
    @Prop()
    companyName: string;
    @Prop()
    personName: string;
    @Prop()
    email: string;
    @Prop()
    zipCode: string;
    @Prop()
    address: string;
    @Prop()
    website: string;
    @Prop()
    city: string;

    @Prop({ default: null })
    deletedAt: Date | null;

    @Prop({ type: [photosDocumentSchema] })
    questions: Photos[];

    createdAt: Date;

    updatedAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);

