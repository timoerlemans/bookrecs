import { KeyValue } from './KeyValue';

export interface IBook {
    id: string;
    name: string;
    authorIds: string[];
    partOfSeries: boolean;
    seriesIds?: string[];
    numberInSeries?: KeyValue[];
    released: boolean;
    releaseYear?: number;
    genreIds?: string[];
    pages?: number;
    coverURL?: string;
    goodreadsRating?: number;
    goodreadsLink?: string;
    isbn?: string[];
    publisherId?: string[];
    editor?: string[];
    recommendations?: KeyValue[];
}

