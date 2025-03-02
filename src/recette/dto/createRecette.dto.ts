import { IsNotEmpty, IsAlphanumeric} from "class-validator";

export class CreateRecetteDto {
    @IsNotEmpty()
    @IsAlphanumeric()
    name: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    description: string;

}