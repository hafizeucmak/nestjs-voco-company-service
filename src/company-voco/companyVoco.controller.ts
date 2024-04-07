import { Body, Controller, Delete, HttpStatus, Param, Patch, Post, Req, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CompanyVocoService } from "./companyVoco.service";
import { CreateCompanyVocoDto } from "./dto/create-company-voco.dto";
import { UpdateCompanyVocoDto } from "./dto/update-company-voco.dto";

@ApiTags('CompanyVoco')
@Controller('companyVoco')
export class CompanyVocoController {
    constructor(private readonly companyVocoService: CompanyVocoService) { }

    @Post('createCompanyVoco')
    async createCompany(@Req() req, @Body() createCompanyVocoDto: CreateCompanyVocoDto) {
        return await this.companyVocoService.createCompany({ ...createCompanyVocoDto });
    }

    @Patch('updateCompanyVoco/:companyVocoId')
    async updateCompany(@Param('companyVocoId') companyVocoId: string, @Body() companyVoco: UpdateCompanyVocoDto) {
        return await this.companyVocoService.updateCompany(companyVocoId, companyVoco);
    }

    @Delete('deleteCompanyVoco/:companyVocoId')
    async deleteCompany(@Param('companyVocoId') companyVocoId: string) {
        return await this.companyVocoService.deleteCompany(companyVocoId);
    }
}