import { IGenre } from '../interfaces/genre.interface';
import { Field, ID, ObjectType } from 'type-graphql';
import { getModelForClass, prop as Property } from "@typegoose/typegoose";

@ObjectType({description: 'The GenreEntity model'})
export class GenreEntity implements IGenre {
    @Field(() => ID)
    id: string;

    @Field()
    @Property({required: true})
    name: string;

    @Field()
    @Property({nullable: true})
    notes?: string;

    @Field()
    @Property({required: true})
    public createdAt: Date;

    @Field()
    @Property({required: true})
    public modifiedAt: Date;
}

export const GenreModel = getModelForClass(GenreEntity);
