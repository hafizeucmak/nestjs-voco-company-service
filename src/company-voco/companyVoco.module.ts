import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CompanyVoco, CompanyVocoSchema } from "./companyVoco.schema";
import { CompanyVocoService } from "./companyVoco.service";
import { CompanyVocoController } from "./companyVoco.controller";
import { CompanyService } from "src/company/company.service";
import { Company, CompanySchema } from "src/company/company.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: CompanyVoco.name, schema: CompanyVocoSchema },
            { name: Company.name, schema: CompanySchema }

        ])
    ],
    controllers: [CompanyVocoController],
    providers: [CompanyVocoService, CompanyService],
    exports: []
})

export class CompanyVocoModule { }
