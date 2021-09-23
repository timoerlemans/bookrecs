import { Field, ID, ObjectType } from 'type-graphql';
import { ISeries } from '../interfaces/series.interface';
import { getModelForClass } from '@typegoose/typegoose';
import { prop as Property } from '@typegoose/typegoose/lib/prop';
import { IRecommendation } from '../interfaces/recommendation.interface';

@ObjectType({description: 'The series model'})
export class SeriesEntity implements ISeries {
    @Field(() => ID)
    id: string;

    @Field()
    @Property({required: true})
    name: string;

    @Field({nullable: true})
    @Property()
    notes?: string;

    @Field(() => [String])
    @Property({required: true})
    authorId: string[];

    @Field()
    @Property()
    numberOfBooks: number;

    @Field(() => [String])
    @Property()
    bookIds: string[];

    @Field()
    @Property()
    hasSubSeries: boolean;

    @Field(() => [String], {nullable: true})
    @Property()
    subSeries?: string[];

    @Field()
    @Property()
    finished: boolean;

    @Field({nullable: true})
    @Property()
    goodreadsLink?: string;

    @Field()
    createdAt: Date;
    modifiedAt: Date;

    recommendations: IRecommendation[];
}

export const SeriesModel = getModelForClass(SeriesEntity)
