import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiParam, ApiQuery, ApiTags } from "@nestjs/swagger";
import { CompanyVocoService } from "./companyVoco.service";
import { CreateCompanyVocoDto } from "./dto/create-company-voco.dto";
import { UpdateCompanyVocoDto } from "./dto/update-company-voco.dto";
import { query } from "express";

@ApiTags('CompanyVoco')
@Controller('companyVoco')
export class CompanyVocoController {
    constructor(private readonly companyVocoService: CompanyVocoService) { }

    @Post('createCompanyVoco/:companyId')
    @ApiParam({ name: 'companyId', type: String })
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
    @ApiQuery({ name: 'page', required: false, type: Number })
    @ApiQuery({ name: 'itemsPerPage', required: false, type: Number })
    async findAllCompanyVocos(
        @Query('page') page?: number,
        @Query('itemsPerPage') itemsPerPage?: number) {
        const query = {
            page,
            itemsPerPage,
        };
        return await this.companyVocoService.findAllCompanyVocos(query);
    }

    @Get('searchCompanyVocos')
    @ApiQuery({ name: 'page', required: false, type: Number })
    @ApiQuery({ name: 'itemsPerPage', required: false, type: Number })
    @ApiQuery({ name: 'searchTerm', required: true, type: String })
    async searchCompanyVocos(
        @Query('searchTerm') searchTerm: string,
        @Query('page') page?: number,
        @Query('itemsPerPage') itemsPerPage?: number

    ) {
        if (!searchTerm) {
            throw new NotFoundException('Search term is required.');
        }

        const query = {
            page,
            itemsPerPage,
            searchTerm
        };

        return await this.companyVocoService.searchCompanyVocos(query);
    }
}