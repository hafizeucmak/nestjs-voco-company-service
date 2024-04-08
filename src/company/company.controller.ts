import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Req, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CompanyService } from "src/company/company.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";

@ApiTags('Company')
@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

    @Post('createCompany')
    async createCompany(@Req() req, @Body() createCompanyDto: CreateCompanyDto) {
        return await this.companyService.createCompany({ ...createCompanyDto });
    }

    @Patch('updateCompany/:companyId')
    async updateCompany(@Param('companyId') companyId: any, @Body() company: UpdateCompanyDto) {
        return await this.companyService.updateCompany(companyId, company);
    }

    @Delete('deleteCompany/:companyId')
    async deleteCompany(@Param('companyId') companyId: string) {
        return await this.companyService.deleteCompany(companyId);
    }

    @Get('findCompanyById/:companyId')
    async findCompanyById(@Param('companyId') companyId: string) {
        return await this.companyService.findCompanyById(companyId);
    }
}