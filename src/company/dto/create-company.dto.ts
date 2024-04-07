import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsEmail, IsOptional, IsEnum, IsNotEmpty, IsPhoneNumber, IsString, IsUrl, MaxLength, ValidateNested, ArrayMaxSize, ArrayMinSize } from "class-validator";
import { CategoryEnum } from "src/enum/category.enum";
import { LocationTypeEnum } from "src/enum/location.enum";

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

export class LocationDto {

    @IsEnum(LocationTypeEnum)
    @ApiProperty({
        enum: LocationTypeEnum,
        enumName: 'LocationTypeEnum'
    })
    readonly type: LocationTypeEnum;

    @IsNotEmpty()
    @ApiProperty({ type: [Number], isArray: true })
    @ArrayMaxSize(2)
    @ArrayMinSize(2)
    readonly coordinates: number[]; // [longitude, latitude]
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
    @IsNotEmpty()
    @ApiProperty({ type: LocationDto })
    @ValidateNested({ each: true })
    @Type(() => LocationDto)
    location: LocationDto;
}

