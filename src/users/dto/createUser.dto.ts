import { IsNotEmpty, IsAlphanumeric, IsEmail, MinLength} from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsAlphanumeric()
    firstname: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    lastname: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    username: string;

    @IsEmail()
    email: string;
}