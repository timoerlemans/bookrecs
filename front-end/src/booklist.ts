import { IAuthor } from './interfaces/Author';
import { IBook } from './interfaces/Book';
import { IGenre } from './interfaces/Genre';
import { ISeries } from './interfaces/Series';

export interface IBookList {
    authors: IAuthor[];
    books: IBook[];
    series: ISeries[];
    genres: IGenre[];
}

export const booklist: IBookList = {
    authors: [
        {
            id: '1',
            name: 'Joe Abercrombie',
            bookIds: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            seriesIds: ['1', '2', '3']
        }
    ],
    books: [
        {
            id: '1',
            name: 'The Blade Itself',
            authorIds: ['1'],
            partOfSeries: true,
            numberInSeries: [
                {key: '1', value: 1}
            ],
            seriesIds: ['1'],
            released: true,
            releaseYear: 2006
        },
        {
            id: '2',
            name: 'Before They Are Hanged',
            authorIds: ['1'],
            partOfSeries: true,
            seriesIds: ['1'],
            released: true,
            releaseYear: 2007,

            numberInSeries: [
                {key: '1', value: 2}
            ]
        },
        {
            id: '3',
            name: 'Last Argument of Kings',
            authorIds: ['1'],
            partOfSeries: true,
            seriesIds: ['1'],
            released: true,
            releaseYear: 2008,
            numberInSeries: [
                {key: '1', value: 3}
            ]
        },
        {
            id: '4',
            name: 'Best Served Cold',
            authorIds: ['1'],
            partOfSeries: true,
            seriesIds: ['2'],
            released: true,
            releaseYear: 2009,
            numberInSeries: [
                {key: '2', value: 1}
            ]
        },
        {
            id: '5',
            name: 'The Heroes',
            authorIds: ['1'],
            partOfSeries: true,
            seriesIds: ['2'],
            released: true,
            releaseYear: 2011,
            numberInSeries: [
                {key: '2', value: 2}
            ]
        },
        {
            id: '6',
            name: 'Red Country',
            authorIds: ['1'],
            partOfSeries: true,
            seriesIds: ['2'],
            released: true,
            releaseYear: 2012,
            numberInSeries: [
                {key: '2', value: 3}
            ]
        },
        {
            id: '7',
            name: 'A Little Hatred',
            authorIds: ['1'],
            partOfSeries: true,
            seriesIds: ['3'],
            released: true,
            releaseYear: 2019,
            numberInSeries: [
                {key: '3', value: 1}
            ]
        },
        {
            id: '8',
            name: 'The Trouble With Peace',
            authorIds: ['1'],
            partOfSeries: true,
            seriesIds: ['3'],
            released: true,
            releaseYear: 2020,
            numberInSeries: [
                {key: '3', value: 2}
            ]
        },
        {
            id: '9',
            name: 'The Wisdom of Crowds',
            authorIds: ['1'],
            partOfSeries: true,
            seriesIds: ['3'],
            released: true,
            releaseYear: 2021,
            numberInSeries: [
                {key: '3', value: 3}
            ]
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
            authorIds: ['1'],
            hasSubSeries: false,
            finished: true,
            relatedSeries: ['2', '3']
        },
        {
            id: '2',
            bookIds: ['4', '5', '6'],
            authorIds: ['1'],
            name: 'The First Law stand-alones',
            numberOfBooks: 3,
            relatedSeries: ['1', '3'],
            hasSubSeries: false,
            finished: true
        },
        {
            id: '3',
            bookIds: ['7', '8', '9'],
            authorIds: ['1'],
            name: 'The Age of Madness',
            numberOfBooks: 3,
            relatedSeries: ['1', '2'],
            hasSubSeries: false,
            finished: true
        }
    ]
};
