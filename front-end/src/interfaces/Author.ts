import {KeyValue} from './KeyValue';

export interface IAuthor {
    id: string;
    name: string;
    bookIds: string[];
    seriesIds?: string[];
    goodreadsLink?: string;
    photoURL?: string;
    biography?: string;
    birthDate?: string;
    deathDate?: string;
    birthPlace?: string;
    currentResidence?: string;
    notes?: string;
    recommendations?: KeyValue[];
}