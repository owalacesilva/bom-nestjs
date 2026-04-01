import {IAccount} from "@domain/entities/account.entity";

export interface IAccountQueryRepository {
    /**
     * Get all accounts
     *
     * @return List of accounts
     */
    getAll(): IAccount[];

    /**
     * Get account by id
     *
     * @param id Account id
     * @return Account or null if not found
     */
    getById(id: number): IAccount | null;
}