import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsArray, IsEmail, IsOptional, IsEnum, IsNotEmpty, IsPhoneNumber, IsString, IsUrl, MaxLength, maxLength, ValidateNested, ValidationArguments } from "class-validator";
import { CategoryEnum } from "src/enum/category.enum";
import { Zlib } from "zlib";

class Photo {
    @IsUrl()
    @MaxLength(200)
    @IsNotEmpty()
    @ApiProperty()
    readonly url: string;
}

class SocialMediaLinkUrl {
    @IsUrl()
    @MaxLength(200)
    @IsNotEmpty()
    @ApiProperty()
    readonly linkUrl: string;
}

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
    @IsEnum(CategoryEnum)
    @IsOptional()
    @ApiPropertyOptional({
        enum: CategoryEnum,
        enumName: 'CategoryEnum'
    })
    readonly Category?: CategoryEnum | undefined ;
    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly subCategory: string;
    @IsArray()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => Photo)
    @ApiPropertyOptional({ type: [Photo], description: 'List of company photos' })
    readonly photos: Photo[];
    @IsArray()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => SocialMediaLinkUrl)
    @ApiPropertyOptional({ type: [SocialMediaLinkUrl], description: 'List of company social media lik urls' })
    readonly SocialMediaLinkUrls: SocialMediaLinkUrl[];
}

