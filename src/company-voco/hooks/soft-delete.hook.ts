import { Schema, Query } from 'mongoose';
import { CompanyVocoDocument } from '../companyVoco.schema';

export function softDeletePreHook(schema: Schema): void {
    schema.add({ deletedAt: Date });

    schema.pre<Query<CompanyVocoDocument, CompanyVocoDocument>>(/^find/, function (next) {
        this.where({ deletedAt: null });
        next();
    });
}