import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CompanyController } from "src/company/company.controller";
import { Company,  CompanySchema } from "src/company/company.schema";
import { CompanyService } from "./company.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Company.name, schema: CompanySchema }
        ])
    ],
    controllers: [CompanyController],
    providers: [CompanyService],
    exports: [CompanyService]
})

export class CompanyModule { }
