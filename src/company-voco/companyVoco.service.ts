import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CompanyVoco, CompanyVocoDocument } from "./CompanyVoco.schema";
import { CreateCompanyVocoDto } from "./dto/create-company-voco.dto";
import { UpdateCompanyVocoDto } from "./dto/update-company-voco.dto";
import { Company, CompanyDocument } from "src/company/company.schema";
import { ASCENDING, DESCENDING } from "src/constant/param.constant";

@Injectable()
export class CompanyVocoService {

    constructor(@InjectModel(CompanyVoco.name) private companyVocoModel: Model<CompanyVocoDocument>,
        @InjectModel(Company.name) private companyModel: Model<CompanyDocument>
    ) { }

    async createCompanyVoco(companyId: string, createCompanyVocoDto: CreateCompanyVocoDto) {

        var company = await this.companyModel.findById(companyId);

        if (!company)
            throw new NotFoundException("Company not found with given Id.");

        const newCompanyVoco = new this.companyVocoModel({
            ...createCompanyVocoDto,
            companyId: company.id,
            company: company
        });

        newCompanyVoco.save();
        return newCompanyVoco.toJSON();
    }

    async updateCompanyVoco(companyVocoId: string, updateCompanyVocoDto: UpdateCompanyVocoDto) {
        return await this.companyVocoModel.findByIdAndUpdate(companyVocoId, updateCompanyVocoDto)
    }

    async deleteCompanyVoco(id: string) {
        const company = await this.companyVocoModel.findById(id);
        return await company.updateOne({ deletedAt: new Date() });
    }

    async findCompanyVocosByCompanyId(companyId: string) {
        var company = await this.companyModel.findById(companyId);

        if (!company)
            throw new NotFoundException("Company not found with given Id.");

        var companyVocos = await this.companyVocoModel.find({ companyId: company.id }).populate('company');
        return companyVocos;
    }

    async findAllCompanyVocos(query) {
        const { page = 1, itemsPerPage = 10} = query;
        const skip = (page - 1) * itemsPerPage;

        return await this.companyVocoModel.find().skip(skip).limit(itemsPerPage).sort({ createdAt: ASCENDING }).exec();
    }


    async searchCompanyVocos(query) {

        const { page = 1, itemsPerPage = 10, searchTerm = "" } = query;
        const skip = (page - 1) * itemsPerPage;

        const companyVocos = await this.companyVocoModel.find({
            'contents.tr': { $regex: `.*${searchTerm}.*`, $options: 'i' }
        }).skip(skip).limit(itemsPerPage).sort({ createdAt: DESCENDING }).exec();

        if (!companyVocos)
            throw new NotFoundException("Couldn't find anything.");

        return companyVocos;
    }
}