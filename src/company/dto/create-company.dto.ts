import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsEmail, IsOptional, IsEnum, IsNotEmpty, IsPhoneNumber, IsString, IsUrl, MaxLength, ValidateNested } from "class-validator";
import { CategoryEnum } from "src/enum/category.enum";

class PhotoDto {
    @IsUrl()
    @MaxLength(200)
    @IsNotEmpty()
    @ApiProperty()
    readonly url: string;
}

class SocialMediaLinkUrlDto {
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
    @ApiProperty({
        enum: CategoryEnum,
        enumName: 'CategoryEnum'
    })
    readonly category: CategoryEnum;
    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly subCategory: string;
    @IsArray()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => PhotoDto)
    @ApiPropertyOptional({ type: [PhotoDto]})
    readonly photos: PhotoDto[];
    @IsArray()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => SocialMediaLinkUrlDto)
    @ApiPropertyOptional({ type: [SocialMediaLinkUrlDto] })
    readonly SocialMediaLinkUrls: SocialMediaLinkUrlDto[];
}

