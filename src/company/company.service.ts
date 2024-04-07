import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Company, CompanyDocument } from "./company.schema";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";

@Injectable()
export class CompanyService {

    constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>) { }

    async createCompany(createCompanyDto: CreateCompanyDto) {
        const newCompany = await new this.companyModel({ ...createCompanyDto });
        newCompany.save();
        return newCompany.toJSON();
    }

    async updateCompany(companyId: string, updateCompanyDto: UpdateCompanyDto) {
        return await this.companyModel.findByIdAndUpdate(companyId, updateCompanyDto)
    }

    async deleteCompany(id: string) {
        const company = await this.companyModel.findById(id);
        return await company.updateOne({ deletedAt: new Date() });
    }
}