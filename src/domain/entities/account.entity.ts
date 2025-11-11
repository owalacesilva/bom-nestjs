import {Domain} from "@domain/entities/domain";
import {IUser} from "@domain/entities/user.entity";

export interface IAccount
{
    user: IUser;
}

export class AccountEntity
    extends Domain<number>
    implements IAccount {
    user: IUser;

    constructor(id: number)
    {
        super(id);
    }
}