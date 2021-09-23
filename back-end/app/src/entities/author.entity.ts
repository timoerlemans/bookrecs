import { Field, ID, ObjectType } from 'type-graphql';
import { IAuthor } from '../interfaces/author.interface';
import { prop as Property } from '@typegoose/typegoose/lib/prop';
import { getModelForClass } from '@typegoose/typegoose';

@ObjectType({description: 'The AuthorEntity model'})
export class AuthorEntity implements IAuthor {
    @Field(() => ID)
    id: string;

    @Field()
    @Property({required: true})
    name: string;

    @Field({nullable: true})
    @Property()
    notes?: string;

    @Field(() => [String])
    @Property()
    bookIds: string[];

    @Field(() => [String])
    @Property()
    seriesIds: string[];

    @Field()
    @Property({required: true})
    public createdAt: Date;
    
    @Field()
    @Property({required: true})
    public modifiedAt: Date;
}

export const AuthorModel = getModelForClass(AuthorEntity)

