import {  IsAlphanumeric, IsEmail, MinLength} from "class-validator";

export class CreateUserDto {
    
    @IsAlphanumeric()
    firstname?: string;

    @IsAlphanumeric()
    lastname?: string;

    
    @MinLength(8)
    password?: string;

    
    @IsAlphanumeric()
    username?: string;

    @IsEmail()
    email?: string;
}