import { IAuthor } from './Author';
import { IBook } from './Book';
import { IGenre } from './Genre';
import { ISeries } from './Series';

export interface IBookList {
    authors: IAuthor[];
    books: IBook[];
    series: ISeries[];
    genres: IGenre[];
}
