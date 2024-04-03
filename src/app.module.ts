import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from './schema/company.schema';
import { CompanyController } from './controller/company.controller';
import { CompanyService } from './service/company.service';
import { ConfigModule } from '@nestjs/config';

require('dotenv').config();

@Module({
  imports: [

    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      dbName: process.env.MONGO_DB_NAME,
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASSWORD,
      readPreference: 'secondaryPreferred'
    }),

    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }])
  ],
  controllers: [AppController, CompanyController],
  providers: [AppService, CompanyService],
})

export class AppModule { }
