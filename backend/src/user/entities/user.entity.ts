import {IsNotEmpty, MinLength} from "class-validator";


export class UserEntity {class
    id: number;
    @IsNotEmpty()
    @MinLength(3)
    name: string;
    @IsNotEmpty()
    @MinLength(3)
    password: string;
    createdAt: Date;
    updatedAt: Date
}
