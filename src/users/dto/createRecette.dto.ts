import { IsNotEmpty, IsAlphanumeric, IsEmail} from "class-validator";

export class CreateRecetteDto {
    @IsNotEmpty()
    @IsAlphanumeric()
    name: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    description: string;

    @IsEmail()
    email: string;
   
}