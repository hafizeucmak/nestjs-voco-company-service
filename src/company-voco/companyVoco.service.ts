import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CompanyVoco } from "./CompanyVoco.schema";
import { CreateCompanyVocoDto } from "./dto/create-company-voco.dto";
import { UpdateCompanyVocoDto } from "./dto/update-company-voco.dto";

@Injectable()
export class CompanyVocoService {

    constructor(@InjectModel(CompanyVoco.name) private companyVocoModel: Model<CompanyVocoService>) { }

    async createCompany(createCompanyVocoDto: CreateCompanyVocoDto) {
        const newCompany = await new this.companyVocoModel({ ...createCompanyVocoDto });
        newCompany.save();
        return newCompany.toJSON();
    }

    async updateCompany(companyVocoId: string, updateCompanyVocoDto: UpdateCompanyVocoDto) {
        return await this.companyVocoModel.findByIdAndUpdate(companyVocoId, updateCompanyVocoDto)
    }

    async deleteCompany(id: string) {
        const company = await this.companyVocoModel.findById(id);
        return await company.updateOne({ deletedAt: new Date() });
    }
}