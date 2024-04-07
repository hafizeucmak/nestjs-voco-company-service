import { Schema, Query } from 'mongoose';
import { CompanyDocument } from 'src/company/company.schema';

export function softDeletePreHook(schema: Schema): void {
    schema.add({ deletedAt: Date });

    schema.pre<Query<CompanyDocument, CompanyDocument>>(/^find/, function (next) {
        this.where({ deletedAt: null });
        next();
    });
}