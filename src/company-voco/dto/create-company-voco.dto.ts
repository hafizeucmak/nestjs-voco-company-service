import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsEnum, IsNotEmpty, IsOptional, MaxLength, ValidateNested } from "class-validator";
import { TargetGenderEnum } from "src/enum/gender.enum";
import { LocationTypeEnum } from "src/enum/location.enum";

export class ContentDto {
    @MaxLength(500)
    @IsNotEmpty()
    @ApiProperty()
    readonly tr: string;
    @MaxLength(500)
    @IsNotEmpty()
    @ApiProperty()
    readonly en: string;
}
export class HeadingDto {
    @MaxLength(500)
    @IsNotEmpty()
    @ApiProperty()
    readonly tr: string;
    @MaxLength(500)
    @IsNotEmpty()
    @ApiProperty()
    readonly en: string;
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

export class CreateCompanyVocoDto {
    @IsNotEmpty()
    @ApiProperty()
    @IsArray()
    @ValidateNested({ each: true })
    @ApiProperty({ type: [ContentDto] })
    @Type(() => ContentDto)
    contents: ContentDto[];

    @IsNotEmpty()
    @ApiProperty({ type: [HeadingDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => HeadingDto)
    headings: HeadingDto[];

    @IsNotEmpty()
    @ApiProperty({ type: LocationDto })
    @ValidateNested({ each: true })
    @Type(() => LocationDto)
    location: LocationDto;

    @ApiPropertyOptional()
    city: string;

    @ApiPropertyOptional()
    district: string;

    @IsEnum(TargetGenderEnum)
    @IsOptional()
    @ApiPropertyOptional({
        enum: TargetGenderEnum,
        enumName: 'TargetGenderEnum'
    })
    targetGender: TargetGenderEnum | undefined;

    // TODO:// learn target age ranges
    // readonly targetAge: string;
}