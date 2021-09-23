import { Arg, Query, Resolver } from 'type-graphql';
import { AuthorEntity, AuthorModel } from '../entities/author.entity';

@Resolver()
export class AuthorResolver {
    @Query(() => AuthorEntity, {nullable: false})
    async returnSingleAuthor(@Arg('id') id: string) {
        return AuthorModel.findById({_id: id});
    }

    @Query(() => [AuthorEntity])
    async returnAllAuthors() {
        return AuthorModel.find();
    }
}
