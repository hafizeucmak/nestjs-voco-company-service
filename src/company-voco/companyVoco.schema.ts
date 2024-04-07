import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { TargetGenderEnum } from "src/enum/gender.enum";
import { LocationTypeEnum } from "src/enum/location.enum";

export type CompanyDocument = HydratedDocument<CompanyVoco>;

class Content {
    tr: string;
    en: String;
}

class Heading {
    tr: string;
    en: String;
}

class LocationDto {
    @Prop({ type: LocationTypeEnum })
    type: LocationTypeEnum;

    @Prop({ type: [Number] })
    coordinates: number[]; // [longitude, latitude]
}

@Schema()
export class CompanyVoco {
    @Prop()
    contents: Content[];

    @Prop()
    headings: Heading[];

    @Prop()
    city: string;

    @Prop()
    district: string;

    @Prop({ enum: Object.values(TargetGenderEnum) })
    targetGender: TargetGenderEnum;

    // @Prop() TODO:// learn target age
    // targetAge: string;

    // @Prop() TODO:// learn target age
    // status: string;

    @Prop({ type: LocationDto })
    location: LocationDto;

    @Prop({ default: null })
    deletedAt: Date | null;

    @Prop({ default: () => new Date() })
    createdAt: Date;

    @Prop({ default: null })
    updatedAt: Date | null;
}


export const CompanyVocoSchema = SchemaFactory.createForClass(CompanyVoco);