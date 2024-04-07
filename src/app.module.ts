import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './company/company.module';

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

    CompanyModule
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule { }
