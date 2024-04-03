import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MaxLength } from "class-validator";

export class CreateCompanyDto {
    @IsString()
    @MaxLength(400)
    @IsNotEmpty()
    readonly companyName: string;
    @IsString()
    @MaxLength(400)
    @IsNotEmpty()
    readonly personName: string;
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @IsEmail()
    readonly email: string;
    @IsPhoneNumber()
    @IsNotEmpty()
    @IsString()
    readonly phone: string;
}