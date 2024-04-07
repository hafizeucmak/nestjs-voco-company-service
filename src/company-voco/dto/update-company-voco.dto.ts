import { PartialType } from '@nestjs/swagger';
import { CreateCompanyVocoDto } from './create-company-voco.dto';
export class UpdateCompanyVocoDto extends PartialType(CreateCompanyVocoDto) { }