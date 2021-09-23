import { Field, ID, ObjectType } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose/lib/prop';
import { IPublisher } from '../interfaces/publisher.interface';
import { getModelForClass } from '@typegoose/typegoose';

@ObjectType({description: 'The PublisherEntity model'})
export class PublisherEntity implements IPublisher {
    @Field(() => ID)
    id: string;

    @Field()
    @Property({required: true})
    name: string;

    @Field()
    @Property({nullable: true})
    notes?: string;
}

export const PublisherModel = getModelForClass(PublisherEntity);
