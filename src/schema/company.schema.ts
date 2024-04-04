import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class CompanyPhoto {
    @Prop()
    companyPhotoUrl: string;
}

const companyPhotoDocumentSchema = SchemaFactory.createForClass(CompanyPhoto);

@Schema()
export class SocialMediaLinkUrl {
    @Prop()
    socialMediaLinkUrl: string;
}

const socialMediaLinkUrlDocumentSchema = SchemaFactory.createForClass(SocialMediaLinkUrl);


@Schema()
export class Company {
    @Prop()
    companyName: string;
    @Prop()
    personName: string;
    @Prop()
    email: string;
    @Prop()
    city: string;
    @Prop()
    district: string;
    @Prop()
    address: string;
    @Prop()
    zipCode: string;
    @Prop()
    location: string;
    @Prop()
    websiteUrl: string;
    @Prop()
    avatarUrl: string;
    @Prop()
    Categories: string;
    @Prop()
    subCategory: string;
    @Prop({ type: [companyPhotoDocumentSchema] })
    companyPhotos: CompanyPhoto[];
    @Prop({ typ: [socialMediaLinkUrlDocumentSchema] })
    socialMediaLinkUrls: SocialMediaLinkUrl[]
    @Prop({ default: null })
    deletedAt: Date | null;
    @Prop({ default: () => new Date() })
    createdAt: Date;
    updatedAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);

