import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@InputType()
export class ChangeEmailInput{
    @IsNotEmpty()
    @IsEmail()
    @Field()
    Email: string;
}