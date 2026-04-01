import { IUser } from '@domain/entities/user.entity';

/**
 * Interface representing a repository for querying user data.
 * This interface defines methods for retrieving user information
 * based on specific criteria such as ID or email.
 */
export interface IUserQueryRepository {
    /**
     * Retrieves a user by their unique identifier.
     *
     * @param id - The unique identifier of the user.
     * @returns A promise that resolves to the user object if found, or null if not found.
     */
    getById(id: number): Promise<IUser | null>;

    /**
     * Retrieves a user by their email address.
     *
     * @param email - The email address of the user.
     * @returns A promise that resolves to the user object if found, or null if not found.
     */
    getByEmail(email: string): Promise<IUser | null>;
}