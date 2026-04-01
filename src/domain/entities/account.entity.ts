import {IUser} from "@domain/entities/user.entity";
import {Domain} from "@domain/entities/domain";
import {ITimestamp} from "@domain/entities/timestamp";

export interface IAccount extends ITimestamp
{
        user: IUser;
}

export class AccountEntity extends Domain<number> implements IAccount {
    createdAt: Date;
    updatedAt: Date ;
    user: IUser;

    constructor(id: number, props: Partial<IAccount>)  {
        super(id);
        Object.assign(this, props);
    }
}