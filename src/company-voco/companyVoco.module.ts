import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CompanyVoco, CompanyVocoSchema } from "./companyVoco.schema";
import { CompanyVocoService } from "./companyVoco.service";
import { CompanyVocoController } from "./companyVoco.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: CompanyVoco.name, schema: CompanyVocoSchema },
        ])
    ],
    controllers: [CompanyVocoController],
    providers: [CompanyVocoService],
    exports: []
})

export class CompanyVocoModule { }
