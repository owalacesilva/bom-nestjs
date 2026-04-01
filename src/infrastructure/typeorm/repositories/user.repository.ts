import {IUserQueryRepository} from "@domain/repositories/user.repository";
import {IUser} from "@domain/entities/user.entity";

export class TypeOrmUserQUeryRepository implements IUserQueryRepository {
    getByEmail(email: string): Promise<IUser | null> {
        return Promise.resolve(null);
    }

    getById(id: number): Promise<IUser | null> {
        return Promise.resolve(null);
    }

}