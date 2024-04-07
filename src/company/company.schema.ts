import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { CategoryEnum } from "src/enum/category.enum";

export type CompanyDocument = HydratedDocument<Company>;
@Schema()
export class Company {
    @Prop({ required: true, maxlength: 400 })
    companyName: string;
    @Prop({ required: true, maxlength: 400 })
    personName: string;
    @Prop({ required: true, maxlength: 100 })
    email: string;
    @Prop({ required: true })
    phone : string;
    @Prop({ maxlength: 100 })
    city: string;
    @Prop({ maxlength: 100 })
    district: string;
    @Prop({ maxlength: 500 })
    address: string;
    @Prop({ maxlength: 50 })
    zipCode: string;
    @Prop({ maxlength: 2000 })
    location: string;
    @Prop()
    websiteUrl: string;
    @Prop()
    avatarUrl: string;
    @Prop({ enum: CategoryEnum })
    category: CategoryEnum;
    @Prop()
    subCategory: string;
    @Prop({ 
        type: [{ 
            url: {type : String, required : true}, 
            createdAt: { type: Date, default: Date.now }
        }], 
        default: [] 
    })
    photos: { url: string, createdAt: Date }[];
    @Prop({ 
        type: [{ 
            linkUrl: {type : String, required : true}, 
            createdAt: { type: Date, default: Date.now }
        }], 
        default: [] 
    })
    socialMediaLinkUrls: { linkUrl: string, createdAt: Date }[];
    @Prop({ default: null })
    deletedAt: Date | null;
    @Prop({ default: () => new Date() })
    createdAt: Date;
    updatedAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);