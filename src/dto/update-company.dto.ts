import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
export class UpdateStudentDto extends PartialType(CreateCompanyDto) { }