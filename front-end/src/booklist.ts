import {IAuthor} from './interfaces/Author';
import {IBook} from './interfaces/Book';
import {IGenre} from './interaces/Genre';
import {ISeries} from './interaces/Series';

export interface IBookList {
    authors: IAuthor[];
    books: IBook[];
    series: Series[];
    genres: IGenre[];
}

export const booklist: IBookList = {
   authors: [
       {
           id: '1',
           name: 'Joe Abercrombie',
           bookIds: ['1']
       }
   ],
   books: [
       {
           id:  '1',
           name: 'The Blade Itself',
           authorIds: ['1'],
           partOfSeries: true,
           seriesId: '1'
       },
       {
        id:  '2',
        name: 'Before They Are Hanged',
        authorIds: ['1'],
        partOfSeries: true,
        seriesId: '1'
    },
    {
        id:  '3',
        name: 'Last Argument of Kings',
        authorIds: ['1'],
        partOfSeries: true,
        seriesId: '1'
    }
   ],
   genres: [
       {
           id: '1',
           name: 'Fantasy'
       },
       {
           id: '2',
           name: 'Science Fiction'
       }
   ],

   series: [
    {
        id: '1',
        name: 'The First Law',
        numberOfBooks: 3,
        bookIds: ['1', '2', '3'],
        authorsIds: ['1']
    }
   ]
};