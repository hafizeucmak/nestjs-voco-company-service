import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsEmail, IsOptional, IsEnum, IsNotEmpty, IsPhoneNumber, IsString, IsUrl, MaxLength, maxLength } from "class-validator";
import { CategoryEnum } from "src/enum/category.enum";

export class CreateCompanyDto {
    @IsString()
    @MaxLength(400)
    @IsNotEmpty()
    @ApiProperty()
    readonly companyName: string;
    @IsString()
    @MaxLength(400)
    @IsNotEmpty()
    @ApiProperty()
    readonly personName: string;
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @IsEmail()
    @ApiProperty()
    readonly email: string;
    @IsPhoneNumber()
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly phone: string;
    @MaxLength(100)
    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly city: string;
    @MaxLength(100)
    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly district: string;
    @MaxLength(500)
    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly address: string;
    @MaxLength(50)
    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly zipCode: string;
    @IsString()
    @MaxLength(2000)
    @IsOptional()
    @ApiPropertyOptional()
    readonly location: string;
    @IsUrl()
    @IsOptional()
    @ApiPropertyOptional()
    readonly websiteUrl: string;
    @IsUrl()
    @IsOptional()
    @ApiPropertyOptional()
    readonly avatarUrl: string;
    @IsOptional()
    @ApiPropertyOptional()
    @IsEnum(CategoryEnum)
    readonly Category: CategoryEnum;
    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly subCategory: string;
    @IsArray()
    @MaxLength(500)
    @IsOptional()
    @ApiPropertyOptional()
    readonly companyPhotos: CompanyPhotoDto[];
    @IsArray()
    @IsOptional()
    @ApiPropertyOptional()
    readonly socialMediaLinkUrls: SocialMediaLinkUrlDto[];
}

export class CompanyPhotoDto {
    @IsUrl()
    @MaxLength(200)
    @IsNotEmpty()
    @ApiProperty()
    readonly companyPhotoUrl: string;
}

export class SocialMediaLinkUrlDto {
    @IsUrl()
    @MaxLength(200)
    @IsNotEmpty()
    @ApiProperty()
    socialMediaLinkUrl: string;
}
