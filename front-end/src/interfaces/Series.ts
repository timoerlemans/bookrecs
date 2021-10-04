import { KeyValue } from './KeyValue';

export interface ISeries {
    id: string;
    name: string;
    authorIds: string[];
    numberOfBooks: number;
    bookIds: string[];
    hasSubSeries: boolean;
    subSeries?: string[];
    finished: boolean;
    goodreadsLink?: string;
    relatedSeries?: string[];
    relatedBooks?: string[];
    recommendations?: KeyValue[];
}
