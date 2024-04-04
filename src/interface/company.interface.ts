import { Document } from 'mongoose';

export interface Category {
    categoryName: string;
}

export interface CompanyPhoto {
    companyPhotoUrl: string;
}

export interface SocialMediaLinkUrl
{
    socialMediaLinkUrl: string;
}

export interface ICompany extends Document {
    readonly companyName: string;
    readonly personName: string;
    readonly email: string;
    readonly phone: string;
    readonly city: string;
    readonly district: string;
    readonly address: string;
    readonly zipCode: string;
    readonly location: string;
    readonly websiteUrl: string;
    readonly avatarUrl: string;
    readonly Category: string;
    readonly subCategory: string;
    readonly companyPhotos: CompanyPhoto[];
    readonly socialMediaLinkUrls: SocialMediaLinkUrl[];
    readonly deletedAt: Date | null;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}