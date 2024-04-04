import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CompanyController } from "src/controller/company.controller";
import { Company, CompanyPhoto, CompanySchema, SocialMediaLinkUrl } from "src/schema/company.schema";
import { CompanyService } from "src/service/company.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Company.name, schema: CompanySchema }
        ])
    ],
    controllers: [CompanyController],
    providers: [CompanyService],
    exports: []
})

export class CompanyModule { }
