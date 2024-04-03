import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { CreateCompanyDto } from "src/dto/create-company.dto";
import { CompanyService } from "src/service/company.service";

@Controller('company')

export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

    @Post()
    async createCompany(@Res() response, @Body() createCompanyDto: CreateCompanyDto) {
        try {
            const newCompany = await this.companyService.createCompany(createCompanyDto);

            return response.status(HttpStatus.CREATED).json({
                message: 'Company has been created successfully',
                newCompany,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Student not created!',
                error: 'Bad Request'
            });
        }
    }
}