import { IAuthor } from './interfaces/Author';
import { IBook } from './interfaces/Book';
import { IGenre } from './interfaces/Genre';
import { ISeries } from './interfaces/Series';
import data from './assets/json/booklist.json';


export interface IBookList {
    authors: IAuthor[];
    books: IBook[];
    series: ISeries[];
    genres: IGenre[];
}
export let booklist: IBookList = data;
