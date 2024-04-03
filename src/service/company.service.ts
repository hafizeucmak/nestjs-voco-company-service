import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCompanyDto } from "src/dto/create-company.dto";
import { ICompany } from "src/interface/company.interface";

@Injectable()
export class CompanyService {

    constructor(@InjectModel('Company') private companyModel: Model<ICompany>) { }

    async createCompany(createCompanyDto: CreateCompanyDto): Promise<ICompany> {
        const newCompany = await new this.companyModel(createCompanyDto);
        return newCompany.save();
    }
}