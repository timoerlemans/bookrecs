import {KeyValue} from './KeyValue';

export interface IBook {
    id: string;
    name: string;
    authorId: string[];
    partOfSeries: boolean;
    seriesId?: string[];
    numberInSeries?: KeyValue[];
    releaseYear: number | null;
    released: boolean;
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

