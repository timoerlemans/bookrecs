import { IBook } from './interfaces/Book';
import { ISeries } from './interfaces/Series';

export const getBooksByAuthor = (bookList: IBook[], authorId: string): IBook[] => bookList.filter(book => book.authorIds.includes(authorId));
export const getBooksBySeries = (bookList: IBook[], seriesId: string): IBook[] => bookList.filter(book => book.seriesIds?.includes(seriesId));
export const getSeriesByAuthor = (seriesList: ISeries[], authorId: string): ISeries[] => seriesList.filter(indvSeries => indvSeries.authorIds.includes(authorId));
export const getPublishedBooks = (bookList: IBook[]): IBook[] => bookList.filter(book => book.released && book.releaseYear && book.releaseYear > 0);
export const getPublishedBooksInSeries = (bookList: IBook[], seriesId: string): IBook[] => getPublishedBooks(bookList).filter(book => book.seriesIds?.includes(seriesId));
export const sortBooksByReleaseYear = (bookList: IBook[]): IBook[] => [...getPublishedBooks(bookList)].sort((a, b) => (b.releaseYear as number) - (a.releaseYear as number));
export const getReleaseYearOfBooks = (bookList: IBook[]): number[] => bookList.map(book => (book.releaseYear as number));
export const getPublishedRangeOfSeries = (bookList: IBook[], seriesId: string): string => `${Math.min(...getReleaseYearOfBooks(getPublishedBooksInSeries(bookList, seriesId)))}-${Math.max(...getReleaseYearOfBooks(getPublishedBooksInSeries(bookList, seriesId)))}`
