import { Domain } from "./domain";

export interface IUser
{
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
}

export class UserEntity extends Domain<string> implements IUser
{
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;

    constructor(id: string)
    {
        super(id);
    }
}