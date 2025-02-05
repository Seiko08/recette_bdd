import {  IsAlphanumeric, IsEmail, MinLength} from "class-validator";

export class CreateRecetteDto {
    
    @IsAlphanumeric()
    name: string;

    @IsAlphanumeric()
    description: string;

    @IsEmail()
    email: string;
   
}