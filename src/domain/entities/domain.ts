import {IEntity} from "../interfaces/entity.interface";

export abstract class Domain implements IEntity
{
    constructor(public id: string) {}
}