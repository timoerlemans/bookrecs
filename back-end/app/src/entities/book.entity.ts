import { Field, ID, ObjectType } from 'type-graphql';
import { IBook } from '../interfaces/book.interface';
import { prop as Property } from '@typegoose/typegoose/lib/prop';
import { IRecommendation } from '../interfaces/recommendation.interface';

@ObjectType({description: 'The book model'})
export class BookEntity implements IBook {
    @Field(() => ID)
    id: string;

    @Field()
    @Property({required: true})
    name: string;

    @Field(() => [String])
    @Property({required: true})
    authorId: string[];

    @Field()
    @Property()
    partOfSeries: boolean;

    @Field()
    @Property()
    seriesId: string[];

    @Field()
    @Property()
    releaseYear: number;

    @Field()
    @Property()
    released: boolean;

    @Field(() => [String])
    @Property()
    genreIds: string[];


    @Field({nullable: true})
    @Property()
    notes?: string;

    @Field({nullable: true})
    @Property()
    pages?: number;

    @Field({nullable: true})
    @Property()
    goodreadsRating?: number;

    @Field({nullable: true})
    @Property()
    goodreadsLink?: string;

    @Field(() => [String], {nullable: true})
    @Property()
    isbn?: string[];

    @Field(() => [String], {nullable: true})
    @Property()
    publisherId?: string[];

    @Field(() => [String], {nullable: true})
    @Property()
    editor?: string[];

    @Field({nullable: true})
    @Property()
    coverURL?: string;

    @Field({nullable: true})
    @Property()
    recommendations?: IRecommendation[];

    @Field()
    @Property({required: true})
    createdAt: Date;

    @Field()
    @Property({required: true})
    modifiedAt: Date;
}
