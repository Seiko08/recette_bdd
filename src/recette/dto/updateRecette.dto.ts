import {  IsNotEmpty, IsAlphanumeric, IsEmail, MinLength} from "class-validator";

export class CreateRecetteDto {
    @IsNotEmpty()
    @IsAlphanumeric()
    name: string;
    @IsNotEmpty()
    @IsAlphanumeric()
    description: string;
   
}