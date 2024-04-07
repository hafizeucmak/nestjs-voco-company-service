import { Body, Controller, Delete, HttpStatus, Param, Patch, Post, Req, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CompanyService } from "src/company/company.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { CompanyDocument } from "./company.schema";

@ApiTags('Company')
@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

    @Post('createCompany')
    async createCompany(@Req() req, @Body() createCompanyDto: CreateCompanyDto) {
        return await this.companyService.createCompany({ ...createCompanyDto });
    }

    @Patch('updateCompany/:companyId')
    async updateCompany(@Param() id: any, @Body() company: UpdateCompanyDto) {
        const companyId = id.companyId
        return await this.companyService.updateCompany(companyId, company);
    }

    @Delete('deleteCompany/:companyId')
    async deleteCompany(@Param('companyId') companyId: string) : Promise<CompanyDocument> {
        return await this.companyService.deleteCompany(companyId);
    }
}