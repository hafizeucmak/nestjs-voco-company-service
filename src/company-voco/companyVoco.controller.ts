import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Req, Res } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { CompanyVocoService } from "./companyVoco.service";
import { CreateCompanyVocoDto } from "./dto/create-company-voco.dto";
import { UpdateCompanyVocoDto } from "./dto/update-company-voco.dto";

@ApiTags('CompanyVoco')
@Controller('companyVoco')
export class CompanyVocoController {
    constructor(private readonly companyVocoService: CompanyVocoService) { }

    @Post('createCompanyVoco/:companyId')
    @ApiParam({ name: 'companyId', type: String})
    async createCompanyVoco(@Param('companyId') companyId, @Body() createCompanyVocoDto: CreateCompanyVocoDto) {
        return await this.companyVocoService.createCompanyVoco(companyId, createCompanyVocoDto);
    }

    @Patch('updateCompanyVoco/:companyVocoId')
    async updateCompanyVoco(@Param('companyVocoId') companyVocoId: string, @Body() companyVoco: UpdateCompanyVocoDto) {
        return await this.companyVocoService.updateCompanyVoco(companyVocoId, companyVoco);
    }

    @Delete('deleteCompanyVoco/:companyVocoId')
    async deleteCompanyVoco(@Param('companyVocoId') companyVocoId: string) {
        return await this.companyVocoService.deleteCompanyVoco(companyVocoId);
    }

    @Get('findCompanyVocosByCompanyId/:companyId')
    async findCompanyVocosByCompanyId(@Param('companyId') companyId: string) {
        return await this.companyVocoService.findCompanyVocosByCompanyId(companyId);
    }

    @Get('findAllCompanyVocos')
    async findAllCompanyVocos() {
        return await this.companyVocoService.findAllCompanyVocos();
    }
}