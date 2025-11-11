export abstract class Domain<T>
{
    constructor(public id: T) {}

    public getId(): T
    {
        return this.id;
    }

    public setId(id: T)
    {
        this.id = id;
    }
}